# MTGo Authentication

MTGo supports multiple authentication methods.

## Bot Authentication

The simplest method. Provide your bot token in the config:

```go
client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    BotToken: "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11",
})
```

No additional steps required — `client.Connect()` handles everything.

## Phone Number Authentication

For userbots (clients that act as a regular user):

```go
ctx := context.Background()

client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    PhoneNumber: "+1234567890",
})

// Step 1: Connect
client.Connect(30 * time.Second)

// Step 2: Send verification code
result, err := client.SendCode(ctx, "+1234567890")

// Step 3: Sign in with the code you received
err = client.SignIn(ctx, "+1234567890", code, result.PhoneCodeHash)
```

## Two-Factor Authentication

If the account has 2FA enabled:

```go
err = client.SignIn(ctx, phone, code, hash)
if tgerr.Is(err, "SESSION_PASSWORD_NEEDED") {
    err = client.CheckPassword(ctx, "your_2fa_password")
}
```

## QR Code Login

For a frictionless login without entering a phone number:

```go
client, err := tg.NewClient(apiID, apiHash, &tg.Config{})

// Generate a QR code (returns a tg.LoginToken)
token, err := client.ExportLoginToken(ctx)

// Display the QR code URL for the user to scan
fmt.Println("Scan this URL with Telegram:", token.Url)

// Wait for the user to scan
err = client.ImportLoginToken(ctx, token)
```

## Session Strings

Export a session string to reuse authentication without re-logging in:

```go
// After successful authentication
sessionStr, err := client.ExportSessionString()
fmt.Println("Session string:", sessionStr)
```

Resume with a session string:

```go
client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    SessionString: sessionStr,
})
```

## In-Memory Sessions

For short-lived clients or environments without a filesystem:

```go
client, err := tg.NewClient(apiID, apiHash, &tg.Config{
    InMemory: true,
})
```

## Getting the Authenticated User

```go
user, err := client.GetMe(ctx)
fmt.Printf("Logged in as: %s (ID: %d, Bot: %v)\n",
    user.FirstName, user.ID, user.IsBot)
```
