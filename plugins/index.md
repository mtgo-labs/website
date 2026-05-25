---
title: Plugins
description: Extend MTGo with plugins, middlewares, and templates for the full ecosystem.
---

# Plugins & Extensions

MTGo has a rich extension ecosystem across three categories:

## Plugin System

MTGo supports a plugin system that lets you encapsulate reusable logic and attach it to a `Client` via `client.Use(plugin)`.

Every plugin implements the `telegram.Plugin` interface:

```go
type Plugin interface {
    Name() string
    Start(ctx context.Context, client *telegram.Client) error
    Stop(ctx context.Context) error
}
```

Register a plugin before calling `client.Connect`:

```go
client.Use(myPlugin)
```

## Official Plugins

| Plugin | Description |
|--------|-------------|
| [i18n](/plugins/i18n) | Internationalization with YAML/FTL formats, pluralization, and gender-aware translations |
| [Conversations](/plugins/conversations) | Stateful multi-step conversation flows with wait, filter, and timeout support |

## Middlewares

MTGo has two middleware levels for different concerns:

| Level | Method | Intercepts | Use case |
|-------|--------|------------|----------|
| **Invoker** | `UseInvokerMiddleware` | Outgoing RPC calls | Rate limiting, flood wait, logging |
| **Handler** | `UseMiddleware` | Incoming update dispatch | Auth, i18n, conversation state |

Official invoker middlewares:

| Middleware | Description |
|------------|-------------|
| [Flood Wait](/plugins/middlewares#flood-wait) | Auto-handles `FLOOD_WAIT` errors with sleep and retry |
| [Rate Limit](/plugins/middlewares#rate-limit) | Token-bucket rate limiter for outgoing RPC calls |

See [Invoker Middlewares](/plugins/middlewares) for full documentation.

## Templates

Bootstrap new extensions with official templates:

| Template | Description |
|----------|-------------|
| [Plugin Template](/plugins/template) | Starting point for new plugins |
| [Middleware Template](/plugins/middleware-template) | Starting point for new invoker middlewares |

## Ecosystem Repositories

| Repository | Description |
|------------|-------------|
| [mtgo-labs/mtgo](https://github.com/mtgo-labs/mtgo) | Core library |
| [mtgo-labs/storage](https://github.com/mtgo-labs/storage) | Storage adapters (SQLite, PostgreSQL, MongoDB, Redis, GORM) |
| [mtgo-labs/plugins](https://github.com/mtgo-labs/plugins) | Official plugins (i18n, conversations) |
| [mtgo-labs/middlewares](https://github.com/mtgo-labs/middlewares) | Official middlewares (flood wait, rate limit) |
| [mtgo-labs/plugins-template](https://github.com/mtgo-labs/plugins-template) | Plugin template |
| [mtgo-labs/middlewares-template](https://github.com/mtgo-labs/middlewares-template) | Middleware template |
