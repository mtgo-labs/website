# Message Methods

```go
client.OnMessage(func(ctx *telegram.Context, msg *types.Message) {
    reply, err := msg.Reply("Got it!")
    reply.React("👍")
}, tg.Command("start"))
```

If a message was not created by a client (e.g., constructed manually), calling any bound method returns `types.ErrNoBinder`.

---

## Text

### Reply

Sends a text message in the same chat, quoting this message.

```go
func (m *Message) Reply(text string, opts ...*params.SendMessage) (*Message, error)
```

```go
reply, err := msg.Reply("Hello!", &params.SendMessage{ParseMode: params.HTML})
```

### Send

Sends a text message in the same chat without replying.

```go
func (m *Message) Send(text string, opts ...*params.SendMessage) (*Message, error)
```

### Answer

Sends a text message without replying. Alias for `Send`; named for callback/query contexts.

```go
func (m *Message) Answer(text string, opts ...*params.SendMessage) (*Message, error)
```

### ReplyText

Alias for `Reply`.

```go
func (m *Message) ReplyText(text string, opts ...*params.SendMessage) (*Message, error)
```

### Edit

Modifies the text of this message. Only messages sent by the current user can be edited.

```go
func (m *Message) Edit(text string, opts ...*params.EditMessage) (*Message, error)
```

```go
edited, err := msg.Edit("<i>Updated</i>", &params.EditMessage{ParseMode: params.HTML})
```

### EditText

Alias for `Edit`.

```go
func (m *Message) EditText(text string, opts ...*params.EditMessage) (*Message, error)
```

---

## Media

### ReplyMedia / SendMedia / AnswerMedia

Sends media to the same chat. `ReplyMedia` quotes this message; `SendMedia`/`AnswerMedia` do not.

```go
func (m *Message) ReplyMedia(media tg.InputMediaClass, caption string, opts ...*params.SendMessage) (*Message, error)
func (m *Message) SendMedia(media tg.InputMediaClass, caption string, opts ...*params.SendMessage) (*Message, error)
func (m *Message) AnswerMedia(media tg.InputMediaClass, caption string, opts ...*params.SendMessage) (*Message, error)
```

### EditMedia

Replaces the media content of this message.

```go
func (m *Message) EditMedia(media tg.InputMediaClass) (*Message, error)
```

### EditCaption

Changes the caption of this media message.

```go
func (m *Message) EditCaption(caption string, opts ...*params.EditMessage) (*Message, error)
```

### EditReplyMarkup

Changes only the inline keyboard of this message.

```go
func (m *Message) EditReplyMarkup(markup tg.ReplyMarkupClass) (*Message, error)
```

---

## File Upload

Each media type has a `Reply*` variant (quotes this message) and an `Answer*` variant (no reply). All accept an `*types.InputFile` for the file to upload.

### Photo

```go
func (m *Message) ReplyPhoto(file *InputFile, caption string, opts ...*params.SendPhoto) (*Message, error)
func (m *Message) AnswerPhoto(file *InputFile, caption string, opts ...*params.SendPhoto) (*Message, error)
```

### Audio

```go
func (m *Message) ReplyAudio(file *InputFile, caption string, opts ...*params.SendAudio) (*Message, error)
func (m *Message) AnswerAudio(file *InputFile, caption string, opts ...*params.SendAudio) (*Message, error)
```

### Video

```go
func (m *Message) ReplyVideo(file *InputFile, caption string, opts ...*params.SendVideo) (*Message, error)
func (m *Message) AnswerVideo(file *InputFile, caption string, opts ...*params.SendVideo) (*Message, error)
```

### Document

```go
func (m *Message) ReplyDocument(file *InputFile, caption string, opts ...*params.SendDocument) (*Message, error)
func (m *Message) AnswerDocument(file *InputFile, caption string, opts ...*params.SendDocument) (*Message, error)
```

### Animation

```go
func (m *Message) ReplyAnimation(file *InputFile, caption string, opts ...*params.SendAnimation) (*Message, error)
func (m *Message) AnswerAnimation(file *InputFile, caption string, opts ...*params.SendAnimation) (*Message, error)
```

### Voice

```go
func (m *Message) ReplyVoice(file *InputFile, caption string, opts ...*params.SendVoice) (*Message, error)
func (m *Message) AnswerVoice(file *InputFile, caption string, opts ...*params.SendVoice) (*Message, error)
```

### Video Note

```go
func (m *Message) ReplyVideoNote(file *InputFile, opts ...*params.SendVideoNote) (*Message, error)
func (m *Message) AnswerVideoNote(file *InputFile, opts ...*params.SendVideoNote) (*Message, error)
```

### Sticker

```go
func (m *Message) ReplySticker(file *InputFile, opts ...*params.SendSticker) (*Message, error)
func (m *Message) AnswerSticker(file *InputFile, opts ...*params.SendSticker) (*Message, error)
```

### Cached Media

