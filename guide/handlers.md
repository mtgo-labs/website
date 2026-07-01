# MTGo Handlers & Dispatcher

Handlers define how your bot responds to incoming Telegram updates.

## Registering Handlers

### OnMessage

The most common pattern — register a function that fires on incoming messages:

```go
client.OnMessage(func(client *tg.Client, msg *types.Message) {
    if _, err := msg.Reply("Hello!"); err != nil {
        log.Printf("reply error: %v", err)
    }
}, tg.Private)
```

The second argument is an optional [Filter](./filters). Only updates matching the filter trigger the handler.

### OnEditedMessage

```go
client.OnEditedMessage(func(client *tg.Client, msg *types.Message) {
    log.Printf("Edited message in chat %d: %s", msg.ChatID, msg.Text)
})
```

### OnCallbackQuery

Handle inline button presses:

```go
client.OnCallbackQuery(func(client *tg.Client, cb *types.CallbackQuery) {
    cb.Answer("Button pressed!", nil)
})
```

### OnInlineQuery

Handle inline mode queries:

```go
client.OnInlineQuery(func(client *tg.Client, iq *types.InlineQuery) {
    iq.Answer([]types.InlineResult{...})
})
```

## Handler Interface

For advanced use cases, implement the `Handler` interface:

```go
type Handler interface {
    Check(update *Update) bool
    Handle(ctx *Context)
}
```

- `Check` — predicate that decides if the handler should run
- `Handle` — the handler logic

Example:

```go
type pingHandler struct{}

func (h *pingHandler) Check(u *telegram.Update) bool {
    return u.Message != nil && u.Message.Text == "/ping"
}

func (h *pingHandler) Handle(ctx *telegram.Context) {
    ctx.Message.Reply("pong")
}

disp := telegram.NewHandlerDispatcher()
disp.AddHandler(&pingHandler{}, 0)
```

## HandlerDispatcher

The dispatcher routes updates to handlers by priority group:

```go
disp := telegram.NewHandlerDispatcher()

// Group 0 runs first (logging)
disp.AddHandler(&loggingHandler{}, 0)

// Group 1 runs second (commands)
disp.AddHandler(&commandHandler{}, 1)

// Attach dispatcher to client
client.SetDispatcher(disp)
```

Handlers in lower-numbered groups run first. Within the same group, handlers run in insertion order.

## Available Registration Methods

| Method | Update Type |
|--------|------------|
| `OnMessage` | New messages |
| `OnEditedMessage` | Edited messages |
| `OnBusinessMessage` | Business connection messages |
| `OnEditedBusinessMessage` | Edited business messages |
| `OnDeletedMessages` | Deleted messages |
| `OnDeletedBusinessMessages` | Deleted business messages |
| `OnGuestMessage` | Guest users in business chats |
| `OnCallbackQuery` | Inline button callbacks |
| `OnInlineQuery` | Inline mode queries |
| `OnChosenInlineResult` | Selected inline result |
| `OnChatMember` | Chat member updates |
| `OnChatJoinRequest` | Chat join requests |
| `OnChatBoost` | Boost added/removed |
| `OnMessageReaction` | Reaction changes |
| `OnMessageReactionCount` | Anonymous reaction counts |
| `OnPoll` | Poll state updates |
| `OnUserStatus` | User online/offline status |
| `OnStory` | Story updates |
| `OnPurchasedPaidMedia` | Paid media purchases |
| `OnPreCheckoutQuery` | Pre-checkout payment queries |
| `OnShippingQuery` | Shipping queries |
| `OnBusinessConnection` | Business connection updates |
| `OnManagedBot` | Managed bot updates |
| `OnRawUpdate` | Raw MTProto updates (typed or catch-all) |
| `OnError` | Error events |
| `OnConnect` | Client connected |
| `OnDisconnect` | Client disconnected |
| `OnStart` | Client startup |
| `OnStop` | Client shutdown |

## Typed Raw Update Handlers

`OnRawUpdate` supports type-safe callbacks. Pass a function with a concrete `*tg.UpdateXxx` parameter — the handler fires only for that update type, no manual type-switching needed:

```go
// Typed — fires only for UpdateUserTyping
client.OnRawUpdate(func(upd *tg.UpdateUserTyping) {
    log.Printf("user %d is typing", upd.UserID)
})

// Typed with context
client.OnRawUpdate(func(ctx *tg.Context, upd *tg.UpdatePhoneCall) {
    log.Printf("phone call: %+v", upd)
})

// Catch-all (backwards compatible)
client.OnRawUpdate(func(ctx *tg.Context) {
    log.Printf("raw update: %T", ctx.Update.Raw)
})
```

## Stopping Propagation

Inside a handler, call `StopPropagation()` to prevent lower-priority handlers from running:

```go
client.OnMessage(func(client *tg.Client, msg *types.Message) {
    msg.Reply("Handled!")
}, tg.Command("start"))
```
