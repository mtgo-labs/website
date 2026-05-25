---
title: MTGo Filters API
description: Filter incoming updates by type, content, sender, and more using MTGo's composable filter system.
---

# MTGo Filters API

Filters determine which updates a handler receives. A filter is a function that inspects an update context and returns `true` if the update should be handled.

## Filter Type

```go
type Filter func(ctx *Context) bool
```

### Composition Methods

Filters can be combined using boolean logic.

#### And

```go
func (f Filter) And(other Filter) Filter
```

Returns a filter that matches only when **both** filters match.

```go
filter := filters.Incoming.And(filters.Photo)
dp.Handle(filter, photoHandler)
```

#### Or

```go
func (f Filter) Or(other Filter) Filter
```

Returns a filter that matches when **either** filter matches.

```go
filter := filters.Audio.Or(filters.Video)
dp.Handle(filter, mediaHandler)
```

#### Not

```go
func (f Filter) Not() Filter
```

Returns a filter that matches when the original filter **does not** match.

```go
filter := filters.Command("start").Not()
dp.Handle(filter, nonStartHandler)
```

### Custom Filter

#### Create

```go
func Create(fn func(*Client, *Context) bool) Filter
```

Creates a custom filter from a function that has access to both the client and context.

```go
vipFilter := filters.Create(func(c *mtgo.Client, ctx *mtgo.Context) bool {
    return ctx.Sender().Username == "vip_user"
})
dp.Handle(vipFilter, vipHandler)
```

#### NewCommand

```go
func NewCommand(commands []string, prefixes []string, caseSensitive bool) Filter
```

Creates a command filter with custom prefixes and case sensitivity.

| Parameter | Type | Description |
|-----------|------|-------------|
| `commands` | `[]string` | Command names without prefix |
| `prefixes` | `[]string` | Prefix characters (e.g. `["/", "!"]`) |
| `caseSensitive` | `bool` | Whether matching is case-sensitive |

```go
cmdFilter := filters.NewCommand([]string{"start", "help"}, []string{"/", "!"}, false)
dp.Handle(cmdFilter, startOrHelpHandler)
```

---

## Variable Filters

### Universal

| Filter | Description |
|--------|-------------|
| `All` | Matches every update |
| `Me` | Matches updates about the current user |
| `Bot` | Matches updates from bots |

### Direction

| Filter | Description |
|--------|-------------|
| `Incoming` | Messages received from others |
| `Outgoing` | Messages sent by the current user |

### Message Content

| Filter | Description |
|--------|-------------|
| `Caption` | Messages with a caption |
| `Audio` | Audio file messages |
| `Video` | Video messages |
| `Animation` | GIF / animation messages |
| `Voice` | Voice note messages |
| `VideoNote` | Round video messages |
| `Sticker` | Sticker messages |
| `Photo` | Photo messages |
| `Document` | Document/file messages |
| `Contact` | Contact messages |
| `Location` | Location messages |
| `LiveLocation` | Live location messages |
| `Venue` | Venue messages |
| `WebPage` | Messages with web page previews |
| `Poll` | Poll messages |
| `Dice` | Dice messages |
| `Game` | Game messages |
| `Giveaway` | Giveaway messages |
| `GiveawayWinners` | Giveaway winner announcements |
| `Story` | Story messages |
| `PaidMedia` | Paid media messages |
| `Invoice` | Invoice messages |
| `MediaGroup` | Album / grouped media messages |
| `MediaSpoiler` | Messages with media spoiler |
| `Media` | Any media attachment |
| `HasMedia` | Messages that have any media |

### Chat Type

| Filter | Description |
|--------|-------------|
| `Private` | Private (1-on-1) chats |
| `Group` | Basic group chats |
| `Channel` | Channel messages |
| `Forum` | Forum / topic chats |
| `Business` | Business connection messages |
| `GuestMessage` | Guest messages in business chats |

### Message State

