---
title: MTGo Context API
description: The Context object provides access to update data and methods for responding to messages, managing chats, handling callbacks, and more.
---

# MTGo Context API

`Context` wraps a Telegram update and provides convenience methods for responding. Each handler receives a `*Context`.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `Ctx` | `context.Context` | Underlying context |
| `Client` | `*Client` | MTGo client instance |
| `Update` | `tg.UpdateClass` | Raw Telegram update |
| `Stopped` | `bool` | Whether propagation is stopped |
| `PluginData` | `map[string]any` | Shared data between plugins |
| `Message` | `*types.Message` | Incoming message |
| `EditedMessage` | `*types.Message` | Edited message |
| `BusinessMessage` | `*types.Message` | Business connection message |
| `EditedBusinessMessage` | `*types.Message` | Edited business message |
| `DeletedMessages` | `*tg.UpdateDeleteMessages` | Deleted messages |
| `DeletedBusinessMessages` | `*tg.UpdateBotDeleteBusinessMessage` | Deleted business messages |
| `CallbackQuery` | `*tg.UpdateBotCallbackQuery` | Callback query |
| `InlineQuery` | `*tg.UpdateInlineBot` | Inline query |
| `ChosenInlineResult` | `*tg.UpdateBotChosenInlineResult` | Chosen inline result |
| `UserStatus` | `*tg.UpdateUserStatus` | User status update |
| `ChatMember` | `*tg.UpdateChatParticipant` | Chat member update |
| `MessageReaction` | `*tg.UpdateMessageReactions` | Message reaction |
| `MessageReactionCount` | `*tg.UpdateMessageReactionCount` | Reaction count update |
| `Poll` | `*tg.UpdateMessagePoll` | Poll update |
| `BusinessConnection` | `*tg.UpdateBotBusinessConnect` | Business connection |
| `Story` | `*tg.UpdateStory` | Story update |
| `ChatBoost` | `*tg.UpdateBotChatBoost` | Chat boost |
| `ChatJoinRequest` | `*tg.UpdateBotChatJoinRequest` | Join request |
| `PreCheckoutQuery` | `*tg.UpdateBotPrecheckoutQuery` | Pre-checkout query |
| `ShippingQuery` | `*tg.UpdateBotShippingQuery` | Shipping query |
| `PurchasedPaidMedia` | `*tg.UpdateBotPurchasedPaidMedia` | Paid media purchase |
| `ManagedBot` | `*tg.UpdateBotWebhookJSON` | Managed bot update |
| `Error` | `error` | Error from connection |
| `Connected` | `bool` | Connection established |
| `Disconnected` | `bool` | Connection lost |
| `Started` | `bool` | Client fully started |

---

## Core

### NewContext

```go
func NewContext(ctx context.Context) *Context
```

Creates a new context. Usually called internally by the dispatcher.

### StopPropagation

```go
func (c *Context) StopPropagation()
```

Stops the update from being passed to subsequent handlers.

```go
func handler(c *mtgo.Context) error {
    c.StopPropagation()
    return nil
}
```

### ResolvePeer

```go
func (c *Context) ResolvePeer(id int64) interface{}
```

Resolves a peer ID to a Telegram peer object.

### Sender

```go
func (c *Context) Sender() *types.User
```

Returns the user who sent the update.

```go
user := ctx.Sender()
fmt.Printf("From: %s (ID: %d)\n", user.FirstName, user.ID)
```

### T

```go
func (c *Context) T(key string, args ...any) string
```

Returns a translated string for the given key. Supports template arguments.

---

## Message

### Reply

```go
func (c *Context) Reply(text string, opts ...*params.SendMessage) (*types.Message, error)
```

Replies to the current message in the same chat.

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | Message text |
| `opts` | `...*params.SendMessage` | Optional send parameters |

```go
msg, err := ctx.Reply("Hello!")
```

### Edit

```go
func (c *Context) Edit(text string, opts ...*params.EditMessage) (*types.Message, error)
```

Edits the current message. Alias for `EditText`.

```go
msg, err := ctx.Edit("Updated text")
```

