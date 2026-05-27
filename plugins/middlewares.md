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

| Middleware | Description |
|------------|-------------|
| [Flood Wait](/plugins/floodwait) | Auto-handles `FLOOD_WAIT` errors with sleep and retry |
| [Rate Limit](/plugins/ratelimit) | Token-bucket rate limiter for outgoing RPC calls |

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
