---
title: Plugin Interface
description: How the MTGo plugin system works.
---

# Plugin Interface

MTGo's plugin system lets you encapsulate reusable behavior and attach it to a `Client`.

## Interface

```go
type Plugin interface {
    Name() string
    Start(ctx context.Context, client *telegram.Client) error
    Stop(ctx context.Context) error
}
```

| Method | Description |
|--------|-------------|
| `Name()` | Returns a unique string identifier for the plugin |
| `Start(ctx, client)` | Called during `client.Connect`. Receives the `*Client` for registration of handlers, middleware, etc. |
| `Stop(ctx)` | Called during `client.Stop`. Clean up resources, flush state, etc. |

## Registration

```go
client.Use(myPlugin)
```

Multiple plugins can be registered. They are started in registration order and stopped in reverse order.

## Lifecycle

1. `client.Use(plugin)` — registers the plugin
2. `client.Connect()` — calls `plugin.Start(ctx, client)` for all registered plugins
3. `client.Stop()` — calls `plugin.Stop(ctx)` for all registered plugins

## Middleware

Plugins can register middleware from within `Start`:

```go
func (p *MyPlugin) Start(ctx context.Context, client *telegram.Client) error {
    p.client = client
    client.UseMiddleware(func(next tg.Handler) tg.Handler {
        return tg.HandlerFunc(func(ctx *tg.Context) {
            // pre-processing
            next.Handle(ctx)
            // post-processing
        })
    })
    return nil
}
```

## Minimal Example

```go
package logger

import (
    "context"
    tg "github.com/mtgo-labs/mtgo/telegram"
)

type Plugin struct {
    client *tg.Client
}

func New() *Plugin {
    return &Plugin{}
}

func (p *Plugin) Name() string {
    return "logger"
}

func (p *Plugin) Start(ctx context.Context, client *tg.Client) error {
    p.client = client
    p.client.OnMessage(func(c *tg.Context) {
        if c.Message != nil {
            log.Printf("[msg] %d: %s", c.Message.FromID, c.Message.Text)
        }
    })
    return nil
}

func (p *Plugin) Stop(ctx context.Context) error {
    return nil
}
```

Usage:

```go
client.Use(logger.New())
client.Connect(0)
```
