---
title: Metrics Middleware
description: Collect RPC-level metrics — request counts, latency, flood waits, timeouts — without changing request behaviour.
---

# Metrics Middleware

Invoker middleware that collects RPC-level metrics without changing request behaviour. Every outgoing RPC call is wrapped to record the Telegram method name, request status, and latency.

## Install

```bash
go get github.com/mtgo-labs/middlewares/metrics
```

## Quick Start

```go
import (
    "database/sql"

    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/middlewares/metrics"
    _ "modernc.org/sqlite"
)

db, _ := sql.Open("sqlite", "bot.db")
mc, _ := metrics.NewSQLiteCollector(db)
defer mc.Close()

mw := metrics.New(mc, metrics.Config{EnableMethodLabels: true})
client.UseInvokerMiddleware(mw.Middleware())
```

## Metrics collected

| Metric | Type | Labels | Description |
|--------|------|--------|-------------|
| `rpc_requests_total` | counter | `method`, `status` | Total RPC requests |
| `rpc_latency_seconds` | histogram | `method` | RPC round-trip latency |
| `rpc_in_flight` | gauge | `method` | Currently in-flight requests |
| `rpc_flood_wait_total` | counter | `method` | FLOOD_WAIT errors |
| `rpc_timeout_total` | counter | `method` | Timed-out or cancelled requests |

### Status values

| Status | Condition |
|--------|-----------|
| `success` | RPC returned no error |
| `error` | RPC returned an error (non-flood, non-timeout) |
| `flood_wait` | FLOOD_WAIT / FLOOD_PREMIUM_WAIT |
| `timeout` | `context.DeadlineExceeded` |
| `cancelled` | `context.Canceled` |

## Collectors

### SQLite

Persists cumulative counters to SQL with automatic schema migration. Counters stay in memory for zero-latency writes; a background goroutine snapshots to the database at a configurable interval. Survives process restarts.

```go
mc, _ := metrics.NewSQLiteCollector(db, metrics.WithFlushInterval(30*time.Second))
```

### In-memory

For tests and ephemeral bots:

```go
mc := metrics.NewMemoryCollector()
```

### Prometheus

Standard Prometheus counters, histograms, and gauges:

```go
pc := metrics.NewPrometheusCollector("mtgo")
prometheus.MustRegister(pc.Collectors()...)
```

### Custom

Implement the `Collector` interface for OpenTelemetry, StatsD, or any backend.

## Composition

Register metrics first (outermost) so it observes the final result including retries:

```go
client.UseInvokerMiddleware(mw.Middleware())              // metrics
client.UseInvokerMiddleware(floodwait.New().Middleware())  // retries
client.UseInvokerMiddleware(ratelimit.New(30, 10).Middleware())
```
