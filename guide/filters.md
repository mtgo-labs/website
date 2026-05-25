# MTGo Filters

Filters narrow which updates trigger a handler. They compose with `And`, `Or`, and `Not`.

## Using Filters

Pass filters as the second argument to `OnMessage` and other registration methods:

```go
client.OnMessage(handler, tg.Private)
client.OnMessage(handler, tg.Private.And(tg.Text("hello")))
```

## Built-in Filters

### Chat Type

| Filter | Matches |
|--------|---------|
| `Private` | DMs (positive ChatID) |
| `Group` | Group messages (negative ChatID) |
| `Channel` | Channel posts |
| `Direct` | Incoming DMs (private + incoming) |
| `Forum` | Messages from forum-enabled supergroups |
| `Business` | Business connection messages |

### Message Direction

| Filter | Matches |
|--------|---------|
| `Incoming` | Non-outgoing messages |
| `Outgoing` | Messages sent by the current user |
| `Me` | Outgoing messages (alias) |

### Content Type

| Filter | Matches |
|--------|---------|
| `Media` | Any media attachment |
| `Photo` | Photo attachments |
| `Video` | Video attachments |
| `Audio` | Audio attachments |
| `Voice` | Voice notes |
| `VideoNote` | Round video notes |
| `Sticker` | Stickers |
| `Document` | Generic file documents |
| `Animation` | GIFs/animations |
| `Contact` | Contact cards |
| `Location` | Static location pins |
| `LiveLocation` | Live updating locations |
| `Venue` | Venue info |
| `WebPage` | Link previews |
| `Poll` | Poll messages |
| `Dice` | Dice/animated emoji |
| `Game` | HTML5 game attachments |
| `Story` | Forwarded stories |
| `PaidMedia` | Paid media (Stars) |
| `Invoice` | Payment invoices |
| `MediaGroup` | Album messages |
| `Caption` | Media with caption only |

### Text Matching

| Filter | Matches |
|--------|---------|
| `Text("hello")` | Exact text match |
| `Command("start")` | `/start` command |
| `Regex("\\d+")` | Regex pattern match |
| `All` | Every update |

### Sender & Chat

| Filter | Matches |
|--------|---------|
| `User(123, 456)` | Specific user IDs |
| `Chat(-100123)` | Specific chat IDs |
| `Topic(42)` | Specific forum topic |
| `SenderChat(-100)` | Specific sender chat |
| `Bot` | Messages from bots |

### Message Properties

| Filter | Matches |
|--------|---------|
| `Reply` | Messages that reply to another |
| `Forwarded` | Forwarded messages |
| `Mentioned` | Messages where you're @mentioned |
| `ViaBot` | Messages sent via inline bot |
| `Pinned` | Pinned messages |
| `MediaSpoiler` | Spoiler-hidden media |
| `Service` | Service/system messages |

### Service Message Filters

| Filter | Matches |
|--------|---------|
| `NewChatMembers` | Member join events |
| `LeftChatMember` | Member leave events |
| `NewChatTitle` | Title change events |
| `NewChatPhoto` | Photo change events |
| `DeleteChatPhoto` | Photo deletion events |
| `GroupChatCreated` | Group creation events |
| `PinnedMessage` | Pin notification events |

### Callback & Inline

| Filter | Matches |
|--------|---------|
| `CallbackData("approve")` | Exact callback data match |
| `CallbackRegex("^page_\\d+$")` | Regex on callback data |
| `InlineQueryText("search")` | Exact inline query text |

## Composition

Filters compose with three operators:

```go
// AND — both must match
tg.Private.And(tg.Text("hello"))

// OR — either matches
tg.Photo.Or(tg.Video)

// NOT — negate a filter
tg.Bot.Not() // non-bot messages
```

Chain multiple:

```go
tg.Private.And(tg.Incoming).And(tg.Command("start"))
```

## Custom Filters

Use `Create` for filters that need client access:

```go
tg.Create(func(c *tg.Client, ctx *tg.Context) bool {
    return isAdmin(c, ctx.Message.FromID)
})
```

## Custom Command Filter

`NewCommand` creates a command filter with custom prefixes and case sensitivity:

```go
tg.NewCommand(
    []string{"start", "help"},  // commands
    []string{"!", "/"},          // prefixes
    false,                       // case-insensitive
)
```
