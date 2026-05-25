---
title: MTGo Authentication API
description: Authenticate users and bots with MTGo using phone, bot token, 2FA, or QR code login.
---

# MTGo Authentication API

MTGo supports multiple authentication flows: bot token login, phone number with verification code, two-factor authentication (2FA), and QR code login.

## Types

### SendCodeResult

```go
type SendCodeResult struct {
    PhoneCodeHash string              // Hash to use with SignIn/SignUp
    Type          tg.SentCodeTypeClass // Type of sent code (SMS, call, flash, etc.)
    NextType      tg.CodeTypeClass     // Next available code type
    Timeout       int                  // Timeout in seconds for code resending
}
```

---

## Bot Authentication

### Bot Token Login

Bots authenticate with a single token obtained from [@BotFather](https://t.me/BotFather).

```go
client, err := mtgo.NewClient(mtgo.Config{
    AppID:          12345,
    AppHash:        "your_app_hash",
    Session:        storage.NewMemoryStorage(),
})
if err != nil {
    log.Fatal(err)
}

err = client.Run(context.Background(), "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11")
if err != nil {
    log.Fatal(err)
}
```

---

## Phone Authentication

### SendCode

```go
func (c *Client) SendCode(ctx context.Context, phoneNumber string) (*SendCodeResult, error)
```

Sends a verification code to the given phone number.

| Parameter | Type | Description |
|-----------|------|-------------|
| `ctx` | `context.Context` | Request context |
| `phoneNumber` | `string` | Phone number in international format |

| Return | Description |
|--------|-------------|
| `*SendCodeResult` | Code hash and metadata |
| `error` | Network or API error |

```go
result, err := client.SendCode(ctx, "+1234567890")
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Code hash: %s\n", result.PhoneCodeHash)
```

### SignIn

```go
func (c *Client) SignIn(ctx context.Context, phoneNumber, phoneCode, phoneCodeHash string) error
```

Completes sign-in with the verification code received by the user.

| Parameter | Type | Description |
|-----------|------|-------------|
| `ctx` | `context.Context` | Request context |
| `phoneNumber` | `string` | Phone number used in SendCode |
| `phoneCode` | `string` | Verification code received |
| `phoneCodeHash` | `string` | Hash from SendCodeResult |

| Error | Description |
|-------|-------------|
| `SESSION_PASSWORD_NEEDED` | Account has 2FA; call `CheckPassword` |

```go
err := client.SignIn(ctx, "+1234567890", "12345", result.PhoneCodeHash)
if err != nil {
    var rpcErr *tgerr.Error
    if errors.As(err, &rpcErr) && rpcErr.IsType("SESSION_PASSWORD_NEEDED") {
        password := readPasswordFromUser()
        err = client.CheckPassword(ctx, password)
    }
    if err != nil {
        log.Fatal(err)
    }
}
```

### SignUp

```go
func (c *Client) SignUp(ctx context.Context, phoneNumber, phoneCode, phoneCodeHash, firstName, lastName string) error
```

Registers a new Telegram account after the sign-in step indicates the number is not registered.

| Parameter | Type | Description |
|-----------|------|-------------|
| `ctx` | `context.Context` | Request context |
| `phoneNumber` | `string` | Phone number |
| `phoneCode` | `string` | Verification code |
| `phoneCodeHash` | `string` | Hash from SendCodeResult |
| `firstName` | `string` | Account first name |
| `lastName` | `string` | Account last name |

```go
err := client.SignUp(ctx, "+1234567890", "12345", result.PhoneCodeHash, "John", "Doe")
if err != nil {
    log.Fatal(err)
}
```

---

## Two-Factor Authentication

### CheckPassword

```go
func (c *Client) CheckPassword(ctx context.Context, password string) error
```

Verifies the two-factor authentication password when `SESSION_PASSWORD_NEEDED` is returned during sign-in.

| Parameter | Type | Description |
|-----------|------|-------------|
| `ctx` | `context.Context` | Request context |
| `password` | `string` | 2FA password |

```go
err := client.CheckPassword(ctx, "mySecretPassword123")
if err != nil {
    log.Fatal(err)
}
```

### Full Phone + 2FA Flow

```go
result, err := client.SendCode(ctx, "+1234567890")
if err != nil {
    log.Fatal(err)
}

code := readCodeFromUser()
err = client.SignIn(ctx, "+1234567890", code, result.PhoneCodeHash)
if err != nil {
    var rpcErr *tgerr.Error
    if errors.As(err, &rpcErr) && rpcErr.IsType("SESSION_PASSWORD_NEEDED") {
        fmt.Print("Enter 2FA password: ")
        password := readPasswordFromUser()
        err = client.CheckPassword(ctx, password)
    }
    if err != nil {
        log.Fatal(err)
    }
}

me, _ := client.GetMe(ctx)
fmt.Printf("Signed in as %s\n", me.FirstName)
```

---

## QR Code Login

### ExportLoginToken

```go
func (c *Client) ExportLoginToken(ctx context.Context) (*tg.LoginToken, error)
```

Generates a QR code login token. The token URL should be rendered as a QR code for the user to scan with their Telegram app.

| Return | Description |
|--------|-------------|
| `*tg.LoginToken` | Login token with URL to encode as QR |

```go
token, err := client.ExportLoginToken(ctx)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("QR URL: %s\n", token.URL)
```

### ImportLoginToken

```go
func (c *Client) ImportLoginToken(ctx context.Context, token *tg.LoginToken) error
```

Imports a scanned login token to complete QR authentication. Poll this in a loop until the user scans the QR code.

| Parameter | Type | Description |
|-----------|------|-------------|
| `ctx` | `context.Context` | Request context |
| `token` | `*tg.LoginToken` | Token from ExportLoginToken |

```go
token, err := client.ExportLoginToken(ctx)
if err != nil {
    log.Fatal(err)
}

for {
    err := client.ImportLoginToken(ctx, token)
    if err == nil {
        break
    }
    var rpcErr *tgerr.Error
    if errors.As(err, &rpcErr) && rpcErr.IsType("SESSION_PASSWORD_NEEDED") {
        client.CheckPassword(ctx, readPasswordFromUser())
        break
    }
    time.Sleep(2 * time.Second)
}

me, _ := client.GetMe(ctx)
fmt.Printf("Logged in as %s\n", me.FirstName)
```

---

## Get Current User

### GetMe

```go
func (c *Client) GetMe(ctx context.Context) (*types.User, error)
```

Returns the currently authenticated user.

| Return | Description |
|--------|-------------|
| `*types.User` | Current user info |
| `error` | Not authenticated or network error |

```go
me, err := client.GetMe(ctx)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("ID: %d, Name: %s, Username: @%s\n", me.ID, me.FirstName, me.Username)
```
