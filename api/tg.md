---
title: MTGo Generated Types (tg)
description: Auto-generated Telegram TL schema types, RPC functions, and interfaces provided by the tg package.
---

# MTGo Generated Types (tg)

The `tg` package contains auto-generated Go types and RPC functions corresponding to the Telegram MTProto TL schema. It provides type-safe access to every Telegram API method and data structure.

## Core Interfaces

### Invoker

```go
type Invoker interface {
    Invoke(ctx context.Context, input TLObject) (TLObject, error)
}
```

The core interface for sending RPC calls. Implemented by `*mtproto.Client` and used as the transport layer for all generated RPC methods.

### TLObject

```go
type TLObject interface {
    CRC() uint32
}
```

Every generated type implements `TLObject`. The `CRC` method returns the constructor ID from the TL schema.

---

## Registry

The registry maps constructor IDs to concrete types for deserialization:

```go
func RegisterConstructor(id uint32, fn func() TLObject)
func NewConstructor(id uint32) (TLObject, bool)
```

Used internally by the MTProto deserializer. You typically do not need to interact with the registry directly.

---

## Generated Constructors

Every Telegram type has a corresponding Go struct with a `TL` suffix convention:

```go
// Messages
type MessageTL struct {
    ID           int32
    FromID       PeerClass
    PeerID       PeerClass
    Date         int32
    Message      string
    Media        MessageMediaClass
    ReplyMarkup  ReplyMarkupClass
    Entities     []MessageEntityClass
    // ... all TL fields
}

// Users
type UserTL struct {
    ID        int64
    FirstName string
    LastName  string
    Username  string
    Phone     string
    Photo     UserProfilePhotoClass
    Status    UserStatusClass
    // ... all TL fields
}

// Chats
type ChatTL struct {
    ID    int64
    Title string
    Photo ChatPhotoClass
    // ...
}

// Channels
type Channel struct {
    ID       int64
    Title    string
    Username string
    Photo    ChatPhotoClass
    // ...
}
```

---

## Generated RPC Functions

Every Telegram API method has a generated RPC function on the relevant type namespace:

```go
// Auth
func (c *AuthClient) SendCode(ctx context.Context, request *AuthSendCodeRequest) (SentCodeClass, error)
func (c *AuthClient) SignIn(ctx context.Context, request *AuthSignInRequest) (AuthorizationClass, error)
func (c *AuthClient) LogOut(ctx context.Context) (bool, error)
func (c *AuthClient) CheckPassword(ctx context.Context, request *AuthCheckPasswordRequest) (AuthorizationClass, error)

// Messages
func (c *MessagesClient) SendMessage(ctx context.Context, request *MessagesSendMessageRequest) (UpdatesClass, error)
func (c *MessagesClient) EditMessage(ctx context.Context, request *MessagesEditMessageRequest) (UpdatesClass, error)
func (c *MessagesClient) DeleteMessages(ctx context.Context, request *MessagesDeleteMessagesRequest) (MessagesAffectedMessages, error)
func (c *MessagesClient) GetHistory(ctx context.Context, request *MessagesGetHistoryRequest) (MessagesMessagesClass, error)
func (c *MessagesClient) Search(ctx context.Context, request *MessagesSearchRequest) (MessagesMessagesClass, error)

// Users
func (c *UsersClient) GetUsers(ctx context.Context, request *UsersGetUsersRequest) ([]UserClass, error)
func (c *UsersClient) GetFullUser(ctx context.Context, request *UsersGetFullUserRequest) (UserFull, error)

// Channels
func (c *ChannelsClient) GetChannels(ctx context.Context, request *ChannelsGetChannelsRequest) (MessagesChatsClass, error)
func (c *ChannelsClient) JoinChannel(ctx context.Context, request *ChannelsJoinChannelRequest) (UpdatesClass, error)

// Photos
func (c *PhotosClient) UploadProfilePhoto(ctx context.Context, request *PhotosUploadProfilePhotoRequest) (PhotosPhoto, error)
```

Each RPC function accepts a typed request struct and returns a typed response.

---

## Layer Info

```go
const Layer = 189 // Current MTProto layer version
```

The layer version corresponds to the Telegram schema version used during code generation.

---

## Type Hierarchies

Telegram uses interface-based polymorphism. Key hierarchies:

### UpdateClass

```go
type UpdateClass interface {
    TLObject
}

// Implementations:
// UpdateNewMessage, UpdateEditMessage, UpdateDeleteMessages,
// UpdateBotCallbackQuery, UpdateInlineBot, UpdateChatParticipant,
// UpdateMessageReactions, UpdateUserStatus, ...
```

### UpdatesClass

```go
type UpdatesClass interface {
    TLObject
}

// Implementations:
// UpdatesShort, UpdatesCombined, UpdatesTL, UpdateShortMessage,
// UpdateShortChatMessage, UpdateShortSentMessage
```

### Message Type Hierarchy

```go
type MessageClass interface {
    TLObject
}

// Implementations:
// MessageTL, MessageService, MessageEmpty
```

### InputMediaClass

```go
type InputMediaClass interface {
    TLObject
}

// Implementations:
// InputMediaUploadedPhoto, InputMediaUploadedDocument,
// InputMediaPhoto, InputMediaDocument, InputMediaGame,
// InputMediaInvoice, InputMediaGeoPoint, ...
```

### InputPeerClass

```go
type InputPeerClass interface {
    TLObject
}

// Implementations:
// InputPeerUser, InputPeerChat, InputPeerChannel,
// InputPeerSelf, InputPeerEmpty, InputPeerFromMessage
```

### InputFileLocationClass

```go
type InputFileLocationClass interface {
    TLObject
}

// Implementations:
// InputFileLocation, InputDocumentFileLocation,
// InputPhotoFileLocation, InputPeerPhotoFileLocation,
// InputStickerSetThumb, ...
```

### ReplyMarkupClass

```go
type ReplyMarkupClass interface {
    TLObject
}

// Implementations:
// ReplyInlineMarkup, ReplyKeyboardMarkup,
// ReplyKeyboardHide, ReplyKeyboardForceReply
```

---

## Primitives

Generated types use standard Go primitives mapped from TL:

| TL Type | Go Type |
|---------|---------|
| `int` | `int32` |
| `long` | `int64` |
| `string` | `string` |
| `bytes` | `[]byte` |
| `double` | `float64` |
| `Bool` | `bool` |
| `true` | `bool` (flag) |
| `Vector<X>` | `[]X` |

---

## Enums and Flags

Telegram flags are represented as bit fields:

```go
type Flags struct {
    Bits uint32
}

func (f *Flags) Set(bit int, value bool)
func (f *Flags) Get(bit int) bool
```

Enum types are represented as integer constants:

```go
const (
    SendMessageTypeMessage  = 0
    SendMessageTypeForward  = 1
)
```

---

## Gzip Wrapping

Large payloads are automatically wrapped with gzip:

```go
type GzipBytes struct {
    Data []byte
}
```

The MTProto layer handles compression transparently. You rarely need to interact with `GzipBytes` directly.
