---
title: Flood Wait Middleware
description: Auto-retry RPC calls on Telegram FLOOD_WAIT errors.
---

# Flood Wait Middleware

Invoker middleware that automatically handles Telegram `FLOOD_WAIT` errors by sleeping for the required duration and retrying the RPC call.

## Install

```bash
go get github.com/mtgo-labs/middlewares/floodwait
```

## Usage

```go
import (
    "log"
    "time"
    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/middlewares/floodwait"
)

client, _ := tg.NewClient(apiID, apiHash, &tg.Config{BotToken: botToken})

waiter := floodwait.New()

waiter.OnWait(func(d time.Duration) {
    log.Printf("flood wait: sleeping %v", d)
})

waiter.WithMaxWait(60 * time.Second)
waiter.WithMaxRetries(5)

client.UseInvokerMiddleware(waiter.Middleware())

// All RPC calls are now automatically retried on FLOOD_WAIT
```

## Configuration

| Method | Default | Description |
|--------|---------|-------------|
| `OnWait(fn)` | none | Callback invoked when a flood wait occurs |
| `WithMaxWait(d)` | unlimited | Maximum wait time before giving up |
| `WithMaxRetries(n)` | 5 | Maximum retry attempts per RPC call |

## How It Works

1. RPC call returns `FLOOD_WAIT` error
2. Middleware extracts the required wait duration from the error
3. Sleeps for `duration + 1s` buffer (respecting context cancellation)
4. Retries the RPC call
5. Repeats up to `MaxRetries`

No handler changes required — register once and all outgoing API calls (`ctx.Reply`, `ctx.SendMessage`, `client.Invoke`, etc.) are automatically protected.
