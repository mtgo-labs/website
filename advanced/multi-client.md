---
title: Multi-Client
description: Running multiple Telegram clients simultaneously with mtgo.
---

# Multi-Client

mtgo supports running multiple clients (bots and/or userbots) in a single process.

## Compose — Block Until Any Stops

```go
bot1, _ := telegram.NewClient(apiID, apiHash, &telegram.Config{
    BotToken:    token1,
    SessionName: "bot1",
})

bot2, _ := telegram.NewClient(apiID, apiHash, &telegram.Config{
    BotToken:    token2,
    SessionName: "bot2",
})

// Start both and block until one stops
err := telegram.Compose(bot1, bot2)
```

`Compose` starts all clients concurrently and returns when the first one encounters an error. All remaining clients are stopped.

## Idle — Block Until All Stop

```go
// Register handlers on each client
bot1.OnMessage(handler1)
bot2.OnMessage(handler2)

// Connect both
bot1.Connect(0)
bot2.Connect(0)

// Block until ALL registered clients stop
telegram.Idle()
```

`Idle` blocks until every client that was created via `NewClient` has stopped.

## Graceful Shutdown

```go
shutdownCtx, stopNotify := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
defer stopNotify()

go func() {
    <-shutdownCtx.Done()
    bot1.Stop()
    bot2.Stop()
}()

telegram.Idle()
```

## Separate Storage

Each client should use its own storage or session name to avoid conflicts:

```go
bot1, _ := telegram.NewClient(apiID, apiHash, &telegram.Config{
    BotToken:    token1,
    SessionName: "bot1",
    Storage:     sqlite.Open("bot1.db"),
})

bot2, _ := telegram.NewClient(apiID, apiHash, &telegram.Config{
    BotToken:    token2,
    SessionName: "bot2",
    Storage:     sqlite.Open("bot2.db"),
})
```