| Filter | Description |
|--------|-------------|
| `Service` | Service messages |
| `Scheduled` | Scheduled messages |
| `FromScheduled` | Messages created from a schedule |
| `PaidMessage` | Paid messages |
| `LinkedChannel` | Messages from linked channels |
| `Forwarded` | Forwarded messages |
| `Reply` | Messages that are replies |
| `Mentioned` | Messages mentioning the user |
| `ViaBot` | Messages sent via inline bot |
| `Pinned` | Pinned messages |
| `Direct` | Direct (non-forwarded) messages |
| `Quote` | Messages that quote another |
| `Admin` | Messages from chat admins |

### Service Events

| Filter | Description |
|--------|-------------|
| `NewChatMembers` | New members joined |
| `LeftChatMember` | A member left |
| `NewChatTitle` | Chat title changed |
| `NewChatPhoto` | Chat photo changed |
| `DeleteChatPhoto` | Chat photo deleted |
| `GroupChatCreated` | Group chat created |
| `SupergroupChatCreated` | Supergroup created |
| `ChannelChatCreated` | Channel created |
| `MigrateToChatID` | Chat migrated to supergroup |
| `MigrateFromChatID` | Migrated from group |
| `PinnedMessage` | Message pinned |
| `GameHighScore` | Game high score |
| `VideoChatStarted` | Video chat started |
| `VideoChatEnded` | Video chat ended |
| `VideoChatMembersInvited` | Members invited to video chat |
| `SuccessfulPayment` | Successful payment received |
| `ReplyKeyboard` | Reply keyboard shown |
| `InlineKeyboard` | Inline keyboard shown |
| `SelfDestruction` | Self-destructing message |

---

## Function Filters

### Text

```go
func Text(s string) Filter
```

Matches messages with exact text content.

```go
dp.Handle(filters.Text("hello"), helloHandler)
```

### Command

```go
func Command(commands ...string) Filter
```

Matches command messages. Supports multiple commands.

```go
dp.Handle(filters.Command("start", "restart"), startHandler)
dp.Handle(filters.Command("help"), helpHandler)
```

### Regex

```go
func Regex(pattern string) Filter
```

Matches messages whose text matches a regular expression.

```go
dp.Handle(filters.Regex(`(?i)^/echo\s+(.+)$`), echoHandler)
```

### User

```go
func User(userIDs ...int64) Filter
```

Matches messages from specific user IDs.

```go
dp.Handle(filters.User(12345678, 87654321), trustedHandler)
```

### Chat

```go
func Chat(chatIDs ...int64) Filter
```

Matches messages from specific chat IDs.

```go
dp.Handle(filters.Chat(-1001234567890), groupHandler)
```

### Topic

```go
func Topic(topicIDs ...int32) Filter
```

Matches messages in specific forum topics.

```go
dp.Handle(filters.Topic(42), topicHandler)
```

### SenderChat

```go
func SenderChat(chatIDs ...int64) Filter
```

Matches messages sent on behalf of specific chats (e.g., channel posts in linked groups).

```go
dp.Handle(filters.SenderChat(-1001234567890), channelHandler)
```

### CallbackData

```go
func CallbackData(data string) Filter
```

Matches callback queries with exact data.

```go
dp.Handle(filters.CallbackData("approve"), approveHandler)
```

### CallbackRegex

```go
func CallbackRegex(pattern string) Filter
```

Matches callback queries whose data matches a regular expression.

```go
dp.Handle(filters.CallbackRegex(`^page:(\d+)$`), pageHandler)
```

### InlineQueryText

```go
func InlineQueryText(s string) Filter
```

Matches inline queries containing specific text.

```go
dp.Handle(filters.InlineQueryText("search"), searchHandler)
```

### ChatActionFilter

```go
func ChatActionFilter(chatID int64) Filter
```

Matches chat action updates for a specific chat.

```go
dp.Handle(filters.ChatActionFilter(-1001234567890), actionHandler)
```

---

## Combining Filters

Filters can be composed to create complex matching logic:

```go
dp.Handle(
    filters.Incoming.And(
        filters.Private.Or(filters.Group),
    ).And(
        filters.Command("start"),
    ),
    startHandler,
)

dp.Handle(
    filters.Media.And(filters.Incoming).Not(),
    outgoingMediaHandler,
)

dp.Handle(
    filters.NewChatMembers.And(filters.Group),
    welcomeHandler,
)
```