### EditText

```go
func (c *Context) EditText(text string, opts ...*params.EditMessage) (*types.Message, error)
```

Edits the text of the current message.

### EditCaption

```go
func (c *Context) EditCaption(caption string, opts ...*params.EditMessage) (*types.Message, error)
```

Edits the caption of the current message.

```go
msg, err := ctx.EditCaption("New caption")
```

### EditMedia

```go
func (c *Context) EditMedia(media tg.InputMediaClass, opts ...*params.EditMessage) (*types.Message, error)
```

Replaces the media in the current message.

### EditReplyMarkup

```go
func (c *Context) EditReplyMarkup(replyMarkup tg.ReplyMarkupClass) (*types.Message, error)
```

Changes the inline keyboard of the current message.

```go
msg, err := ctx.EditReplyMarkup(&tg.ReplyInlineMarkup{
    Rows: []tg.KeyboardButtonRow{
        {Buttons: []tg.KeyboardButtonClass{
            &tg.KeyboardButtonCallback{Text: "Done", Data: []byte("done")},
        }},
    },
})
```

### Delete

```go
func (c *Context) Delete(opts ...*params.DeleteMessages) (int, error)
```

Deletes the current message. Returns the number of messages deleted.

```go
count, err := ctx.Delete()
```

### Forward

```go
func (c *Context) Forward(chatID int64, opts ...*params.ForwardMessages) (*types.Message, error)
```

Forwards the current message to another chat.

```go
fwd, err := ctx.Forward(-1001234567890)
```

### Copy

```go
func (c *Context) Copy(chatID int64, opts ...*params.CopyMessage) (int64, error)
```

Copies the current message to another chat without the forward header.

```go
newID, err := ctx.Copy(-1001234567890)
```

### Send

```go
func (c *Context) Send(chatID int64, text string, opts ...*params.SendMessage) (*types.Message, error)
```

Sends a text message to a specific chat.

```go
msg, err := ctx.Send(-1001234567890, "Broadcast message")
```

### SendMedia

```go
func (c *Context) SendMedia(chatID int64, media tg.InputMediaClass, caption string, opts ...*params.SendMessage) (*types.Message, error)
```

Sends media to a specific chat.

```go
msg, err := ctx.SendMedia(chatID, &tg.InputMediaUploadedPhoto{
    File: uploadedFile,
}, "Photo caption")
```

### SendGame

```go
func (c *Context) SendGame(chatID int64, gameShortName string, opts ...*params.SendMessage) (*types.Message, error)
```

Sends a game to a chat.

### React

```go
func (c *Context) React(reaction ...tg.ReactionClass) error
```

Adds a reaction to the current message.

```go
err := ctx.React(&tg.ReactionEmoji{Emoticon: "👍"})
```

### SendPaidReaction

```go
func (c *Context) SendPaidReaction(amount int64) error
```

Sends a paid reaction (Telegram Stars).

```go
err := ctx.SendPaidReaction(50)
```

### Read / View

```go
func (c *Context) Read() error
func (c *Context) View() error
```

Marks the current chat as read. `View` is an alias for `Read`.

```go
err := ctx.Read()
```

### DownloadMedia

```go
func (c *Context) DownloadMedia() ([]byte, error)
```

Downloads the media attached to the current message.

```go
data, err := ctx.DownloadMedia()
if err != nil {
    return err
}
os.WriteFile("download.dat", data, 0644)
```

### DownloadMediaToFile

```go
func (c *Context) DownloadMediaToFile(filePath string, fileSize int64) error
```

Downloads the current message media to a file on disk.

```go
err := ctx.DownloadMediaToFile("photo.jpg", 0)
```

### Pin / Unpin

```go
func (c *Context) Pin(opts ...*params.PinMessage) error
func (c *Context) Unpin() error
```

Pins or unpins the current message.

```go
err := ctx.Pin()
err = ctx.Unpin()
```

### SendChatAction

```go
func (c *Context) SendChatAction(action tg.SendMessageActionClass) error
```

Sends a chat action indicator (typing, uploading, etc.).

