---
title: Middleware
description: Handler-level and invoker-level middleware in mtgo.
---

# Middleware

mtgo has two middleware levels for different concerns:

| Level | Method | Intercepts | Use case |
|-------|--------|------------|----------|
| **Handler** | `UseMiddleware` | Incoming update dispatch | Auth, logging, i18n, conversation state |
| **Invoker** | `UseInvokerMiddleware` | Outgoing RPC calls | Rate limiting, flood wait, logging, metrics |

## Handler Middleware

Wraps the handler chain. Lower priority number = runs first:

```go
// Logging middleware (outermost)
client.UseMiddleware(func(next telegram.Handler) telegram.Handler {
    return &telegram.FuncHandler{Fn: func(ctx *telegram.Context) {
        if ctx.Message != nil {
            log.Printf("[%d] %s", ctx.Message.ChatID, ctx.Message.Text)
        }
        next.Handle(ctx)
    }}
}, -10) // priority -10 = outermost

// Auth guard
client.UseMiddleware(func(next telegram.Handler) telegram.Handler {
    return &telegram.FuncHandler{Fn: func(ctx *telegram.Context) {
        if ctx.Message != nil && ctx.Message.FromID != adminID {
            ctx.Reply("Unauthorized")
            ctx.Stopped = true
            return
        }
        next.Handle(ctx)
    }}
})
```

## Invoker Middleware

Intercepts all outgoing Telegram API calls:

```go
// Custom invoker middleware (e.g., force silent messages)
client.UseInvokerMiddleware(func(next tg.Invoker) tg.Invoker {
    return tg.InvokerFunc(func(ctx context.Context, input tg.TLObject, decode func(io.Reader) (tg.TLObject, error)) (tg.TLObject, error) {
        if req, ok := input.(*tg.MessagesSendMessageRequest); ok {
            req.Silent = true
            req.SetFlags()
        }
        return next.RPCInvoke(ctx, input, decode)
    })
})
```

## Official Middlewares

| Middleware | Level | Description |
|------------|-------|-------------|
| [Flood Wait](/plugins/floodwait) | Invoker | Auto-retry on FLOOD_WAIT errors |
| [Rate Limit](/plugins/ratelimit) | Invoker | Token-bucket rate limiter |

## Writing Custom Middleware

Use the [middleware template](/plugins/middleware-template) as a starting point for invoker middleware. Handler middleware can be written inline using `FuncHandler`.
