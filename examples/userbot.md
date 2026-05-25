---
title: MTGo Userbot Example
description: Build a userbot using phone number authentication with MTGo, including 2FA support and session string export.
---

# MTGo Userbot Example

Userbots authenticate with a phone number instead of a bot token. This example covers the full authentication flow including SMS verification, 2FA password check, and session string export for reuse.

## Full Code

```go
package main

import (
    "context"
    "fmt"
    "log"
    "os"

    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/mtgo/telegram/types"
)

func main() {
    apiID := mustAtoi(mustEnv("API_ID"))
    apiHash := mustEnv("API_HASH")
    phone := mustEnv("PHONE")

    client, err := tg.NewClient(apiID, apiHash, &tg.Config{
        SessionName: "userbot",
        SavePeers:   true,
    })
    if err != nil {
        log.Fatalf("new client: %v", err)
    }

    if err := client.Connect(0); err != nil {
        log.Fatalf("connect: %v", err)
    }
    defer client.Stop()

    // Check if already authenticated
    if client.IsAuthorized() {
        log.Println("Already authenticated, skipping login...")
    } else {
        authenticate(client, phone)
    }

    // Export session string for reuse
    sessionStr, err := client.ExportSessionString()
    if err != nil {
        log.Printf("export session string: %v", err)
    } else {
        fmt.Println("Session string (save this for reuse):")
        fmt.Println(sessionStr)
    }

    // Get user info
    me, err := client.GetMe(context.Background())
    if err != nil {
        log.Fatalf("get me: %v", err)
    }
    fmt.Printf("Logged in as %s @%s\n", me.FirstName, me.Username)

    // Handle incoming messages
    client.OnMessage(func(c *tg.Client, msg *types.Message) {
        if msg.Out {
            return // skip own messages
        }
        if msg.Text == "" {
            return
        }

        log.Printf("[%d] %s: %s", msg.ChatID(), msg.SenderID(), msg.Text)
    }, tg.All)

    client.Idle()
}

func authenticate(client *tg.Client, phone string) {
    ctx := context.Background()

    // Step 1: Send verification code
    sentCode, err := client.SendCode(ctx, phone)
    if err != nil {
        log.Fatalf("send code: %v", err)
    }

    // Step 2: Prompt user for the code
    fmt.Printf("Enter the code sent to %s: ", phone)
    var code string
    fmt.Scanln(&code)

    // Step 3: Sign in with the code
    signInResult, err := client.SignIn(ctx, phone, code, sentCode.PhoneCodeHash)
    if err != nil {
        // Check if 2FA is required
        if tg.IsPasswordRequired(err) {
            password := promptPassword()
            _, err = client.CheckPassword(ctx, password)
            if err != nil {
                log.Fatalf("check password: %v", err)
            }
        } else {
            log.Fatalf("sign in: %v", err)
        }
    }

    if signInResult != nil {
        fmt.Printf("Signed in successfully!\n")
    } else {
        fmt.Printf("Signed in (via password)!\n")
    }
}

func promptPassword() string {
    fmt.Print("Enter your 2FA password: ")
    var password string
    fmt.Scanln(&password)
    return password
}

func mustEnv(key string) string {
    v := os.Getenv(key)
    if v == "" {
        log.Fatalf("environment variable %s is required", key)
    }
    return v
}

func mustAtoi(s string) int {
    var n int
    if _, err := fmt.Sscanf(s, "%d", &n); err != nil {
        log.Fatalf("invalid integer %q: %v", s, err)
    }
    return n
}
```

## How It Works

### Authentication Flow

Userbots follow a multi-step authentication process:

```
SendCode → user enters SMS code → SignIn → done
                                      ↓ (if 2FA enabled)
                                   CheckPassword → done
```

### Step 1: Send Verification Code

```go
sentCode, err := client.SendCode(ctx, phone)
```

This triggers Telegram to send a verification code to the phone number via SMS or Telegram. The `sentCode` object contains the `PhoneCodeHash` needed for the next step.

### Step 2: Sign In with Code

```go
signInResult, err := client.SignIn(ctx, phone, code, sentCode.PhoneCodeHash)
```

Submit the code the user received. If the account has 2FA enabled, this returns an error indicating a password is required.

### Step 3: Handle 2FA (If Enabled)

```go
if tg.IsPasswordRequired(err) {
    _, err = client.CheckPassword(ctx, password)
}
```

`IsPasswordRequired` checks if the error indicates 2FA. If so, `CheckPassword` submits the user's 2FA password.

### Checking Authorization

```go
if client.IsAuthorized() {
    // Session is already authenticated
}
```

On subsequent runs, if the session is still valid, the client skips authentication entirely. This is why session persistence matters.

### Session String Export

```go
sessionStr, err := client.ExportSessionString()
```

Export a portable session string that can be used to resume the session elsewhere:

```go
// On a different machine:
client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    SessionString: sessionStr,
})
```

::: warning
Session strings contain the full auth key. Store them securely and never share them.
:::

### Skipping Own Messages

```go
if msg.Out {
    return // skip messages sent by the userbot
}
```

Unlike bots, userbots receive their own messages in updates. Filter them out with the `msg.Out` flag to avoid loops.

### Message Handling

```go
client.OnMessage(func(c *tg.Client, msg *types.Message) {
    log.Printf("[%d] %s: %s", msg.ChatID(), msg.SenderID(), msg.Text)
}, tg.All)
```

Use `tg.All` to receive messages in all chats (private, groups, channels). For userbots, this is typically what you want.

## Resuming from a Session String

Once you have a session string, you can skip the authentication flow entirely:

```go
package main

import (
    "context"
    "fmt"
    "log"

    tg "github.com/mtgo-labs/mtgo/telegram"
)

func main() {
    sessionStr := "your_session_string_here"

    client, err := tg.NewClient(apiID, apiHash, &tg.Config{
        SessionString: sessionStr,
        SavePeers:     true,
        SessionName:   "resumed_userbot",
    })
    if err != nil {
        log.Fatal(err)
    }

    if err := client.Connect(0); err != nil {
        log.Fatal(err)
    }
    defer client.Stop()

    me, _ := client.GetMe(context.Background())
    fmt.Printf("Resumed session as @%s\n", me.Username)

    client.Idle()
}
```

## Running

```bash
export API_ID=12345
export API_HASH=your_api_hash
export PHONE=+1234567890

go run main.go
```

On first run, you'll be prompted for the SMS code (and optionally 2FA password). On subsequent runs, the saved session is used automatically.

::: warning
Userbots must comply with Telegram's Terms of Service. Avoid spamming, scraping, or automating actions that violate user privacy.
:::