```go
err := ctx.SendChatAction(&tg.SendMessageTypingAction{})
```

### GetMediaGroup

```go
func (c *Context) GetMediaGroup() ([]*types.Message, error)
```

Returns all messages in the current album/media group.

```go
messages, err := ctx.GetMediaGroup()
```

### Vote

```go
func (c *Context) Vote(options [][]byte) error
```

Votes in the current poll.

```go
err := ctx.Vote([][]byte{[]byte("0")})
```

### StopPoll

```go
func (c *Context) StopPoll() error
```

Stops the current poll.

### RetractVote

```go
func (c *Context) RetractVote() error
```

Retracts the vote in the current poll.

### DeleteChatHistory

```go
func (c *Context) DeleteChatHistory(revoke bool) (int, error)
```

Deletes the entire chat history. If `revoke` is true, deletes for both sides.

```go
count, err := ctx.DeleteChatHistory(true)
```

### GetChatHistoryCount

```go
func (c *Context) GetChatHistoryCount() (int, error)
```

Returns the total message count in the current chat.

### ForwardMediaGroup

```go
func (c *Context) ForwardMediaGroup(chatID int64, opts ...*params.ForwardMessages) ([]*types.Message, error)
```

Forwards a media group (album) to another chat.

### ReadMentions

```go
func (c *Context) ReadMentions() error
```

Marks mentions as read in the current chat.

### ReadReactions

```go
func (c *Context) ReadReactions() error
```

Marks reactions as read in the current chat.

---

## Chat

### GetChat

```go
func (c *Context) GetChat() (*types.Chat, error)
```

Returns information about the current chat.

```go
chat, err := ctx.GetChat()
fmt.Printf("Chat: %s (ID: %d)\n", chat.Title, chat.ID)
```

### LeaveChat

```go
func (c *Context) LeaveChat() error
```

Leaves the current chat.

### Ban

```go
func (c *Context) Ban(userID int64) error
```

Bans a user from the current chat.

```go
err := ctx.Ban(12345678)
```

### Unban

```go
func (c *Context) Unban(userID int64) error
```

Removes a ban on a user.

### Restrict

```go
func (c *Context) Restrict(userID int64, rights *tg.ChatBannedRights) error
```

Restricts a user with specific banned rights.

```go
err := ctx.Restrict(userID, &tg.ChatBannedRights{
    UntilDate:      time.Now().Add(24 * time.Hour).Unix(),
    SendMessages:   true,
    SendMedia:      true,
})
```

### Promote

```go
func (c *Context) Promote(userID int64, rights *tg.ChatAdminRights) error
```

Promotes a user to admin with specified rights.

```go
err := ctx.Promote(userID, &tg.ChatAdminRights{
    ChangeInfo:     true,
    DeleteMessages: true,
    BanUsers:       true,
})
```

### SetAdministratorTitle

```go
func (c *Context) SetAdministratorTitle(userID int64, title string) error
```

Sets a custom admin title for a promoted user.

```go
err := ctx.SetAdministratorTitle(12345678, "Moderator")
```

### GetMember

```go
func (c *Context) GetMember(userID int64) (*types.ChatMember, error)
```

Gets a chat member's information.

```go
member, err := ctx.GetMember(12345678)
```

### GetMembers

```go
func (c *Context) GetMembers(limit, offset int) ([]*types.ChatMember, error)
```

Returns chat members with pagination.

```go
members, err := ctx.GetMembers(100, 0)
```

### SetTitle

```go
func (c *Context) SetTitle(title string) error
```

Changes the chat title.

### SetDescription

```go
func (c *Context) SetDescription(about string) error
```

Changes the chat description/about text.

### SetPhoto

```go
func (c *Context) SetPhoto(photo tg.InputChatPhotoClass) error
```

Sets a new chat photo.

### DeleteChatPhoto

```go
func (c *Context) DeleteChatPhoto() error
```

Removes the chat photo.

### SetTTL

```go
func (c *Context) SetTTL(ttl int) error
```

Sets the message TTL (Time-To-Live) for the chat.

