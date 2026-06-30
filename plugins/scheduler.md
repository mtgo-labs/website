---
title: Scheduler Plugin
description: In-memory job scheduler with retry/backoff, bounded concurrency, and graceful shutdown.
---

# Scheduler Plugin

In-memory job scheduler for mtgo Telegram bots. Schedule one-time, delayed, and recurring jobs with retry/backoff, bounded concurrency, panic recovery, and graceful shutdown — no external dependencies beyond mtgo.

## Install

```bash
go get github.com/mtgo-labs/plugins/scheduler
```

## Quick Start

```go
import (
    "context"
    "time"

    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/plugins/scheduler"
)

sched := scheduler.New()
client.Use(sched)

// Run once after 30 seconds.
sched.After(ctx, 30*time.Second, func(ctx context.Context) error {
    return client.SendMessage(chatID, "Reminder!")
})

// Run at a specific wall-clock time.
sched.At(ctx, time.Date(2025, 12, 31, 23, 59, 0, 0, time.UTC),
    func(ctx context.Context) error {
        return client.SendMessage(chatID, "Happy New Year!")
    })

// Poll an API every 5 minutes.
sched.Every(ctx, 5*time.Minute, func(ctx context.Context) error {
    return pollAndNotify(client)
})
```

## API

| Method | Description |
|--------|-------------|
| `After(ctx, delay, handler, opts...)` | Run once after a delay |
| `At(ctx, time, handler, opts...)` | Run at an absolute time |
| `Every(ctx, interval, handler, opts...)` | Run repeatedly at fixed-delay (no overlap) |
| `Cancel(jobID)` | Cancel a job by ID |
| `Shutdown(ctx)` | Stop all jobs, wait for in-flight to finish |

All methods return a job ID string for cancellation.

## Options

### Scheduler options

```go
sched := scheduler.New(
    scheduler.WithMaxConcurrency(4),
    scheduler.WithErrorHandler(func(jobID string, err error) {
        log.Printf("job %s failed: %v", jobID, err)
    }),
    scheduler.WithLogger(slog.With("component", "scheduler")),
)
```

| Option | Default | Description |
|--------|---------|-------------|
| `WithMaxConcurrency(n)` | 10 | Max simultaneous job executions |
| `WithErrorHandler(fn)` | slog | Called when a job fails after retries |
| `WithLogger(l)` | `slog.Default()` | Internal diagnostics |

### Job options

```go
id := sched.After(ctx, 0, func(ctx context.Context) error {
    return callExternalAPI(ctx)
}, scheduler.WithRetry(scheduler.RetryPolicy{
    MaxAttempts:  5,
    InitialDelay: 100 * time.Millisecond,
    MaxDelay:     5 * time.Second,
    Multiplier:   2.0,
}))
```

## Standalone usage

Works without a Telegram client:

```go
sched := scheduler.New()
id := sched.After(context.Background(), 2*time.Second, func(ctx context.Context) error {
    fmt.Println("hello")
    return nil
})
sched.Cancel(id)
_ = sched.Shutdown(context.Background())
```

## Design notes

- **No busy loops** — all scheduling uses `time.AfterFunc`, no polling goroutine.
- **Fixed-delay recurring jobs** — `Every` schedules the next run *after* the handler returns, preventing overlap.
- **Bounded concurrency** — semaphore-limited worker pool provides natural backpressure.
- **Graceful shutdown** — `Shutdown` stops timers, cancels contexts, and waits via `WaitGroup`.
