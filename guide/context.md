# MTGo Context

The `Context` carries all information about a single Telegram update. Handlers receive it to inspect the update and respond.

## Context Fields

```go
type Context struct {
    Ctx                    context.Context
    Client                 *Client
    Update                 *Update
    Stopped                bool

    // Event payloads (populated based on update type)
    Message                *types.Message
    EditedMessage          *types.Message
    BusinessMessage        *types.Message
    EditedBusinessMessage  *types.Message
    DeletedMessages        *types.DeletedMessages
    CallbackQuery          *types.CallbackQuery
    InlineQuery            *types.InlineQuery
    ChosenInlineResult     *types.ChosenInlineResult
    UserStatus             *types.UserStatusUpdated
    ChatMember             *types.ChatMemberUpdated
    MessageReaction        *types.MessageReactions
    // ... more fields
}
```

Only the relevant field is populated for each update. All others are `nil`.

## Working with Messages

### Replying

```go
client.OnMessage(func(client *tg.Client, msg *types.Message) {
    msg.Reply("Hello!")
})
```

### Accessing Message Properties

```go
client.OnMessage(func(client *tg.Client, msg *types.Message) {
    fmt.Printf("ChatID:  %d\n", msg.ChatID)
    fmt.Printf("FromID:  %d\n", msg.FromID)
    fmt.Printf("Text:    %s\n", msg.Text)
    fmt.Printf("ID:      %d\n", msg.ID)
    fmt.Printf("Date:    %d\n", msg.Date)
    fmt.Printf("Out:     %v\n", msg.Out)
    fmt.Printf("Group:   %v\n", msg.Group)
    fmt.Printf("TopicID: %d\n", msg.TopicID)
})
```

### Media

```go
client.OnMessage(func(client *tg.Client, msg *types.Message) {
    if msg.Media != nil {
        switch m := msg.Media.(type) {
        case *types.PhotoMedia:
            fmt.Printf("Photo: %d sizes\n", len(m.Sizes))
        case *types.DocumentMedia:
            fmt.Printf("File: %s (%d bytes)\n", m.FileName, m.Size)
        }
    }
})
```

### Reply Markup

```go
client.OnMessage(func(client *tg.Client, msg *types.Message) {
    if msg.ReplyMarkup != nil {
        fmt.Printf("Markup type: %d\n", msg.ReplyMarkup.Type)
    }
})
```

## Working with Callbacks

```go
client.OnCallbackQuery(func(client *tg.Client, cb *types.CallbackQuery) {
    fmt.Printf("Data:    %s\n", cb.Data)
    fmt.Printf("UserID:  %d\n", cb.UserID)
    fmt.Printf("ChatID:  %d\n", cb.ChatID)
    fmt.Printf("MsgID:   %d\n", cb.MessageID)

    cb.Answer("Acknowledged!", nil)
})
```

## Working with Inline Queries

```go
client.OnInlineQuery(func(client *tg.Client, iq *types.InlineQuery) {
    fmt.Printf("Query:   %s\n", iq.Query)
    fmt.Printf("UserID:  %d\n", iq.UserID)
    fmt.Printf("Offset:  %s\n", iq.Offset)
})
```

## Go Context

Each handler receives a `context.Context` with a timeout set by `Config.HandlerTimeout`:

```go
client.OnMessage(func(client *tg.Client, msg *types.Message) {
    select {
    case <-time.After(5 * time.Second):
        // do something
    case <-ctx.Done():
        log.Print("handler timed out")
    }
})
```