### SetPermissions

```go
func (c *Context) SetPermissions(permissions *tg.ChatBannedRights) error
```

Sets default chat permissions.

### ExportInviteLink

```go
func (c *Context) ExportInviteLink() (string, error)
```

Generates a new primary invite link for the chat.

```go
link, err := ctx.ExportInviteLink()
fmt.Printf("Invite: %s\n", link)
```

### Archive / Unarchive

```go
func (c *Context) Archive() error
func (c *Context) Unarchive() error
```

Archives or unarchives the current chat.

### MarkUnread

```go
func (c *Context) MarkUnread(unread bool) error
```

Marks the chat as unread or read in the folder.

### SetProtectedContent

```go
func (c *Context) SetProtectedContent(enabled bool) error
```

Enables or disables content protection (no forwarding/screenshots).

### UnpinAllMessages

```go
func (c *Context) UnpinAllMessages() (int, error)
```

Unpins all messages. Returns count of unpinned messages.

### Mute / Unmute

```go
func (c *Context) Mute() error
func (c *Context) Unmute() error
```

Mutes or unmutes notifications for the current chat.

### AddMembers

```go
func (c *Context) AddMembers(userIDs []int64) error
```

Adds members to the current chat.

```go
err := ctx.AddMembers([]int64{111, 222, 333})
```

### SetSlowMode

```go
func (c *Context) SetSlowMode(seconds int) error
```

Sets slow mode delay. Use `0` to disable.

### GetChatEventLog

```go
func (c *Context) GetChatEventLog(query string, limit int) ([]*types.ChatEvent, error)
```

Retrieves chat event log (admin log) entries.

### SearchMessages

```go
func (c *Context) SearchMessages(query string, opts ...*SearchMessagesOption) ([]*types.Message, error)
```

Searches messages in the current chat.

```go
messages, err := ctx.SearchMessages("hello", &SearchMessagesOption{Limit: 10})
```

### GetHistory

```go
func (c *Context) GetHistory(limit int, offsetID int32) ([]*types.Message, error)
```

Retrieves chat message history.

```go
messages, err := ctx.GetHistory(50, 0)
```

### GetCommonChats

```go
func (c *Context) GetCommonChats(userID int64, limit int) ([]*types.Chat, error)
```

Returns chats shared with a user.

---

## Callback

### Answer

```go
func (c *Context) Answer(text string, showAlert bool) error
```

Answers a callback query with an optional alert.

```go
err := ctx.Answer("Processing...", false)
```

### AnswerCallbackQuery

```go
func (c *Context) AnswerCallbackQuery(text string, showAlert bool) error
```

Alias for `Answer`.

### AnswerCallback

```go
func (c *Context) AnswerCallback(text string, showAlert bool) error
```

Alias for `Answer`.

### CallbackEditText

```go
func (c *Context) CallbackEditText(text string, opts ...*params.EditMessage) (*types.Message, error)
```

Edits the message associated with the callback query.

```go
msg, err := ctx.CallbackEditText("You selected: Option A")
```

### CallbackEditCaption

```go
func (c *Context) CallbackEditCaption(caption string, opts ...*params.EditMessage) (*types.Message, error)
```

Edits the caption of the callback message.

### CallbackEditMedia

```go
func (c *Context) CallbackEditMedia(media tg.InputMediaClass, opts ...*params.EditMessage) (*types.Message, error)
```

Edits the media of the callback message.

### CallbackEditReplyMarkup

```go
func (c *Context) CallbackEditReplyMarkup(replyMarkup tg.ReplyMarkupClass) (*types.Message, error)
```

Edits the inline keyboard of the callback message.

---

## Inline

### AnswerInlineQuery

```go
func (c *Context) AnswerInlineQuery(results []tg.InputBotInlineResultClass, opts ...*AnswerInlineQueryOption) error
```

Answers an inline query with results.

```go
err := ctx.AnswerInlineQuery([]tg.InputBotInlineResultClass{
    &tg.InputBotInlineResultArticle{
        ID:      "1",
        Title:   "Result",
        Content: &tg.InputTextMessageContent{Message: "Hello!"},
    },
})
```

