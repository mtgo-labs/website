---
title: Middleware Template
description: Bootstrap a new MTGo invoker middleware using the official template.
---

# Middleware Template

The `middlewares-template` repository provides a minimal starting point for building MTGo invoker middleware — middleware that intercepts outgoing RPC calls.

## Setup

```bash
git clone https://github.com/mtgo-labs/middlewares-template my-middleware
cd my-middleware
```

Then rename the package and module:

1. Change `package YOUR_MIDDLEWARE_NAME` in `middleware.go` and `middleware_test.go` to your middleware name
2. Update `go.mod`: `module github.com/mtgo-labs/middlewares/my-middleware`
3. Replace all `YOUR_MIDDLEWARE_NAME` placeholders

## Template Structure

```
middlewares/my-middleware/
├── go.mod
├── middleware.go
├── middleware_test.go
└── README.md
```

### middleware.go

```go
package mymiddleware

import (
    "context"
    "io"

    "github.com/mtgo-labs/mtgo/tg"
)

// Config holds middleware configuration.
type Config struct {
    // Add your configuration fields here.
}

// Middleware is an RPC invoker middleware that wraps each Telegram API call.
type Middleware struct {
    config Config
}

// New creates a new middleware instance with the given configuration.
func New(config Config) *Middleware {
    return &Middleware{config: config}
}

// Middleware returns a tg.InvokerMiddleware function for UseInvokerMiddleware.
func (m *Middleware) Middleware() func(next tg.Invoker) tg.Invoker {
    return func(next tg.Invoker) tg.Invoker {
        return tg.InvokerFunc(func(ctx context.Context, input tg.TLObject, decode func(io.Reader) (tg.TLObject, error)) (tg.TLObject, error) {
            // Pre-processing: inspect input, add logging, rate limit, etc.

            // Call the next invoker in the chain.
            result, err := next.RPCInvoke(ctx, input, decode)

            // Post-processing: inspect result/error, handle retries, etc.

            return result, err
        })
    }
}
```

### middleware_test.go

```go
package mymiddleware_test

import (
    "testing"
    mymiddleware "github.com/mtgo-labs/middlewares/my-middleware"
)

func TestMiddlewareCreation(t *testing.T) {
    mw := mymiddleware.New(mymiddleware.Config{})
    if mw == nil {
        t.Fatal("expected non-nil middleware")
    }
}

func TestMiddlewareReturnsFunction(t *testing.T) {
    mw := mymiddleware.New(mymiddleware.Config{})
    fn := mw.Middleware()
    if fn == nil {
        t.Fatal("expected non-nil middleware function")
    }
}
```

## Usage

```go
import (
    tg "github.com/mtgo-labs/mtgo/telegram"
    mymiddleware "github.com/mtgo-labs/middlewares/my-middleware"
)

client, _ := tg.NewClient(apiID, apiHash, &tg.Config{
    BotToken: botToken,
})

mw := mymiddleware.New(mymiddleware.Config{})
client.UseInvokerMiddleware(mw.Middleware())

client.Connect(0)
```

## Common Patterns

### Logging Middleware

```go
func (m *Middleware) Middleware() func(next tg.Invoker) tg.Invoker {
    return func(next tg.Invoker) tg.Invoker {
        return tg.InvokerFunc(func(ctx context.Context, input tg.TLObject, decode func(io.Reader) (tg.TLObject, error)) (tg.TLObject, error) {
            log.Printf("[rpc] → %T", input)
            result, err := next.RPCInvoke(ctx, input, decode)
            if err != nil {
                log.Printf("[rpc] ✗ %T: %v", input, err)
            } else {
                log.Printf("[rpc] ✓ %T", input)
            }
            return result, err
        })
    }
}
```

### Retry Middleware

```go
func (m *Middleware) Middleware() func(next tg.Invoker) tg.Invoker {
    return func(next tg.Invoker) tg.Invoker {
        return tg.InvokerFunc(func(ctx context.Context, input tg.TLObject, decode func(io.Reader) (tg.TLObject, error)) (tg.TLObject, error) {
            var lastErr error
            for i := 0; i < m.config.MaxRetries; i++ {
                result, err := next.RPCInvoke(ctx, input, decode)
                if err == nil {
                    return result, nil
                }
                lastErr = err
                select {
                case <-time.After(m.config.RetryDelay):
                case <-ctx.Done():
                    return nil, ctx.Err()
                }
            }
            return nil, lastErr
        })
    }
}
```

### Error Transformation Middleware

```go
func (m *Middleware) Middleware() func(next tg.Invoker) tg.Invoker {
    return func(next tg.Invoker) tg.Invoker {
        return tg.InvokerFunc(func(ctx context.Context, input tg.TLObject, decode func(io.Reader) (tg.TLObject, error)) (tg.TLObject, error) {
            result, err := next.RPCInvoke(ctx, input, decode)
            if err != nil {
                // Transform or wrap the error
                return nil, fmt.Errorf("my-middleware: %w", err)
            }
            return result, nil
        })
    }
}
```

## License

MIT
