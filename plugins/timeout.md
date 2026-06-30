---
title: Timeout Middleware
description: Apply context-based deadlines to outgoing RPC calls, preventing requests from hanging forever.
---

# Timeout Middleware

Invoker middleware that applies context-based deadlines to outgoing RPC calls, preventing requests from hanging forever. Wraps every RPC with `context.WithTimeout` and returns a typed `*TimeoutError` when the deadline fires.

## Install

```bash
go get github.com/mtgo-labs/middlewares/timeout
```

## Quick Start

```go
import (
    "time"

    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/middlewares/timeout"
)

// Apply a 30s timeout to all RPC calls.
client.UseInvokerMiddleware(timeout.Timeout(30 * time.Second))
```

## Configuration

```go
client.UseInvokerMiddleware(timeout.TimeoutConfig(timeout.TimeoutOptions{
    Default: 30 * time.Second,
    Methods: map[string]time.Duration{
        "messages.sendMessage": 10 * time.Second,
        "upload.saveFilePart":  2 * time.Minute,
    },
    DisabledMethods: []string{
        "updates.getDifference",
    },
}))
```

| Option | Description |
|--------|-------------|
| `Default` | Timeout for calls without a per-method override |
| `Methods` | Per-method timeout overrides |
| `DisabledMethods` | Methods exempt from any timeout |

Priority: `DisabledMethods` > `Methods` > `Default`

## Error handling

```go
result, err := client.Invoke(ctx, req)
var timeoutErr *timeout.TimeoutError
if errors.As(err, &timeoutErr) {
    log.Printf("RPC %s timed out after %s", timeoutErr.Method, timeoutErr.Timeout)
}
```

`TimeoutError` satisfies both `errors.Is(err, timeout.ErrTimeout)` and `errors.Is(err, context.DeadlineExceeded)`.

## Caller deadlines

If the caller's `context.Context` already has a sooner deadline, the caller's deadline governs. The middleware never extends it.

## Composition

```go
client.UseInvokerMiddleware(timeout.Timeout(30 * time.Second))    // outermost
client.UseInvokerMiddleware(floodwait.New().Middleware())          // retries
client.UseInvokerMiddleware(ratelimit.New(30, 10).Middleware())   // innermost
```

`FLOOD_WAIT` errors pass through unwrapped — they are not timeouts. Use the [Flood Wait](./floodwait) middleware to handle retries.