```go
func (m *Message) ReplyCachedMedia(file *InputFile, caption string, opts ...*params.SendDocument) (*Message, error)
func (m *Message) AnswerCachedMedia(file *InputFile, caption string, opts ...*params.SendDocument) (*Message, error)
```

### Media Group (Album)

```go
func (m *Message) ReplyMediaGroup(media []tg.InputMediaClass, opts ...*params.SendMediaGroup) ([]*Message, error)
func (m *Message) AnswerMediaGroup(media []tg.InputMediaClass, opts ...*params.SendMediaGroup) ([]*Message, error)
```

---

## Structured Messages

### Contact

```go
func (m *Message) ReplyContact(phone, firstName, lastName string, opts ...*params.SendContact) (*Message, error)
func (m *Message) AnswerContact(phone, firstName, lastName string, opts ...*params.SendContact) (*Message, error)
```

### Location

```go
func (m *Message) ReplyLocation(lat, lng float64, opts ...*params.SendLocation) (*Message, error)
func (m *Message) AnswerLocation(lat, lng float64, opts ...*params.SendLocation) (*Message, error)
```

### Venue

```go
func (m *Message) ReplyVenue(lat, lng float64, title, address string, opts ...*params.SendVenue) (*Message, error)
func (m *Message) AnswerVenue(lat, lng float64, title, address string, opts ...*params.SendVenue) (*Message, error)
```

### Poll

```go
func (m *Message) ReplyPoll(question string, options []string, opts ...*params.SendPoll) (*Message, error)
func (m *Message) AnswerPoll(question string, options []string, opts ...*params.SendPoll) (*Message, error)
```

### Dice

```go
func (m *Message) ReplyDice(emoji string, opts ...*params.SendDice) (*Message, error)
func (m *Message) AnswerDice(emoji string, opts ...*params.SendDice) (*Message, error)
```

Supported emojis: `🎲`, `🎯`, `🏀`, `⚽`, `🎰`, `🎳`.

### Game

```go
func (m *Message) ReplyGame(gameShortName string, opts ...*params.SendGame) (*Message, error)
func (m *Message) AnswerGame(gameShortName string, opts ...*params.SendGame) (*Message, error)
```

### Checklist

```go
func (m *Message) ReplyChecklist(checklist *tg.InputMediaTodo, opts ...*params.SendChecklist) (*Message, error)
func (m *Message) AnswerChecklist(checklist *tg.InputMediaTodo, opts ...*params.SendChecklist) (*Message, error)
func (m *Message) EditChecklist(checklist *tg.InputMediaTodo, opts ...*params.EditMessage) (*Message, error)
```

### Chat Action

```go
func (m *Message) ReplyChatAction(action tg.SendMessageActionClass) error
```

```go
msg.ReplyChatAction(&tg.SendMessageTypingAction{})
```

### Inline Bot Result

```go
func (m *Message) ReplyInlineBotResult(queryID int64, resultID string, opts ...*params.SendInlineBotResult) (*Message, error)
func (m *Message) AnswerInlineBotResult(queryID int64, resultID string, opts ...*params.SendInlineBotResult) (*Message, error)
```

---

## Forward & Copy

### Forward

Forwards this message to another chat.

```go
func (m *Message) Forward(chatID int64, opts ...*params.ForwardMessages) (*Message, error)
```

```go
fwd, err := msg.Forward(targetChatID, &params.ForwardMessages{DropAuthor: true})
```

### Copy

Copies this message into another chat without the forward header. Returns the new message ID.

```go
func (m *Message) Copy(chatID int64, opts ...*params.CopyMessage) (int64, error)
```

### CopyMediaGroup

Copies all messages in this message's album into another chat.

```go
func (m *Message) CopyMediaGroup(chatID int64) ([]*Message, error)
```

### GetMediaGroup

Retrieves all messages that belong to the same album as this message.

```go
func (m *Message) GetMediaGroup() ([]*Message, error)
```

---

## Reactions & Voting

### React

Adds emoji reactions to this message.

```go
func (m *Message) React(emojis ...string) error
```

```go
msg.React("👍", "❤️")
```

### Vote

Casts a vote in a poll message.

```go
func (m *Message) Vote(options [][]byte) error
```

### RetractVote

Withdraws the current user's vote in a poll.

```go
func (m *Message) RetractVote() error
```

---

## Pin & Read

### Pin

Pins this message in the chat.

```go
func (m *Message) Pin(opts ...*params.PinMessage) error
```

```go
msg.Pin(&params.PinMessage{Silent: true})
```

### Unpin

Removes this message from the pinned list.

```go
func (m *Message) Unpin(opts ...*params.PinMessage) error
```

### Read

Marks this message (and all before it) as read.

```go
func (m *Message) Read() error
```

### View

Alias for `Read`.

```go
func (m *Message) View() error
```

---

## Delete

Removes this message from the chat. Returns the number of messages deleted.

```go
func (m *Message) Delete(opts ...*params.DeleteMessages) (int, error)
```

