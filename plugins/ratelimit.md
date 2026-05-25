---
title: Rate Limit Middleware
description: Token-bucket rate limiter for outgoing Telegram RPC calls.
---

# Rate Limit Middleware

Invoker middleware that throttles outgoing Telegram RPC calls using a token-bucket rate limiter.

## Install

```bash
go get github.com/mtgo-labs/middlewares/ratelimit
```

## Usage

```go
import (
    "time"
    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/middlewares/ratelimit"
    "golang.org/x/time/rate"
)

client, _ := tg.NewClient(apiID, apiHash, &tg.Config{BotToken: botToken})

// Allow at most 30 RPC calls per second, burst of 10
mw := ratelimit.New(30, 10)
client.UseInvokerMiddleware(mw.Middleware())

// Or: 1 call per 100ms (10/sec), burst of 1
mw := ratelimit.New(rate.Every(100*time.Millisecond), 1)
client.UseInvokerMiddleware(mw.Middleware())
```

## Runtime Adjustment

Access the underlying `rate.Limiter` for dynamic adjustments:

```go
mw := ratelimit.New(30, 10)
mw.Limiter().SetLimit(50) // increase to 50/sec at runtime
```

## How It Works

Before each RPC call, the middleware acquires a token from a `golang.org/x/time/rate.Limiter`. If no tokens are available, it blocks until one becomes free (respecting context cancellation). No handler changes required.

## Combining with Flood Wait

Use both middlewares together for maximum resilience:

```go
import (
    "github.com/mtgo-labs/middlewares/floodwait"
    "github.com/mtgo-labs/middlewares/ratelimit"
)

waiter := floodwait.New()
limiter := ratelimit.New(30, 10)

client.UseInvokerMiddleware(waiter.Middleware())
client.UseInvokerMiddleware(limiter.Middleware())
```

Middlewares compose — they are applied in registration order.
