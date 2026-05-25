---
title: Error Handling
description: Handling Telegram RPC errors with tgerr.
---

# Error Handling

mtgo uses generated error types from the `tgerr` package for structured error handling.

## Basic Pattern

```go
import "github.com/mtgo-labs/mtgo/tgerr"

result, err := rpc.SomeMethod(ctx, req)
if err != nil {
    var rpcErr *tgerr.Error
    if errors.As(err, &rpcErr) {
        switch {
        case tgerr.Is(err, tgerr.ErrFloodWait):
            // Rate limited — wait duration available via rpcErr
        case tgerr.Is(err, tgerr.ErrSessionPasswordNeeded):
            // 2FA required
        case tgerr.Is(err, tgerr.ErrPhoneNumberInvalid):
            // Invalid phone number
        }
    }
    return err
}
```

## tgerr.Error Fields

| Field | Type | Description |
|-------|------|-------------|
| `Code` | `int` | Numeric error code (e.g. 420 for FLOOD_WAIT) |
| `Type` | `string` | Error type string (e.g. "FLOOD_WAIT") |
| `Message` | `string` | Human-readable error message |

## Common Error Types

| Error | Code | Description |
|-------|------|-------------|
| `FLOOD_WAIT` | 420 | Rate limited. Wait N seconds. Auto-handled by [floodwait middleware](/plugins/floodwait) |
| `SESSION_PASSWORD_NEEDED` | 401 | 2FA password required |
| `AUTH_KEY_UNREGISTERED` | 401 | Session not authorized |
| `PEER_ID_INVALID` | 400 | Invalid peer ID or access hash |
| `USER_IS_BOT` | 400 | Bots can't perform this action |
| `CHAT_WRITE_FORBIDDEN` | 403 | No write permission in chat |
| `MESSAGE_DELETE_FORBIDDEN` | 403 | Can't delete this message |
| `USER_NOT_PARTICIPANT` | 403 | User is not in the chat |
| `BOT_METHOD_INVALID` | 400 | Bots can't use this method |

## DC Migration

DC migration errors (code 303) are handled automatically by the client. When Telegram returns a `USER_MIGRATE_X` or `FILE_MIGRATE_X` error, the client reconnects to the correct DC and retries the request transparently.

## With Middleware

The [floodwait middleware](/plugins/floodwait) automatically handles `FLOOD_WAIT` errors by sleeping and retrying. The [ratelimit middleware](/plugins/ratelimit) prevents hitting rate limits in the first place.