```go
count, err := msg.Delete(&params.DeleteMessages{Revoke: true})
```

---

## Download

### Download

Downloads the media attached to this message as raw bytes.

```go
func (m *Message) Download(opts ...*params.Download) ([]byte, error)
```

```go
data, err := msg.Download()
os.WriteFile("photo.jpg", data, 0644)
```

### DownloadTo

Downloads media to a file path. Returns the absolute path of the saved file.

```go
func (m *Message) DownloadTo(fileName string, progress params.ProgressFunc) (string, error)
```

```go
path, err := msg.DownloadTo("/tmp/photo.jpg", nil)
path, err := msg.DownloadTo("", nil)             // auto-generated in ./downloads/
path, err := msg.DownloadTo("/tmp/media/", nil)   // auto-generates filename
```

---

## Stub Methods (Not Yet Implemented)

These methods exist in the API but return `BoundStub` errors:

| Method | Description |
|--------|-------------|
| `EditLiveLocation(lat, lng)` | Update live location |
| `StopLiveLocation()` | Stop live location sharing |
| `Click(buttonIndex)` | Simulate button press |
| `Pay()` | Initiate payment |
| `ReplyPaidMedia(caption, opts)` | Send paid media |
| `AnswerPaidMedia(caption, opts)` | Send paid media (no reply) |
| `ReplyInvoice(title, desc, opts)` | Send invoice |
| `AnswerInvoice(title, desc, opts)` | Send invoice (no reply) |
| `AcceptGiftPurchaseOffer()` | Accept gift offer |
| `RejectGiftPurchaseOffer()` | Reject gift offer |
| `Summarize()` | Generate message summary |

---

## CallbackQuery Methods

Callback queries also have bound methods. All return `ErrNoBinder` if not created by a client.

### Answer / AnswerAlert / AnswerURL

```go
func (c *CallbackQuery) Answer(text string) error
func (c *CallbackQuery) AnswerAlert(text string) error
func (c *CallbackQuery) AnswerURL(url string) error
```

### Reply

Sends a text message in the callback's originating chat.

```go
func (c *CallbackQuery) Reply(text string) (*Message, error)
```

### EditMessage / EditMessageText

Edits the text of the message the callback button is on.

```go
func (c *CallbackQuery) EditMessage(text string, opts ...*params.EditMessage) (*Message, bool, error)
func (c *CallbackQuery) EditMessageText(text string, opts ...*params.EditMessage) (*Message, bool, error)
```

Returns `(message, isInline, error)`. `isInline` is `true` if the message was sent via inline mode.

### EditCaption / EditMessageCaption

```go
func (c *CallbackQuery) EditCaption(caption string, opts ...*params.EditMessage) (*Message, error)
func (c *CallbackQuery) EditMessageCaption(caption string, opts ...*params.EditMessage) (*Message, bool, error)
```

### EditMedia / EditMessageMedia

```go
func (c *CallbackQuery) EditMedia(media tg.InputMediaClass) (*Message, error)
func (c *CallbackQuery) EditMessageMedia(media tg.InputMediaClass) (*Message, bool, error)
```

### EditReplyMarkup / EditMessageReplyMarkup

```go
func (c *CallbackQuery) EditReplyMarkup(markup tg.ReplyMarkupClass) (*Message, error)
func (c *CallbackQuery) EditMessageReplyMarkup(markup tg.ReplyMarkupClass) (*Message, bool, error)
```

### Delete

```go
func (c *CallbackQuery) Delete() (int, error)
```

---

## InlineQuery Methods

Inline queries have bound methods for answering inline queries. All return `ErrNoBinder` if not created by a client.

### Answer

```go
func (iq *InlineQuery) Answer(results []tg.InputBotInlineResultClass, opts ...*params.InlineQuery) error
```

### AnswerResults

Accepts builder-pattern results.

```go
func (iq *InlineQuery) AnswerResults(results []InlineResultBuilder, opts ...*params.InlineQuery) error
```

### AnswerArticle / AnswerArticles

```go
func (iq *InlineQuery) AnswerArticle(id, title, text string, opts ...*params.InlineQuery) error
func (iq *InlineQuery) AnswerArticles(articles []*InlineArticle, opts ...*params.InlineQuery) error
```

### AnswerPhoto / AnswerPhotos

```go
func (iq *InlineQuery) AnswerPhoto(id string, photoID, accessHash int64, text string, opts ...*params.InlineQuery) error
func (iq *InlineQuery) AnswerPhotos(photos []*InlinePhoto, opts ...*params.InlineQuery) error
```

### AnswerDocument / AnswerDocuments

```go
func (iq *InlineQuery) AnswerDocument(id string, docID, accessHash int64, text string, opts ...*params.InlineQuery) error
func (iq *InlineQuery) AnswerDocuments(docs []*InlineDocument, opts ...*params.InlineQuery) error
```

### AnswerGame

```go
func (iq *InlineQuery) AnswerGame(id, shortName string, opts ...*params.InlineQuery) error
```
