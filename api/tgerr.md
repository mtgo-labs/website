---
title: MTGo Error Handling (tgerr)
description: Typed RPC error handling, flood wait management, and security checks in MTGo.
---

# MTGo Error Handling (tgerr)

The `tgerr` package provides structured error handling for Telegram RPC errors. It parses error codes, types, and provides utilities for common patterns like flood wait handling.

## Error Type

```go
type Error struct {
    Code     int    // HTTP-style error code (e.g. 400, 401, 420, 500)
    Message  string // Human-readable error message
    Type     string // Machine-readable error type string (e.g. "FLOOD_WAIT_60")
    Argument int    // Parsed numeric argument from error type
}
```

### Constructor

```go
func New(code int, msg string) *Error
```

Creates a new RPC error with the given code and message. The `Type` and `Argument` fields are parsed automatically from the message format.

```go
err := tgerr.New(420, "FLOOD_WAIT_60")
fmt.Println(err.Type)     // "FLOOD_WAIT"
fmt.Println(err.Argument) // 60
```

### Methods

#### Error

```go
func (e *Error) Error() string
```

Returns the error string. Satisfies the `error` interface.

```go
fmt.Println(err.Error()) // "FLOOD_WAIT_60 (code 420)"
```

#### IsType

```go
func (e *Error) IsType(t string) bool
```

Checks if the error type matches the given string (without numeric suffix).

```go
if rpcErr.IsType("SESSION_PASSWORD_NEEDED") {
    // Handle 2FA
}
```

#### IsCode

```go
func (e *Error) IsCode(code int) bool
```

Checks if the error code matches.

```go
if rpcErr.IsCode(401) {
    // Unauthorized
}
```

#### IsOneOf

```go
func (e *Error) IsOneOf(tt ...string) bool
```

Checks if the error type matches any of the given types.

```go
if rpcErr.IsOneOf("CHAT_WRITE_FORBIDDEN", "USER_BANNED_IN_CHANNEL") {
    // Cannot write to chat
}
```

#### IsCodeOneOf

```go
func (e *Error) IsCodeOneOf(codes ...int) bool
```

Checks if the error code matches any of the given codes.

```go
if rpcErr.IsCodeOneOf(400, 403) {
    // Bad request or forbidden
}
```

---

## Package Functions

### AsType

```go
func AsType(err error, t string) (*Error, bool)
```

Extracts the error if it matches the given type. Returns the typed error and `true`, or `nil` and `false`.

```go
rpcErr, ok := tgerr.AsType(err, "SESSION_PASSWORD_NEEDED")
if ok {
    fmt.Printf("Need password: %s\n", rpcErr.Message)
}
```

### As

```go
func As(err error) (*Error, bool)
```

Extracts the typed error from any error. Returns `nil` and `false` if the error is not an RPC error.

```go
rpcErr, ok := tgerr.As(err)
if ok {
    fmt.Printf("RPC error: %s (code %d)\n", rpcErr.Type, rpcErr.Code)
}
```

### Is

```go
func Is(err error, tt ...string) bool
```

Checks if the error is an RPC error matching any of the given types.

```go
if tgerr.Is(err, "USER_DEACTIVATED", "USER_DEACTIVATED_BAN") {
    log.Fatal("Account deactivated")
}
```

### IsCode

```go
func IsCode(err error, codes ...int) bool
```

Checks if the error is an RPC error with any of the given codes.

```go
if tgerr.IsCode(err, 401) {
    fmt.Println("Unauthorized — need to re-authenticate")
}
```

---

## Flood Wait

### AsFloodWait

```go
func AsFloodWait(err error) (time.Duration, bool)
```

Extracts the flood wait duration from a `FLOOD_WAIT_X` error. Returns `0` and `false` if the error is not a flood wait.

```go
dur, ok := tgerr.AsFloodWait(err)
if ok {
    fmt.Printf("Flood wait: %s\n", dur)
    time.Sleep(dur)
    // Retry the request
}
```

### FloodWait

```go
func FloodWait(ctx context.Context, err error) (bool, error)
```

If the error is a `FLOOD_WAIT_X`, sleeps for the specified duration (respecting context cancellation) and returns `true`. Returns `false` if the error is not a flood wait. Returns the original error if it is not a flood wait, or the context error if the wait was cancelled.

```go
err = client.SendMessage(ctx, params)
if ok, waitErr := tgerr.FloodWait(ctx, err); ok {
    // Waited and can retry
    err = client.SendMessage(ctx, params)
}
```

### FloodWaitErrors

```go
var FloodWaitErrors = map[string]struct{}{}
```

Set of error types that should be treated as flood wait conditions. Extensible for custom error handling.

---

## Security

### SecurityCheckMismatch

```go
type SecurityCheckMismatch struct {
    Name string // Name of the security check that failed
}
```

Returned when a security validation fails (e.g., message hash mismatch, authorization key mismatch).

```go
func (e *SecurityCheckMismatch) Error() string {
    return fmt.Sprintf("security check mismatch: %s", e.Name)
}
```

### Check

```go
func Check(ok bool, name string)
```

Panics with `SecurityCheckMismatch` if `ok` is `false`. Used internally to validate cryptographic and protocol checks.

```go
tgerr.Check(msgHash == expectedHash, "message hash")
```

---

## Common Error Types

