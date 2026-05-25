---
title: Invoker Middlewares
description: RPC-level middleware for rate limiting, flood wait handling, and custom call interception.
---

# Invoker Middlewares

MTGo provides an **invoker middleware** system that intercepts outgoing RPC calls to Telegram. Unlike handler middleware (which wraps update processing), invoker middleware wraps the actual RPC invocation — perfect for rate limiting, flood wait handling, logging, and retries.

## InvokerMiddleware Type

```go
type InvokerMiddleware func(next tg.Invoker) tg.Invoker
```

Where `tg.Invoker` is:

```go
type Invoker interface {
    RPCInvoke(ctx context.Context, input tg.TLObject, decode func(io.Reader) (tg.TLObject, error)) (tg.TLObject, error)
}
```

## Registering Middleware

```go
client.UseInvokerMiddleware(myMiddleware)
```

Multiple middleware are composed in registration order: the first registered wraps all subsequent ones.

## Official Middlewares

### Flood Wait

Automatically handles `FLOOD_WAIT` errors by sleeping and retrying:

```bash
go get github.com/mtgo-labs/middlewares/floodwait
```

```go
import "github.com/mtgo-labs/middlewares/floodwait"

waiter := floodwait.New()
waiter.OnWait(func(d time.Duration) {
    log.Printf("flood wait: sleeping %v", d)
})
waiter.WithMaxWait(60 * time.Second)
waiter.WithMaxRetries(3)

client.UseInvokerMiddleware(waiter.Middleware())
```

| Method              | Description                                                                           |
| ------------------- | ------------------------------------------------------------------------------------- |
| `New()`             | Create with defaults (5 retries, unlimited wait)                                      |
| `OnWait(cb)`        | Set callback fired on each FLOOD_WAIT (chainable)                                     |
| `WithMaxWait(d)`    | Maximum acceptable wait duration. Returns error if Telegram asks for more (chainable) |
| `WithMaxRetries(n)` | Maximum retry attempts per RPC call (chainable)                                       |
| `Middleware()`      | Returns `tg.InvokerMiddleware` for `UseInvokerMiddleware`                             |

All RPC calls through the client are automatically protected — no handler changes required.

### Rate Limit

Token-bucket rate limiter for outgoing RPC calls:

```bash
go get github.com/mtgo-labs/middlewares/ratelimit
```

```go
import "github.com/mtgo-labs/middlewares/ratelimit"

// Allow 30 calls/sec with burst of 10
limiter := ratelimit.New(30, 10)
client.UseInvokerMiddleware(limiter.Middleware())

// Or: 1 call per 100ms (10/sec), burst of 1
limiter := ratelimit.New(rate.Every(100*time.Millisecond), 1)
client.UseInvokerMiddleware(limiter.Middleware())
```

| Method                     | Description                                               |
| -------------------------- | --------------------------------------------------------- |
| `New(r rate.Limit, b int)` | Create with rate and burst size                           |
| `Limiter()`                | Access underlying `rate.Limiter` for runtime adjustment   |
| `Middleware()`             | Returns `tg.InvokerMiddleware` for `UseInvokerMiddleware` |

## Composing Middleware

Register multiple middleware to build a processing pipeline:

```go
// Rate limit runs first (outermost), then flood wait handles any bursts that get through
limiter := ratelimit.New(30, 10)
waiter := floodwait.New()

client.UseInvokerMiddleware(limiter.Middleware())
client.UseInvokerMiddleware(waiter.Middleware())
```

## Custom Invoker Middleware

Use the [middleware template](/plugins/middleware-template) to create custom invoker middleware:

```go
package mymiddleware

import (
    "context"
    "io"
    "log"
    "time"

    "github.com/mtgo-labs/mtgo/tg"
)

func Middleware() func(next tg.Invoker) tg.Invoker {
    return func(next tg.Invoker) tg.Invoker {
        return tg.InvokerFunc(func(ctx context.Context, input tg.TLObject, decode func(io.Reader) (tg.TLObject, error)) (tg.TLObject, error) {
            start := time.Now()
            log.Printf("RPC: %T", input)

            result, err := next.RPCInvoke(ctx, input, decode)

            log.Printf("RPC: %T done in %v (err=%v)", input, time.Since(start), err)
            return result, err
        })
    }
}
```

Usage:

```go
client.UseInvokerMiddleware(mymiddleware.Middleware())
```

## Handler Middleware vs Invoker Middleware

| Feature      | Handler Middleware            | Invoker Middleware                 |
| ------------ | ----------------------------- | ---------------------------------- |
| Scope        | Incoming updates              | Outgoing RPC calls                 |
| Registration | `client.UseMiddleware(mw)`    | `client.UseInvokerMiddleware(mw)`  |
| Use cases    | Auth, logging, i18n           | Rate limiting, flood wait, retries |
| Priority     | Supports `priority` parameter | Registration order                 |

## Middleware Template

The `middlewares-template` repository provides a starting point:

```bash
cp -r middlewares-template/ middlewares/my-middleware
```

See [Middleware Template](/plugins/middleware-template) for the full guide.
