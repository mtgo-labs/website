---
title: MTGo Messages API
---

# MTGo Messages API

The Messages API provides comprehensive control over Telegram message operations including sending, editing, copying, pinning, reading, reacting, searching, forwarding, and deleting messages.

All methods are on the `*Client` type and accept `context.Context` as the first argument.

::: tip Imports
```go
import (
    "context"
    "github.com/mtgo-labs/mtgo"
    "github.com/mtgo-labs/mtgo/params"
    "github.com/mtgo-labs/mtgo/types"
    "github.com/gotd/td/tg"
)
```
:::

## Sending

### SendMessage

Sends a text message to a chat.

```go
func (c *Client) SendMessage(ctx context.Context, chatID int64, text string, opts ...*params.SendMessage) (*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context for cancellation and timeouts |
| `chatID` | `int64` | Yes | Target chat ID (user, group, or channel) |
| `text` | `string` | Yes | Message text to send |
| `opts` | `...*params.SendMessage` | No | Optional send parameters (reply markup, parse mode, etc.) |

#### Returns

| Type | Description |
|------|-------------|
| `*types.Message` | The sent message object on success |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | The `chatID` does not correspond to an existing chat |
| `ErrPeerFlood` | Too many messages sent to this peer recently |
| `ErrChatWriteForbidden` | No permission to write in this chat |
| `ErrUserBannedInChannel` | User is banned from this channel |
| `ErrMessageTooLong` | Message text exceeds the maximum allowed length |
| `ErrButtonTextTooLong` | Inline button text exceeds limits |

#### Example

```go
msg, err := client.SendMessage(ctx, chatID, "Hello from MTGo!")
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Sent message ID: %d\n", msg.ID)
```

#### Example with options

```go
msg, err := client.SendMessage(ctx, chatID, "**Bold text**",
    &params.SendMessage{
        ParseMode:  params.ParseModeMarkdown,
        ReplyTo:    &params.ReplyTo{MessageID: 42},
        LinkPreview: &params.LinkPreview{Disabled: true},
    },
)
if err != nil {
    log.Fatal(err)
}
```

---

### SendContact

Sends a contact card to a chat.

```go
func (c *Client) SendContact(ctx context.Context, chatID int64, phoneNumber, firstName, lastName string, opts *params.SendMessage) (*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Target chat ID |
| `phoneNumber` | `string` | Yes | Contact phone number with country code |
| `firstName` | `string` | Yes | Contact first name |
| `lastName` | `string` | Yes | Contact last name (can be empty string) |
| `opts` | `*params.SendMessage` | No | Optional send parameters |

#### Returns

| Type | Description |
|------|-------------|
| `*types.Message` | The sent message containing the contact |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrChatWriteForbidden` | No write permission |
| `ErrPhoneNumberInvalid` | Invalid phone number format |

#### Example

```go
msg, err := client.SendContact(ctx, chatID, "+1234567890", "Alice", "Smith",
    &params.SendMessage{ReplyTo: &params.ReplyTo{MessageID: 10}},
)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Sent contact to %s %s\n", "Alice", "Smith")
```

---

### SendLocation

Sends a geographic location to a chat.

```go
func (c *Client) SendLocation(ctx context.Context, chatID int64, lat, lng float64, opts *params.SendMessage) (*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Target chat ID |
| `lat` | `float64` | Yes | Latitude coordinate |
| `lng` | `float64` | Yes | Longitude coordinate |
| `opts` | `*params.SendMessage` | No | Optional send parameters (supports `LivePeriod`) |

#### Returns

| Type | Description |
|------|-------------|
| `*types.Message` | The sent location message |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrChatWriteForbidden` | No write permission |

#### Example

```go
msg, err := client.SendLocation(ctx, chatID, 40.7128, -74.0060,
    &params.SendMessage{LivePeriod: 60},
)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Sent live location, message ID: %d\n", msg.ID)
```

---

### SendVenue

Sends a venue (location with name and address) to a chat.

```go
func (c *Client) SendVenue(ctx context.Context, chatID int64, lat, lng float64, title, address string, opts *params.SendMessage) (*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Target chat ID |
| `lat` | `float64` | Yes | Latitude coordinate |
| `lng` | `float64` | Yes | Longitude coordinate |
| `title` | `string` | Yes | Venue name / title |
| `address` | `string` | Yes | Venue physical address |
| `opts` | `*params.SendMessage` | No | Optional send parameters |

#### Returns

| Type | Description |
|------|-------------|
| `*types.Message` | The sent venue message |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrChatWriteForbidden` | No write permission |

#### Example

```go
msg, err := client.SendVenue(ctx, chatID,
    48.8584, 2.2945,
    "Eiffel Tower",
    "Champ de Mars, 5 Avenue Anatole France, Paris",
    nil,
)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Sent venue: %s\n", "Eiffel Tower")
```

---

### SendDice

Sends an animated dice or game emoji to a chat.

```go
func (c *Client) SendDice(ctx context.Context, chatID int64, opts ...*SendDiceOption) (*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Target chat ID |
| `opts` | `...*SendDiceOption` | No | Optional dice parameters (emoji type, reply markup) |

#### Returns

| Type | Description |
|------|-------------|
| `*types.Message` | The sent dice message with the random result |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrChatWriteForbidden` | No write permission |

#### Example

```go
// Standard dice
msg, err := client.SendDice(ctx, chatID)
if err != nil {
    log.Fatal(err)
}

// Darts emoji
msg, err = client.SendDice(ctx, chatID, &SendDiceOption{Emoji: "🎯"})
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Dice result value: %d\n", msg.ReplyMarkup)
```

---

### SendPoll

Sends a poll with options to a chat.

```go
func (c *Client) SendPoll(ctx context.Context, chatID int64, question string, options []string, opts *params.SendMessage) (*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Target chat ID |
| `question` | `string` | Yes | Poll question text |
| `options` | `[]string` | Yes | Slice of poll answer options (minimum 2) |
| `opts` | `*params.SendMessage` | No | Optional send parameters (supports poll-specific options) |

#### Returns

| Type | Description |
|------|-------------|
| `*types.Message` | The sent poll message |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrChatWriteForbidden` | No write permission |
| `ErrPollOptionsInvalid` | Fewer than 2 options provided |

#### Example

```go
msg, err := client.SendPoll(ctx, chatID,
    "What is your favorite language?",
    []string{"Go", "Rust", "Python", "TypeScript"},
    &params.SendMessage{Anonymous: true},
)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Poll sent, message ID: %d\n", msg.ID)
```

---

### SendMedia

Sends a media attachment (photo, video, document, etc.) to a chat.

```go
func (c *Client) SendMedia(ctx context.Context, chatID int64, media tg.InputMediaClass, caption string, opts ...*params.SendMessage) (*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Target chat ID |
| `media` | `tg.InputMediaClass` | Yes | Media input object (photo, video, document, audio, etc.) |
| `caption` | `string` | Yes | Media caption text (can be empty) |
| `opts` | `...*params.SendMessage` | No | Optional send parameters |

#### Returns

| Type | Description |
|------|-------------|
| `*types.Message` | The sent media message |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrChatWriteForbidden` | No write permission |
| `ErrMediaInvalid` | Invalid media input |
| `ErrFileReferenceExpired` | File reference has expired, re-upload needed |

#### Example

```go
media := &tg.InputMediaPhoto{
    ID: &tg.InputPhotoFileLocation{
        ID:            photoID,
        AccessHash:    accessHash,
        FileReference: fileRef,
    },
}

msg, err := client.SendMedia(ctx, chatID, media, "Photo caption",
    &params.SendMessage{ParseMode: params.ParseModeHTML},
)
if err != nil {
    log.Fatal(err)
}
```

---

### SendGame

Sends a game message to a chat.

```go
func (c *Client) SendGame(ctx context.Context, chatID int64, gameShortName string, opts ...*params.SendMessage) (*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Target chat ID |
| `gameShortName` | `string` | Yes | Short name of the game (registered via BotFather) |
| `opts` | `...*params.SendMessage` | No | Optional send parameters (supports inline keyboard) |

#### Returns

| Type | Description |
|------|-------------|
| `*types.Message` | The sent game message |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrChatWriteForbidden` | No write permission |
| `ErrGameNotFound` | Game short name not registered |

#### Example

```go
msg, err := client.SendGame(ctx, chatID, "my_cool_game",
    &params.SendMessage{
        ReplyMarkup: &tg.ReplyInlineMarkup{
            Rows: []tg.KeyboardButtonRow{
                {Buttons: []tg.KeyboardButtonClass{
                    &tg.KeyboardButtonGame{Text: "Play Now"},
                }},
            },
        },
    },
)
if err != nil {
    log.Fatal(err)
}
```

---

### SendChatAction

Sends a "typing" or other chat action indicator to a chat.

```go
func (c *Client) SendChatAction(ctx context.Context, chatID int64, action tg.SendMessageActionClass) error
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Target chat ID |
| `action` | `tg.SendMessageActionClass` | Yes | Action type (typing, upload photo, record video, etc.) |

#### Returns

| Type | Description |
|------|-------------|
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |

#### Example

```go
err := client.SendChatAction(ctx, chatID, &tg.SendMessageTypingAction{})
if err != nil {
    log.Fatal(err)
}

// Show upload progress
err = client.SendChatAction(ctx, chatID, &tg.SendMessageUploadPhotoAction{Progress: 50})
if err != nil {
    log.Fatal(err)
}
```

#### Available Actions

| Action Class | Description |
|-------------|-------------|
| `SendMessageTypingAction` | User is typing a message |
| `SendMessageCancelAction` | Cancel the current action |
| `SendMessageRecordVideoAction` | Recording a video |
| `SendMessageUploadVideoAction` | Uploading a video |
| `SendMessageRecordAudioAction` | Recording voice message |
| `SendMessageUploadAudioAction` | Uploading voice message |
| `SendMessageUploadPhotoAction` | Uploading a photo |
| `SendMessageUploadDocumentAction` | Uploading a file |
| `SendMessageGeoLocationAction` | Selecting a location |
| `SendMessageChooseContactAction` | Selecting a contact |
| `SendMessageGamePlayAction` | Playing a game |
| `SendMessageRecordRoundAction` | Recording a round video |
| `SendMessageUploadRoundAction` | Uploading a round video |
| `SendMessageSpeakCallAction` | Speaking in a group call |

---

## Editing

### EditMessageText

Edits the text of an existing message.

```go
func (c *Client) EditMessageText(ctx context.Context, chatID int64, messageID int32, text string, opts ...*params.EditMessage) (*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID where the message exists |
| `messageID` | `int32` | Yes | ID of the message to edit |
| `text` | `string` | Yes | New message text |
| `opts` | `...*params.EditMessage` | No | Optional edit parameters (parse mode, reply markup, etc.) |

#### Returns

| Type | Description |
|------|-------------|
| `*types.Message` | The edited message |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrMessageNotFound` | Message ID does not exist in this chat |
| `ErrMessageEditTimeExpired` | Message is too old to edit |
| `ErrMessageAuthor` | You are not the author of this message |
| `ErrMessageNotModified` | New text is identical to the current text |

#### Example

```go
edited, err := client.EditMessageText(ctx, chatID, msgID, "Updated text",
    &params.EditMessage{
        ParseMode: params.ParseModeHTML,
    },
)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Edited message ID: %d\n", edited.ID)
```

---

### EditMessageCaption

Edits the caption of a media message.

```go
func (c *Client) EditMessageCaption(ctx context.Context, chatID int64, messageID int32, caption string, opts ...*params.EditMessage) (*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID where the message exists |
| `messageID` | `int32` | Yes | ID of the media message to edit |
| `caption` | `string` | Yes | New caption text |
| `opts` | `...*params.EditMessage` | No | Optional edit parameters |

#### Returns

| Type | Description |
|------|-------------|
| `*types.Message` | The edited message |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrMessageNotFound` | Message ID does not exist |
| `ErrMessageEditTimeExpired` | Message is too old to edit |
| `ErrMessageAuthor` | Not the message author |
| `ErrMessageNotModified` | Caption unchanged |

#### Example

```go
edited, err := client.EditMessageCaption(ctx, chatID, msgID, "New caption text", nil)
if err != nil {
    log.Fatal(err)
}
```

---

### EditMessageMedia

Edits the media attachment of an existing message.

```go
func (c *Client) EditMessageMedia(ctx context.Context, chatID int64, messageID int32, media tg.InputMediaClass, opts ...*params.EditMessage) (*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID where the message exists |
| `messageID` | `int32` | Yes | ID of the message to edit |
| `media` | `tg.InputMediaClass` | Yes | New media input object |
| `opts` | `...*params.EditMessage` | No | Optional edit parameters |

#### Returns

| Type | Description |
|------|-------------|
| `*types.Message` | The edited message with updated media |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrMessageNotFound` | Message ID does not exist |
| `ErrMessageEditTimeExpired` | Message is too old to edit |
| `ErrMessageAuthor` | Not the message author |
| `ErrMediaInvalid` | Invalid media input |

#### Example

```go
newMedia := &tg.InputMediaPhoto{
    ID: &tg.InputPhotoFileLocation{
        ID:            newPhotoID,
        AccessHash:    accessHash,
        FileReference: fileRef,
    },
}

edited, err := client.EditMessageMedia(ctx, chatID, msgID, newMedia)
if err != nil {
    log.Fatal(err)
}
```

---

### EditMessageReplyMarkup

Edits only the reply markup (inline keyboard) of an existing message.

```go
func (c *Client) EditMessageReplyMarkup(ctx context.Context, chatID int64, messageID int32, replyMarkup tg.ReplyMarkupClass) (*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID where the message exists |
| `messageID` | `int32` | Yes | ID of the message to edit |
| `replyMarkup` | `tg.ReplyMarkupClass` | Yes | New reply markup (inline keyboard) |

#### Returns

| Type | Description |
|------|-------------|
| `*types.Message` | The edited message |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrMessageNotFound` | Message ID does not exist |
| `ErrMessageAuthor` | Not the message author |
| `ErrMessageNotModified` | Reply markup unchanged |

#### Example

```go
edited, err := client.EditMessageReplyMarkup(ctx, chatID, msgID,
    &tg.ReplyInlineMarkup{
        Rows: []tg.KeyboardButtonRow{
            {Buttons: []tg.KeyboardButtonClass{
                &tg.KeyboardButtonCallback{
                    Text: "Clicked!",
                    Data: []byte("btn_clicked"),
                },
            }},
        },
    },
)
if err != nil {
    log.Fatal(err)
}
```

---

## Copying

### CopyMessage

Copies a message from one chat to another without a forward link.

```go
func (c *Client) CopyMessage(ctx context.Context, toChatID, fromChatID int64, messageID int32, opts ...*params.CopyMessage) (int64, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `toChatID` | `int64` | Yes | Destination chat ID |
| `fromChatID` | `int64` | Yes | Source chat ID |
| `messageID` | `int32` | Yes | ID of the message to copy |
| `opts` | `...*params.CopyMessage` | No | Optional copy parameters (caption, parse mode, etc.) |

#### Returns

| Type | Description |
|------|-------------|
| `int64` | ID of the new copied message |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Source or destination chat does not exist |
| `ErrMessageNotFound` | Message ID does not exist in the source chat |
| `ErrChatWriteForbidden` | No write permission in destination chat |

#### Example

```go
newMsgID, err := client.CopyMessage(ctx, destChatID, srcChatID, 42,
    &params.CopyMessage{
        Caption: "Forwarded content",
    },
)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Copied as message ID: %d\n", newMsgID)
```

---

### CopyMediaGroup

Copies an entire album (media group) from one chat to another.

```go
func (c *Client) CopyMediaGroup(ctx context.Context, toChatID, fromChatID int64, messageIDs []int32, opts ...*params.CopyMessage) ([]*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `toChatID` | `int64` | Yes | Destination chat ID |
| `fromChatID` | `int64` | Yes | Source chat ID |
| `messageIDs` | `[]int32` | Yes | IDs of the media group messages to copy |
| `opts` | `...*params.CopyMessage` | No | Optional copy parameters |

#### Returns

| Type | Description |
|------|-------------|
| `[]*types.Message` | Slice of newly copied messages |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Source or destination chat does not exist |
| `ErrMessageNotFound` | One or more message IDs not found |
| `ErrChatWriteForbidden` | No write permission in destination chat |
| `ErrMediaGroupInvalid` | Messages do not form a valid media group |

#### Example

```go
messages, err := client.CopyMediaGroup(ctx, destChatID, srcChatID, []int32{100, 101, 102})
if err != nil {
    log.Fatal(err)
}
for _, m := range messages {
    fmt.Printf("Copied message ID: %d\n", m.ID)
}
```

---

## Pinning

### PinMessage

Pins a message in a chat.

```go
func (c *Client) PinMessage(ctx context.Context, chatID int64, messageID int32, opts ...*params.PinMessage) (int, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID where the message exists |
| `messageID` | `int32` | Yes | ID of the message to pin |
| `opts` | `...*params.PinMessage` | No | Optional pin parameters (notify, single pin, etc.) |

#### Returns

| Type | Description |
|------|-------------|
| `int` | Result code (0 on success) |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrMessageNotFound` | Message ID does not exist |
| `ErrChatAdminRequired` | Pinning requires admin privileges |
| `ErrPinLimitExceeded` | Too many pinned messages |

#### Example

```go
result, err := client.PinMessage(ctx, chatID, 42,
    &params.PinMessage{Notify: true},
)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Pin result: %d\n", result)
```

---

### UnpinMessage

Unpins a specific message from a chat.

```go
func (c *Client) UnpinMessage(ctx context.Context, chatID int64, messageID int32) (int, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID |
| `messageID` | `int32` | Yes | ID of the message to unpin |

#### Returns

| Type | Description |
|------|-------------|
| `int` | Result code (0 on success) |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrMessageNotFound` | Message is not pinned |
| `ErrChatAdminRequired` | Unpinning requires admin privileges |

#### Example

```go
result, err := client.UnpinMessage(ctx, chatID, 42)
if err != nil {
    log.Fatal(err)
}
```

---

### UnpinAllMessages

Unpins all pinned messages in a chat.

```go
func (c *Client) UnpinAllMessages(ctx context.Context, chatID int64) (int, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID |

#### Returns

| Type | Description |
|------|-------------|
| `int` | Result code (0 on success) |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrChatAdminRequired` | Requires admin privileges |

#### Example

```go
result, err := client.UnpinAllMessages(ctx, chatID)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("All messages unpinned, result: %d\n", result)
```

---

## Reading

### ReadHistory

Marks all messages in a chat as read up to a specific message.

```go
func (c *Client) ReadHistory(ctx context.Context, chatID int64, maxID int32) error
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID to mark as read |
| `maxID` | `int32` | Yes | Maximum message ID to mark as read (0 for all) |

#### Returns

| Type | Description |
|------|-------------|
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |

#### Example

```go
err := client.ReadHistory(ctx, chatID, 0)
if err != nil {
    log.Fatal(err)
}
fmt.Println("All messages marked as read")
```

---

### ReadMentions

Marks all mentions in a chat as read.

```go
func (c *Client) ReadMentions(ctx context.Context, chatID int64) error
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID |

#### Returns

| Type | Description |
|------|-------------|
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |

#### Example

```go
err := client.ReadMentions(ctx, chatID)
if err != nil {
    log.Fatal(err)
}
```

---

### ReadReactions

Marks all reactions in a chat as read.

```go
func (c *Client) ReadReactions(ctx context.Context, chatID int64) error
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID |

#### Returns

| Type | Description |
|------|-------------|
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |

#### Example

```go
err := client.ReadReactions(ctx, chatID)
if err != nil {
    log.Fatal(err)
}
```

---

## Reactions

### SendReaction

Sends an emoji reaction to a message.

```go
func (c *Client) SendReaction(ctx context.Context, chatID int64, messageID int32, reaction ...tg.ReactionClass) error
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID where the message exists |
| `messageID` | `int32` | Yes | ID of the message to react to |
| `reaction` | `...tg.ReactionClass` | Yes | One or more reaction objects (variadic) |

#### Returns

| Type | Description |
|------|-------------|
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrMessageNotFound` | Message ID does not exist |
| `ErrReactionInvalid` | Invalid reaction emoji |
| `ErrReactionLimitExceeded` | Too many reactions on this message |

#### Example

```go
err := client.SendReaction(ctx, chatID, msgID,
    &tg.ReactionEmoji{Emoticon: "👍"},
)
if err != nil {
    log.Fatal(err)
}

// Multiple reactions
err = client.SendReaction(ctx, chatID, msgID,
    &tg.ReactionEmoji{Emoticon: "🔥"},
    &tg.ReactionEmoji{Emoticon: "❤️"},
)
```

---

### SendPaidReaction

Sends a paid (star) reaction to a message.

```go
func (c *Client) SendPaidReaction(ctx context.Context, chatID int64, messageID int32, amount int64) error
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID where the message exists |
| `messageID` | `int32` | Yes | ID of the message to react to |
| `amount` | `int64` | Yes | Number of paid reactions (stars) to send |

#### Returns

| Type | Description |
|------|-------------|
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrMessageNotFound` | Message ID does not exist |
| `ErrPaymentStarsNeeded` | Insufficient star balance |
| `ErrReactionInvalid` | Invalid amount |

#### Example

```go
err := client.SendPaidReaction(ctx, chatID, msgID, 50)
if err != nil {
    log.Fatal(err)
}
fmt.Println("Sent 50 star reaction")
```

---

### VotePoll

Votes on a poll option.

```go
func (c *Client) VotePoll(ctx context.Context, chatID int64, messageID int32, options [][]byte) error
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID where the poll message exists |
| `messageID` | `int32` | Yes | ID of the poll message |
| `options` | `[][]byte` | Yes | Byte-encoded option indices to vote for |

#### Returns

| Type | Description |
|------|-------------|
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrMessageNotFound` | Poll message does not exist |
| `ErrPollVoteNotAllowed` | Voting not allowed (poll closed or quiz already answered) |
| `ErrPollOptionsInvalid` | Invalid option indices |

#### Example

```go
err := client.VotePoll(ctx, chatID, pollMsgID, [][]byte{{0}, {2}})
if err != nil {
    log.Fatal(err)
}
fmt.Println("Voted for options 0 and 2")
```

---

### StopPoll

Stops an active poll, preventing further votes.

```go
func (c *Client) StopPoll(ctx context.Context, chatID int64, messageID int32) error
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID where the poll exists |
| `messageID` | `int32` | Yes | ID of the poll message |

#### Returns

| Type | Description |
|------|-------------|
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrMessageNotFound` | Poll message does not exist |
| `ErrMessageAuthor` | Not the poll creator |
| `ErrPollAlreadyClosed` | Poll is already closed |

#### Example

```go
err := client.StopPoll(ctx, chatID, pollMsgID)
if err != nil {
    log.Fatal(err)
}
fmt.Println("Poll closed")
```

---

### RetractVote

Retracts (removes) a vote from a poll.

```go
func (c *Client) RetractVote(ctx context.Context, chatID int64, messageID int32) error
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID where the poll exists |
| `messageID` | `int32` | Yes | ID of the poll message |

#### Returns

| Type | Description |
|------|-------------|
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrMessageNotFound` | Poll message does not exist |
| `ErrPollVoteNotAllowed` | No vote to retract or poll is closed |

#### Example

```go
err := client.RetractVote(ctx, chatID, pollMsgID)
if err != nil {
    log.Fatal(err)
}
fmt.Println("Vote retracted")
```

---

## Searching

### SearchMessages

Searches for messages within a specific chat.

```go
func (c *Client) SearchMessages(ctx context.Context, chatID int64, query string, opts ...*SearchMessagesOption) ([]*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID to search within |
| `query` | `string` | Yes | Search query string |
| `opts` | `...*SearchMessagesOption` | No | Optional search parameters (limit, offset, filter, etc.) |

#### Returns

| Type | Description |
|------|-------------|
| `[]*types.Message` | Slice of matching messages |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrSearchQueryEmpty` | Query string is empty |

#### Example

```go
messages, err := client.SearchMessages(ctx, chatID, "hello world",
    &SearchMessagesOption{Limit: 50},
)
if err != nil {
    log.Fatal(err)
}
for _, m := range messages {
    fmt.Printf("Found message %d: %s\n", m.ID, m.Text())
}
```

---

### SearchGlobal

Searches for messages across all chats.

```go
func (c *Client) SearchGlobal(ctx context.Context, query string, opts ...*SearchGlobalOption) ([]*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `query` | `string` | Yes | Search query string |
| `opts` | `...*SearchGlobalOption` | No | Optional search parameters (limit, offset, etc.) |

#### Returns

| Type | Description |
|------|-------------|
| `[]*types.Message` | Slice of matching messages from all chats |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrSearchQueryEmpty` | Query string is empty |
| `ErrSearchQueryTooLong` | Query exceeds maximum length |

#### Example

```go
messages, err := client.SearchGlobal(ctx, "important announcement",
    &SearchGlobalOption{Limit: 20},
)
if err != nil {
    log.Fatal(err)
}
for _, m := range messages {
    fmt.Printf("[Chat %d] Message %d: %s\n", m.ChatID(), m.ID, m.Text())
}
```

---

### SearchMessagesCount

Returns the count of messages matching a query in a specific chat.

```go
func (c *Client) SearchMessagesCount(ctx context.Context, chatID int64, query string, opts ...*SearchMessagesOption) (int, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID to search within |
| `query` | `string` | Yes | Search query string |
| `opts` | `...*SearchMessagesOption` | No | Optional search parameters |

#### Returns

| Type | Description |
|------|-------------|
| `int` | Number of matching messages |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrSearchQueryEmpty` | Query string is empty |

#### Example

```go
count, err := client.SearchMessagesCount(ctx, chatID, "meeting")
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Found %d messages about 'meeting'\n", count)
```

---

### SearchGlobalCount

Returns the count of messages matching a query across all chats.

```go
func (c *Client) SearchGlobalCount(ctx context.Context, query string, opts ...*SearchGlobalOption) (int, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `query` | `string` | Yes | Search query string |
| `opts` | `...*SearchGlobalOption` | No | Optional search parameters |

#### Returns

| Type | Description |
|------|-------------|
| `int` | Number of matching messages globally |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrSearchQueryEmpty` | Query string is empty |
| `ErrSearchQueryTooLong` | Query exceeds maximum length |

#### Example

```go
count, err := client.SearchGlobalCount(ctx, "deploy")
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Found %d messages globally about 'deploy'\n", count)
```

---

## Forwarding & Deletion

### ForwardMessages

Forwards messages from one chat to another. Forwarded messages include a "forwarded from" header.

```go
func (c *Client) ForwardMessages(ctx context.Context, toChatID, fromChatID int64, messageIDs []int32, opts ...*params.ForwardMessages) ([]*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `toChatID` | `int64` | Yes | Destination chat ID |
| `fromChatID` | `int64` | Yes | Source chat ID |
| `messageIDs` | `[]int32` | Yes | IDs of messages to forward |
| `opts` | `...*params.ForwardMessages` | No | Optional forward parameters (drop author, etc.) |

#### Returns

| Type | Description |
|------|-------------|
| `[]*types.Message` | Slice of forwarded messages |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Source or destination chat does not exist |
| `ErrMessageNotFound` | One or more message IDs not found |
| `ErrChatWriteForbidden` | No write permission in destination |
| `ErrForwardNotAllowed` | Message author has disabled forwarding |

#### Example

```go
forwarded, err := client.ForwardMessages(ctx, destChatID, srcChatID, []int32{10, 11, 12},
    &params.ForwardMessages{DropAuthor: true},
)
if err != nil {
    log.Fatal(err)
}
for _, m := range forwarded {
    fmt.Printf("Forwarded message ID: %d\n", m.ID)
}
```

---

### ForwardMediaGroup

Forwards an entire album (media group) from one chat to another.

```go
func (c *Client) ForwardMediaGroup(ctx context.Context, toChatID, fromChatID int64, messageIDs []int32, opts ...*params.ForwardMessages) ([]*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `toChatID` | `int64` | Yes | Destination chat ID |
| `fromChatID` | `int64` | Yes | Source chat ID |
| `messageIDs` | `[]int32` | Yes | IDs of the media group messages |
| `opts` | `...*params.ForwardMessages` | No | Optional forward parameters |

#### Returns

| Type | Description |
|------|-------------|
| `[]*types.Message` | Slice of forwarded media messages |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Source or destination chat does not exist |
| `ErrMessageNotFound` | One or more message IDs not found |
| `ErrChatWriteForbidden` | No write permission in destination |
| `ErrMediaGroupInvalid` | Messages do not form a valid media group |
| `ErrForwardNotAllowed` | Forwarding disabled by author |

#### Example

```go
forwarded, err := client.ForwardMediaGroup(ctx, destChatID, srcChatID, []int32{200, 201, 202})
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Forwarded %d media items\n", len(forwarded))
```

---

### DeleteMessages

Deletes one or more messages from a chat.

```go
func (c *Client) DeleteMessages(ctx context.Context, chatID int64, messageIDs []int32, opts ...*params.DeleteMessages) (int, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID where messages exist |
| `messageIDs` | `[]int32` | Yes | IDs of messages to delete |
| `opts` | `...*params.DeleteMessages` | No | Optional delete parameters (revoke for both sides) |

#### Returns

| Type | Description |
|------|-------------|
| `int` | Result code (0 on success) |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrMessageNotFound` | One or more message IDs not found |
| `ErrMessageDeleteForbidden` | No permission to delete these messages |
| `ErrMessageTooOld` | Messages are too old to delete |

#### Example

```go
result, err := client.DeleteMessages(ctx, chatID, []int32{100, 101, 102},
    &params.DeleteMessages{Revoke: true},
)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Delete result: %d\n", result)
```

---

### DeleteChatHistory

Deletes the entire chat history for a specific chat.

```go
func (c *Client) DeleteChatHistory(ctx context.Context, chatID int64, maxID int32, revoke bool) (int, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID to clear history for |
| `maxID` | `int32` | Yes | Maximum message ID to delete up to (0 for all) |
| `revoke` | `bool` | Yes | If true, delete for both sides |

#### Returns

| Type | Description |
|------|-------------|
| `int` | Result code (0 on success) |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrMessageDeleteForbidden` | No permission to delete history |

#### Example

```go
result, err := client.DeleteChatHistory(ctx, chatID, 0, true)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Chat history deleted, result: %d\n", result)
```

---

## History

### GetChatHistory

Retrieves message history from a chat.

```go
func (c *Client) GetChatHistory(ctx context.Context, chatID int64, limit int, offsetID int32) ([]*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID to retrieve history from |
| `limit` | `int` | Yes | Maximum number of messages to return |
| `offsetID` | `int32` | Yes | Message ID to start from (0 for most recent) |

#### Returns

| Type | Description |
|------|-------------|
| `[]*types.Message` | Slice of historical messages (newest first) |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrHistoryAccessDenied` | No access to chat history |

#### Example

```go
messages, err := client.GetChatHistory(ctx, chatID, 50, 0)
if err != nil {
    log.Fatal(err)
}
for _, m := range messages {
    fmt.Printf("[%d] %s\n", m.ID, m.Text())
}
```

#### Pagination example

```go
var allMessages []*types.Message
offsetID := int32(0)

for {
    messages, err := client.GetChatHistory(ctx, chatID, 100, offsetID)
    if err != nil {
        log.Fatal(err)
    }
    if len(messages) == 0 {
        break
    }
    allMessages = append(allMessages, messages...)
    offsetID = messages[len(messages)-1].ID
}
fmt.Printf("Fetched %d total messages\n", len(allMessages))
```

---

### GetChatHistoryCount

Returns the total number of messages in a chat.

```go
func (c *Client) GetChatHistoryCount(ctx context.Context, chatID int64) (int, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID |

#### Returns

| Type | Description |
|------|-------------|
| `int` | Total message count in the chat |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrHistoryAccessDenied` | No access to chat history |

#### Example

```go
count, err := client.GetChatHistoryCount(ctx, chatID)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Chat has %d messages\n", count)
```

---

### GetMediaGroup

Retrieves all messages belonging to the same media group (album).

```go
func (c *Client) GetMediaGroup(ctx context.Context, chatID int64, messageID int32) ([]*types.Message, error)
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ctx` | `context.Context` | Yes | Request context |
| `chatID` | `int64` | Yes | Chat ID where the message exists |
| `messageID` | `int32` | Yes | ID of any message in the media group |

#### Returns

| Type | Description |
|------|-------------|
| `[]*types.Message` | All messages in the album/media group |
| `error` | Non-nil on failure |

#### Errors

| Error | Condition |
|-------|-----------|
| `ErrChatNotFound` | Invalid chat ID |
| `ErrMessageNotFound` | Message ID does not exist |
| `ErrMediaGroupInvalid` | Message is not part of a media group |

#### Example

```go
messages, err := client.GetMediaGroup(ctx, chatID, 42)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Album contains %d items\n", len(messages))
for _, m := range messages {
    fmt.Printf("  Message %d\n", m.ID)
}
```