| Type | Code | Description |
|------|------|-------------|
| `SESSION_PASSWORD_NEEDED` | 401 | 2FA password required |
| `AUTH_KEY_UNREGISTERED` | 401 | Authorization key invalid |
| `USER_DEACTIVATED` | 401 | Account deactivated |
| `FLOOD_WAIT_X` | 420 | Rate limited; wait X seconds |
| `CHAT_WRITE_FORBIDDEN` | 403 | Cannot write to chat |
| `USER_BANNED_IN_CHANNEL` | 403 | User banned in channel |
| `PEER_FLOOD` | 400 | Spam filter triggered |
| `USER_PRIVACY_RESTRICTED` | 403 | Privacy setting blocks action |
| `MESSAGE_NOT_MODIFIED` | 400 | Message content unchanged |
| `MESSAGE_DELETE_FORBIDDEN` | 403 | Cannot delete message |
| `CHAT_ADMIN_REQUIRED` | 403 | Admin rights needed |
| `BOT_METHOD_INVALID` | 400 | Method not available to bots |
| `FILE_PARTS_INVALID` | 400 | Invalid file part count |
| `FILE_PART_X_MISSING` | 400 | Specific file part missing |

---

## Error Handling Patterns

### Retry on Flood

```go
func sendMessageWithRetry(ctx context.Context, client *mtgo.Client, params *params.SendMessage) (*types.Message, error) {
    for {
        msg, err := client.SendMessage(ctx, params)
        if err != nil {
            if ok, _ := tgerr.FloodWait(ctx, err); ok {
                continue
            }
            return nil, err
        }
        return msg, nil
    }
}
```

### Handle 2FA

```go
err := client.SignIn(ctx, phone, code, hash)
if err != nil {
    if tgerr.Is(err, "SESSION_PASSWORD_NEEDED") {
        password := readPasswordFromUser()
        err = client.CheckPassword(ctx, password)
        if err != nil {
            log.Fatal(err)
        }
    } else {
        log.Fatal(err)
    }
}
```

### Multiple Error Types

```go
err := client.SendMessage(ctx, params)
if err != nil {
    switch {
    case tgerr.Is(err, "PEER_FLOOD"):
        fmt.Println("Rate limited by peer flood filter")
    case tgerr.Is(err, "CHAT_WRITE_FORBIDDEN", "USER_BANNED_IN_CHANNEL"):
        fmt.Println("No write permission")
    case tgerr.Is(err, "USER_DEACTIVATED"):
        log.Fatal("Account deactivated")
    default:
        log.Fatal(err)
    }
}
```

---

## Client-Side Sentinel Errors

In addition to RPC errors from the Telegram API, the `telegram` package defines client-side sentinel errors for local validation and state checks. These are checked with `errors.Is` (not `tgerr.Is`).

### Connection & Lifecycle

```go
errors.Is(err, telegram.ErrNotConnected)
errors.Is(err, telegram.ErrAlreadyConnected)
errors.Is(err, telegram.ErrPeerNotFound)
errors.Is(err, telegram.ErrClientClosed)
errors.Is(err, telegram.ErrReconnectFailed)
errors.Is(err, telegram.ErrHealthTimeout)
errors.Is(err, telegram.ErrMigrationFailed)
errors.Is(err, telegram.ErrMigrationUnsafe)
errors.Is(err, telegram.ErrMigrationUnknown)
```

### Initialization & Authentication

```go
errors.Is(err, telegram.ErrAPIIDRequired)
errors.Is(err, telegram.ErrAPIHashRequired)
errors.Is(err, telegram.ErrNoStorage)
errors.Is(err, telegram.ErrAlreadyAuthed)
errors.Is(err, telegram.Err2FARequired)
errors.Is(err, telegram.ErrSignUpRequired)
```

### Context Errors

```go
errors.Is(err, telegram.ErrContextNoClient)
errors.Is(err, telegram.ErrContextNoChat)
errors.Is(err, telegram.ErrContextNoMessage)
errors.Is(err, telegram.ErrContextNoMedia)
errors.Is(err, telegram.ErrContextNoCallback)
errors.Is(err, telegram.ErrContextEditInline)
```

### Media & Messages

```go
errors.Is(err, telegram.ErrMediaNil)
errors.Is(err, telegram.ErrPhotoNoData)
errors.Is(err, telegram.ErrPhotoNoSizes)
errors.Is(err, telegram.ErrNoDownloadableMedia)
errors.Is(err, telegram.ErrNoMessage)
errors.Is(err, telegram.ErrNoMessageUpdates)
errors.Is(err, telegram.ErrNoMessageShort)
```

### Error Types (use `errors.As`)

```go
var reconnErr *telegram.ReconnectError
if errors.As(err, &reconnErr) {
    fmt.Printf("gave up after %d attempts\n", reconnErr.Attempts)
}

var migErr *telegram.MigrationError
if errors.As(err, &migErr) {
    fmt.Printf("migration to DC %d failed: %v\n", migErr.TargetDC, migErr.Err)
}

var unsafeErr *telegram.UnsafeMigrationError
if errors.As(err, &unsafeErr) {
    fmt.Printf("non-idempotent %s interrupted by migration to DC %d\n", unsafeErr.Method, unsafeErr.TargetDC)
}
```

For the complete list of client-side sentinel errors, see the [Client API Reference](/api/client#sentinel-errors).
