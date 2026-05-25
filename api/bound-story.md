# Story Bound Methods

When a `*types.Story` is returned by the client (e.g. from `client.GetPeerStories()`), it has bound convenience methods for interacting with that story.

```go
stories, _ := client.GetPeerStories(ctx, peerID)
story := stories[0]
story.React("🔥")
story.Forward(chatID)
```

All methods return `ErrNoBinder` if the Story was not created by a client.

---

## Reply

Send a text reply to this story.

```go
func (s *Story) Reply(text string, opts ...*params.SendMessage) (*Message, error)
```

`ReplyText` is an alias for `Reply`.

**Example:**

```go
msg, err := story.Reply("Nice story!", &params.SendMessage{
    ReplyTo: &params.ReplyTo{StoryID: story.ID},
})
```

## ReplyMedia

Reply to this story with media.

```go
func (s *Story) ReplyMedia(media tg.InputMediaClass, caption string, opts ...*params.SendMessage) (*Message, error)
```

### ReplyPhoto

Reply with a cached photo by file ID.

```go
func (s *Story) ReplyPhoto(fileID, accessHash int64, caption string, opts ...*params.SendMessage) (*Message, error)
```

### ReplyAnimation

Reply with a cached animation/GIF by file ID.

```go
func (s *Story) ReplyAnimation(fileID, accessHash int64, caption string, opts ...*params.SendMessage) (*Message, error)
```

### ReplyAudio / ReplyVideo / ReplyVoice / ReplyVideoNote / ReplySticker

Reply with the corresponding cached media type by file ID and access hash.

```go
func (s *Story) ReplyAudio(fileID, accessHash int64, caption string, opts ...*params.SendMessage) (*Message, error)
func (s *Story) ReplyVideo(fileID, accessHash int64, caption string, opts ...*params.SendMessage) (*Message, error)
func (s *Story) ReplyVideoNote(fileID, accessHash int64, opts ...*params.SendMessage) (*Message, error)
func (s *Story) ReplyVoice(fileID, accessHash int64, caption string, opts ...*params.SendMessage) (*Message, error)
func (s *Story) ReplySticker(fileID, accessHash int64, opts ...*params.SendMessage) (*Message, error)
```

### ReplyCachedMedia

Reply with any cached media by file ID and access hash.

```go
func (s *Story) ReplyCachedMedia(fileID, accessHash int64, caption string, opts ...*params.SendMessage) (*Message, error)
```

### ReplyMediaGroup

Reply with a group of media (album). **Stub — not yet implemented.**

```go
func (s *Story) ReplyMediaGroup(media []tg.InputMediaClass, opts ...*params.SendMessage) ([]*Message, error)
```

## Forward

Forward this story to another chat.

```go
func (s *Story) Forward(chatID int64, opts ...*params.StoryForward) (*Message, error)
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| chatID | `int64` | Target chat ID |
| opts | `...*params.StoryForward` | Optional forward parameters |

**Example:**

```go
msg, err := story.Forward(targetChatID)
```

## Copy

Copy this story to another chat (alias for `Forward`).

```go
func (s *Story) Copy(chatID int64, opts ...*params.StoryForward) (*Message, error)
```

## Delete

Delete this story.

```go
func (s *Story) Delete() error
```

**Example:**

```go
err := story.Delete()
```

## EditCaption

Edit the caption of this story.

```go
func (s *Story) EditCaption(caption string) (*Story, error)
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| caption | `string` | New caption text |

## EditMedia

Edit the media of this story.

```go
func (s *Story) EditMedia(media tg.InputMediaClass) (*Story, error)
```

## EditPrivacy

Edit the privacy settings of this story.

```go
func (s *Story) EditPrivacy(opts ...*params.EditPrivacy) (*Story, error)
```

## React

React to this story with an emoji.

```go
func (s *Story) React(emoji string) error
```

**Example:**

```go
err := story.React("❤️")
```

## Download

Download the story media.

```go
func (s *Story) Download(opts ...*params.Download) ([]byte, error)
```

**Example:**

```go
data, err := story.Download()
os.WriteFile("story.jpg", data, 0644)
```

## Read

Mark this story as read. `View` is an alias.

```go
func (s *Story) Read() error
func (s *Story) View() error
```