### AnswerInline

```go
func (c *Context) AnswerInline(results []tg.InputBotInlineResultClass, opts ...*AnswerInlineQueryOption) error
```

Alias for `AnswerInlineQuery`.

### AnswerShipping

```go
func (c *Context) AnswerShipping(queryID int64, ok bool, options []*tg.ShippingOption) error
```

Answers a shipping query.

### AnswerPreCheckout

```go
func (c *Context) AnswerPreCheckout(queryID int64, ok bool, errorMessage string) error
```

Answers a pre-checkout query.

```go
err := ctx.AnswerPreCheckout(queryID, true, "")
```

---

## Account

### GetBusinessConnection

```go
func (c *Context) GetBusinessConnection(connectionID string) (*tg.BotBusinessConnection, error)
```

Retrieves business connection information.

---

## Payments

### GetPaymentForm

```go
func (c *Context) GetPaymentForm(chatID int64, messageID int32, opts ...*GetPaymentFormOption) (tg.PaymentFormClass, error)
```

Retrieves a payment form for an invoice.

### SendPaymentForm

```go
func (c *Context) SendPaymentForm(formID int64, chatID int64, messageID int32, creds tg.InputPaymentCredentialsClass, opts ...*SendPaymentFormOption) (tg.PaymentResultClass, error)
```

Submits payment credentials for an invoice.

### GetStarsBalance

```go
func (c *Context) GetStarsBalance(chatID int64) (int64, error)
```

Returns the Telegram Stars balance for a chat.

```go
balance, err := ctx.GetStarsBalance(chatID)
fmt.Printf("Stars balance: %d\n", balance)
```

### SendGift

```go
func (c *Context) SendGift(userID int64, giftID int64, message string) error
```

Sends a gift to a user.

---

## Premium

### ApplyBoost

```go
func (c *Context) ApplyBoost(chatID int64, opts ...*ApplyBoostOption) ([]*tg.MyBoost, error)
```

Applies a boost to a chat.

### GetBoostsStatus

```go
func (c *Context) GetBoostsStatus(chatID int64) (*tg.PremiumBoostsStatus, error)
```

Returns boost status for a chat.

### GetBoosts

```go
func (c *Context) GetBoosts(opts ...*GetBoostsOption) ([]*tg.MyBoost, error)
```

Returns the user's active boosts.

---

## Stories

### SendStory

```go
func (c *Context) SendStory(chatID int64, media tg.InputMediaClass, opts ...*SendStoryOption) (*types.Story, error)
```

Posts a new story.

```go
story, err := ctx.SendStory(chatID, &tg.InputMediaUploadedPhoto{
    File: uploadedFile,
})
```

### EditStoryCaption

```go
func (c *Context) EditStoryCaption(chatID int64, storyID int32, caption string) (*types.Story, error)
```

Edits a story's caption.

### EditStoryMedia

```go
func (c *Context) EditStoryMedia(chatID int64, storyID int32, media tg.InputMediaClass) (*types.Story, error)
```

Replaces a story's media.

### DeleteStories

```go
func (c *Context) DeleteStories(chatID int64, storyIDs []int32) error
```

Deletes stories by ID.

### GetStories

```go
func (c *Context) GetStories(userID int64, storyIDs []int32) ([]*types.Story, error)
```

Retrieves stories by user and IDs.

### GetChatStories

```go
func (c *Context) GetChatStories(chatID int64) ([]*types.Story, error)
```

Retrieves all stories from a chat.

### GetStoryViews

```go
func (c *Context) GetStoryViews(chatID int64, storyIDs []int32) ([]*tg.StoryViewsTL, error)
```

Returns view counts for stories.

### ForwardStory

```go
func (c *Context) ForwardStory(target int64, source int64, storyID int32) (*types.Message, error)
```

Forwards a story to a chat.

### ReadChatStories

```go
func (c *Context) ReadChatStories(chatID int64, storyIDs []int32) error
```

Marks stories as read.
