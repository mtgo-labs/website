---
title: Plugin Template
description: Bootstrap a new MTGo plugin using the official template.
---

# Plugin Template

The `plugins-template` repository provides a minimal starting point for building MTGo plugins.

## Setup

```bash
git clone https://github.com/mtgo-labs/plugins-template my-plugin
cd my-plugin
```

Then rename the package and module:

1. Change `package YOUR_PLUGIN_NAME` in `plugin.go` and `plugin_test.go` to your plugin name
2. Update `go.mod`: `module github.com/mtgo-labs/plugins/my-plugin`
3. Replace all `YOUR_PLUGIN_NAME` placeholders

## Template Structure

```
plugins/my-plugin/
├── go.mod
├── plugin.go
├── plugin_test.go
└── README.md
```

### plugin.go

```go
package myplugin

import (
    "context"
    tg "github.com/mtgo-labs/mtgo/telegram"
)

type Config struct {
}

type Plugin struct {
    config Config
    client *tg.Client
}

func New(config Config) *Plugin {
    return &Plugin{config: config}
}

func (p *Plugin) Name() string {
    return "myplugin"
}

func (p *Plugin) Start(ctx context.Context, client *tg.Client) error {
    p.client = client
    return nil
}

func (p *Plugin) Stop(ctx context.Context) error {
    return nil
}
```

### plugin_test.go

```go
package myplugin_test

import (
    "context"
    "testing"
    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/plugins/my-plugin"
)

func TestPluginName(t *testing.T) {
    p := myplugin.New(myplugin.Config{})
    if p.Name() != "myplugin" {
        t.Fatalf("expected myplugin, got %s", p.Name())
    }
}

func TestPluginStartStop(t *testing.T) {
    p := myplugin.New(myplugin.Config{})
    if err := p.Start(context.Background(), &tg.Client{}); err != nil {
        t.Fatal(err)
    }
    if err := p.Stop(context.Background()); err != nil {
        t.Fatal(err)
    }
}
```

## Usage

```go
import (
    tg "github.com/mtgo-labs/mtgo/telegram"
    myplugin "github.com/mtgo-labs/plugins/my-plugin"
)

client, _ := tg.NewClient(apiID, apiHash, &tg.Config{
    BotToken: botToken,
})

client.Use(myplugin.New(myplugin.Config{}))

client.Connect(0)
```

## Adding Functionality

### Register handlers

```go
func (p *Plugin) Start(ctx context.Context, client *tg.Client) error {
    p.client = client
    p.client.OnMessage(func(c *tg.Context) {
        // handle messages
    })
    return nil
}
```

### Add middleware

```go
func (p *Plugin) Start(ctx context.Context, client *tg.Client) error {
    p.client = client
    client.UseMiddleware(func(next tg.Handler) tg.Handler {
        return tg.HandlerFunc(func(ctx *tg.Context) {
            // before
            next.Handle(ctx)
            // after
        })
    })
    return nil
}
```

### Add configuration

```go
type Config struct {
    Prefix    string
    LogLevel  string
    MaxRetries int
}

p := myplugin.New(myplugin.Config{
    Prefix:    "[bot]",
    LogLevel:  "info",
    MaxRetries: 3,
})
```

## License

MIT
