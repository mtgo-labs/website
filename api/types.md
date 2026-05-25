# Types Reference

This page documents all types from the `telegram/types` and `telegram/params` packages. These are the high-level, user-friendly wrappers around the raw `tg` generated types.

## Message & Media {#message}

### Message

The core message type representing a Telegram message.

```go
type Message struct {
    ID         int32
    ChatID     int64
    SenderID   int64
    Date       int32
    Text       string
    Media      *Media
    ReplyTo    *Message
    Forward    *ForwardHeader
    Entities   []MessageEntity
    ReplyMarkup *ReplyMarkup
    GroupedID  int64
    Views      int32
    Forwards   int32
    Reactions  *MessageReactions
    // ...
}
```

### Media

Union type for all media attachments on a message.

```go
type Media struct {
    Type     MessageMediaType
    // Type-specific fields...
}
```

### Photo {#photo}

```go
type Photo struct {
    ID       int64
    Sizes    []PhotoSize
    Date     int32
}
```

### PhotoSize

```go
type PhotoSize struct {
    Type     string
    Width    int32
    Height   int32
    Size     int32
}
```

### Animation

```go
type Animation struct {
    ID       string
    Width    int32
    Height   int32
    Duration int32
    MimeType string
    FileSize int64
    Thumb    *PhotoSize
    FileName string
}
```

### Audio

```go
type Audio struct {
    ID       string
    Duration int32
    Title    string
    Performer string
    MimeType string
    FileSize int64
    Thumb    *PhotoSize
    FileName string
}
```

### Video

```go
type Video struct {
    ID       string
    Width    int32
    Height   int32
    Duration int32
    MimeType string
    FileSize int64
    Thumb    *PhotoSize
    FileName string
}
```

### VideoNote

```go
type VideoNote struct {
    ID       string
    Length   int32
    Duration int32
    Thumb    *PhotoSize
    FileSize int64
}
```

### Voice

```go
type Voice struct {
    ID       string
    Duration int32
    MimeType string
    FileSize int64
}
```

### Sticker

```go
type Sticker struct {
    ID          string
    Width       int32
    Height      int32
    Emoji       string
   SetName     string
    IsAnimated  bool
    IsVideo     bool
    Type        StickerType
    Thumb       *PhotoSize
    MaskPosition *MaskPosition
    FileSize    int64
}
```

### DocumentMedia {#documentmedia}

```go
type DocumentMedia struct {
    ID       string
    MimeType string
    FileName string
    FileSize int64
    Thumb    *PhotoSize
}
```

### Contact

```go
type Contact struct {
    PhoneNumber string
    FirstName   string
    LastName    string
    UserID      int64
}
```

### Location {#location}

```go
type Location struct {
    Latitude  float64
    Longitude float64
}
```

### Venue

```go
type Venue struct {
    Location Location
    Title    string
    Address  string
    Provider string
    VenueID  string
    VenueType string
}
```

### ContactMedia {#contactmedia}

Wraps a `Contact` as a `Media` variant.

### LocationMedia {#locationmedia}

Wraps a `Location` as a `Media` variant.

### VenueMedia {#venuemedia}

Wraps a `Venue` as a `Media` variant.

### PhotoMedia {#photomedia}

Wraps a `Photo` as a `Media` variant.

### DiceMedia {#dicemedia}

```go
type DiceMedia struct {
    Emoji   string
    Value   int32
}
```

### GameMedia {#gamemedia}

```go
type GameMedia struct {
    ID          int64
    Title       string
    Description string
    Photo       []PhotoSize
}
```

### InvoiceMedia {#invoicemedia}

```go
type InvoiceMedia struct {
    Title          string
    Description    string
    StartParameter string
    Currency       string
    TotalAmount    int64
}
```

### GiveawayMedia {#giveawaymedia}

Represents a giveaway message media.

### GiveawayResultsMedia {#giveawayresultsmedia}

Represents giveaway results media.

### PollMedia {#pollmedia}

```go
type PollMedia struct {
    ID       int64
    Question string
    Options  []PollAnswer
    Closed   bool
    Type     PollType
}
```

### StoryMedia {#storymedia}

Represents a story forwarded as media.

### WebPageMedia {#webpagemedia}

```go
type WebPageMedia struct {
    ID          int64
    URL         string
    Title       string
    Description string
    Photo       *Photo
}
```

### PaidMedia {#paidmedia}

```go
type PaidMedia struct {
    StarsAmount int64
    ExtendedMedia []Media
}
```

### PaidMediaInfo {#paidmediainfo}

Contains information about paid media attached to a message.

### PurchasedPaidMedia {#purchasedpaidmedia}

Represents media that was purchased with Telegram Stars.

### Thumbnail

```go
type Thumbnail struct {
    Type     string
    Width    int32
    Height   int32
    Size     int32
}
```

---

## Chat & Members {#chat}

### Chat

```go
type Chat struct {
    ID           int64
    Type         ChatType
    Title        string
    Username     string
    FirstName    string
    LastName     string
    Photo        *ChatPhoto
    MembersCount int32
    Description  string
    // ...
}
```

### ChatPreview

Preview of a chat shown before joining.

### ChatType

Enum: `ChatTypePrivate`, `ChatTypePair`, `ChatTypeGroup`, `ChatTypeSupergroup`, `ChatTypeChannel`, `ChatTypeBroadcast`.

### ChatPhoto

```go
type ChatPhoto struct {
    SmallFileID string
    BigFileID   string
    DcID        int32
}
```

### ChatMember

```go
type ChatMember struct {
    UserID   int64
    Status   ChatMemberStatus
    CustomTitle string
    JoinedDate  int32
    // admin/restriction fields...
}
```

### ChatMemberStatus

Enum: `StatusCreator`, `StatusAdministrator`, `StatusMember`, `StatusRestricted`, `StatusLeft`, `StatusBanned`.

### ChatMemberUpdated

```go
type ChatMemberUpdated struct {
    Chat      *Chat
    From      *User
    Date      int32
    OldStatus ChatMemberStatus
    NewStatus ChatMemberStatus
}
```

### ChatMembersFilter

Enum for filtering members in `GetChatMembers`.

### ChatPermissions

```go
type ChatPermissions struct {
    CanSendMessages       bool
    CanSendMedia          bool
    CanSendPolls          bool
    CanSendStickers       bool
    CanSendGifs           bool
    CanChangeInfo         bool
    CanInviteUsers        bool
    CanPinMessages        bool
    CanManageTopics       bool
}
```

### ChatAdminRights

Maps to `tg.ChatAdminRights`. Defines admin capabilities.

### ChatBannedRights

Maps to `tg.ChatBannedRights`. Defines what a restricted user cannot do.

### ChatEvent

```go
type ChatEvent struct {
    ID     int64
    Date   int32
    UserID int64
    Action ChatEventAction
}
```

### ChatEventAction

Discriminated union of admin log event types.

### ChatEventFilter

Filter criteria for `GetChatEventLog`.

### ChatInviteLink

```go
type ChatInviteLink struct {
    Link       string
    CreatorID  int64
    Date       int32
    ExpireDate int32
    MemberLimit int32
    IsPrimary  bool
    IsRevoked  bool
}
```

### ChatInviteLinkJoiner

```go
type ChatInviteLinkJoiner struct {
    UserID    int64
    Date      int32
    ViaFolder bool
}
```

### ChatJoinRequest

```go
type ChatJoinRequest struct {
    Chat    *Chat
    From    *User
    Date    int32
    Bio     string
    InviteLink *ChatInviteLink
}
```

### ChatJoinType

Enum for join type classification.

### ChatBoostUpdated

Represents a boost applied or removed from a chat.

### ChatSettings

Settings associated with a chat.

### ChatShared

Data for a chat shared via keyboard button.

### ChatAction

Enum of chat actions (typing, uploading, recording, etc.).

### ChatBackground

Represents a chat background/wallpaper.

### Dialog

```go
type Dialog struct {
    ID       int64
    TopMessage int32
    UnreadCount int32
    Pinned   bool
}
```

### Folder

Represents a chat folder.

### FolderColor

Enum of folder color options.

### TopChatCategory

Enum for top chat category filters.

---

## User & Profile {#user}

### User

```go
type User struct {
    ID            int64
    FirstName     string
    LastName      string
    Username      string
    Phone         string
    Photo         *ChatPhoto
    Status        UserStatus
    IsBot         bool
    IsVerified    bool
    IsPremium     bool
    LanguageCode  string
}
```

### UserStatus

Enum: `StatusOnline`, `StatusOffline`, `StatusRecently`, `StatusLastWeek`, `StatusLastMonth`.

### UserStatusUpdated

```go
type UserStatusUpdated struct {
    UserID int64
    Status UserStatus
    Date   int32
}
```

### UsernameInfo

Holds username metadata including editable and active status.

### UsersShared

Data for users shared via keyboard button.

### ProfileColor

Represents a profile color/emoji status palette.

### ProfileTab

Represents a profile tab configuration.

### EmojiStatus

```go
type EmojiStatus struct {
    DocumentID int64
    Until      int32
}
```

### Birthday

```go
type Birthday struct {
    Day   int32
    Month int32
    Year  int32
}
```

### BusinessConnection

Represents a business bot connection.

### BusinessBotRights

Rights granted to a business bot.

### BusinessIntro

```go
type BusinessIntro struct {
    Title    string
    Message  string
    Sticker  *Sticker
}
```

### BusinessRecipients

Defines who can see business features.

### BusinessSchedule

Working hours schedule for a business.

### BusinessWeeklyOpen

Single open interval in a business schedule.

### BusinessWorkingHours

Full working hours configuration.

### ClientPlatform

Enum for platform identification.

### ActiveSession

Information about an active session.

### ActiveSessions

Collection of active sessions.

---

## Messages & Formatting {#messageentity}

### MessageEntity

```go
type MessageEntity struct {
    Type   MessageEntityType
    Offset int32
    Length int32
    URL    string
    Language string
    User   *User
    CustomEmojiID int64
}
```

### MessageEntityType

Enum: `EntityMention`, `EntityHashtag`, `EntityBotCommand`, `EntityURL`, `EntityEmail`, `EntityBold`, `EntityItalic`, `EntityCode`, `EntityPre`, `EntityTextLink`, `EntityTextMention`, `EntityCashtag`, `EntityPhoneNumber`, `EntityCustomEmoji`, `EntityBlockquote`, `EntityExpandableBlockquote`, `EntityStrikethrough`, `EntityUnderline`, `EntitySpoiler`.

### MessageOrigin

Discriminated origin of a message (user, channel, hidden, etc.).

### MessageOriginType

Enum for message origin discriminator.

### MessageMediaType

Enum: `MediaPhoto`, `MediaVideo`, `MediaDocument`, `MediaAudio`, `MediaVoice`, `MediaVideoNote`, `MediaSticker`, `MediaAnimation`, `MediaContact`, `MediaLocation`, `MediaVenue`, `MediaPoll`, `MediaDice`, `MediaGame`, `MediaInvoice`, `MediaGiveaway`, `MediaGiveawayResults`, `MediaStory`, `MediaWebPage`, `MediaPaid`.

### MessageServiceType

Enum for service message types.

### MessageReactions

```go
type MessageReactions struct {
    Reactions []ReactionCount
    Mine      bool
}
```

### MessageReactionUpdated

Fired when a reaction is added/removed.

### MessageReactionCountUpdated

Fired when reaction counts change.

### FormattedText

```go
type FormattedText struct {
    Text     string
    Entities []MessageEntity
}
```

### ParseMode

```go
type ParseMode string
```

Enum: `ParseModeDefault`, `ParseModeMarkdown`, `ParseModeHTML`, `ParseModeDisabled`. Shorthands: `Markdown`, `HTML`, `MarkdownV2`, `Disabled`.

### TextQuote

```go
type TextQuote struct {
    Text     string
    Entities []MessageEntity
    Offset   int32
}
```

### FactCheck

```go
type FactCheck struct {
    Country string
    Text    FormattedText
    Hash    int64
}
```

### LinkPreviewOptions

```go
type LinkPreviewOptions struct {
    Disabled          bool
    URL               string
    ShowAboveText     bool
    PreferSmallMedia  bool
    PreferLargeMedia  bool
}
```

### ForwardHeader

```go
type ForwardHeader struct {
    Date      int32
    FromID    int64
    ChannelID int64
    PostAuthor string
}
```

### ExternalReplyInfo

Contains info about a message replied to in another chat.

### ReplyParameters

```go
type ReplyParameters struct {
    MessageID    int32
    ChatID       int64
    Quote        string
    QuoteOffset  int32
}
```

### ReplyColor

Reply background color configuration.

### DeletedMessages

```go
type DeletedMessages struct {
    ChatID   int64
    Messages []int32
}
```

### MessagesFilter

Enum for search/getHistory message filters.

---

## Reactions & Polls {#reaction}

### Reaction

```go
type Reaction struct {
    Emoji string
    Count int32
}
```

### ReactionCount

```go
type ReactionCount struct {
    Reaction Reaction
    Count    int32
}
```

### BotReactionCount

Reaction count variant for bots.

### PaidReactionPrivacy

Controls visibility of paid reactions.

### PaidReactor

Information about a user who reacted with paid stars.

### PollType

Enum: `PollTypeRegular`, `PollTypeQuiz`.

### PollUpdate

Fired when a poll is updated.

### PollAnswer

```go
type PollAnswer struct {
    Text    string
    Voter   int64
    Chosen  bool
}
```

---

## Keyboards & Buttons {#replymarkup}

### ReplyMarkup

Discriminated union of keyboard types.

### ReplyMarkupType

Enum: `ReplyMarkupInline`, `ReplyMarkupKeyboard`, `ReplyMarkupHide`, `ReplyMarkupForce`.

### InlineKeyboardButton

```go
type InlineKeyboardButton struct {
    Text         string
    URL          string
    CallbackData string
    SwitchQuery  string
    // ...
}
```

### KeyboardButton

```go
type KeyboardButton struct {
    Text      string
    RequestID int64
    // ...
}
```

### Button

Higher-level button abstraction used in MTGo helpers.

### ButtonType

Enum for button discriminator.

### ButtonStyle

Visual style for buttons.

### ForceReply

Forces a reply from the user.

### ReplyKeyboardRemove

Removes the custom keyboard.

### LoginURL

```go
type LoginURL struct {
    URL         string
    ForwardText string
    BotUsername string
    RequestID   int32
}
```

### KeyboardButtonPollType

Specifies the type of poll to create.

### KeyboardButtonRequestChat

Requests a chat from the user via button.

### KeyboardButtonRequestUsers

Requests user(s) from the user via button.

---

## Inline & Callbacks {#callbackquery}

### CallbackQuery

```go
type CallbackQuery struct {
    ID         string
    From       *User
    Message    *Message
    ChatInstance string
    Data       string
    GameShortName string
}
```

### InlineQuery

```go
type InlineQuery struct {
    ID     int64
    From   *User
    Query  string
    Offset string
    ChatType ChatType
    Location *Location
}
```

### InlineQueryResult

Result item for inline query responses.

### ChosenInlineResult

```go
type ChosenInlineResult struct {
    ID       int64
    From     *User
    Query    string
    ResultID string
    Location *Location
}
```

### InputMessageContent

Content to send as the result of an inline selection.

### InputContentType

Enum for input content discriminator.

### SentWebAppMessage

```go
type SentWebAppMessage struct {
    InlineMessageID string
}
```

### WebAppData

```go
type WebAppData struct {
    Data       string
    ButtonText string
}
```

### WebAppInfo

```go
type WebAppInfo struct {
    URL string
}
```

---

## Payments & Shipping {#payment}

### Payment

Represents payment-related data.

### PaymentFormType

Enum for payment form types.

### PaymentQueries

Collection of payment-related query types.

### Invoice

```go
type Invoice struct {
    Title          string
    Description    string
    StartParameter string
    Currency       string
    TotalAmount    int64
}
```

### InvoiceType

Enum for invoice type discriminator.

### LabeledPrice

```go
type LabeledPrice struct {
    Label  string
    Amount int64
}
```

### ShippingAddress

```go
type ShippingAddress struct {
    CountryCode string
    State       string
    City        string
    StreetLine1 string
    StreetLine2 string
    PostCode    string
}
```

### ShippingOption

```go
type ShippingOption struct {
    ID     string
    Title  string
    Prices []LabeledPrice
}
```

### ShippingQuery

```go
type ShippingQuery struct {
    ID             string
    From           *User
    InvoicePayload []byte
    ShippingAddress ShippingAddress
}
```

### OrderInfo

```go
type OrderInfo struct {
    Name            string
    PhoneNumber     string
    Email           string
    ShippingAddress *ShippingAddress
}
```

### PreCheckoutQuery

```go
type PreCheckoutQuery struct {
    ID               string
    From             *User
    Currency         string
    TotalAmount      int64
    InvoicePayload   []byte
    ShippingOptionID string
    OrderInfo        *OrderInfo
}
```

### SuccessfulPayment

```go
type SuccessfulPayment struct {
    Currency          string
    TotalAmount       int64
    InvoicePayload    []byte
    ShippingOptionID  string
    OrderInfo         *OrderInfo
    TelegramPaymentChargeID string
    ProviderPaymentChargeID string
}
```

### InputCredentials

Payment credentials input.

### InputInvoice

Invoice input for payment flows.

### CredentialsType

Enum for credential discriminator.

---

## Stories {#story}

### Story

```go
type Story struct {
    ID       int32
    From     *User
    Date     int32
    Caption  string
    Media    *Media
    Views    int32
    Pinned   bool
    Privacy  StoriesPrivacyRules
}
```

### StoryView

```go
type StoryView struct {
    UserID     int64
    Date       int32
    Reaction   string
    IsForward  bool
}
```

### StoriesPrivacyRules

Privacy configuration for who can see stories.

---

## Gifts & Giveaways {#gifttype}

### GiftType

Discriminated gift type (standard, upgraded, etc.).

### GiftAttributeType

Enum for gift attribute discriminator.

### GiftUpgradePreview

Preview info for a gift upgrade.

### GiftUpgradePrice

Price of upgrading a gift.

### GiftedPremium

Info about gifted premium subscription.

### GiftedStars

Info about gifted Telegram Stars.

### GiftAuction

Auction state for a gift.

### GiftCollection

A collection of gifts.

### GiftForResaleOrder

Order for gifting a resellable gift.

### GiftPurchaseLimit

Purchase limit info for gifts.

### GiftPurchaseOfferState

State of a gift purchase offer.

### UpgradedGiftAttribute

Attribute of an upgraded gift.

### UpgradedGiftOrigin

Origin info for an upgraded gift.

### UpgradedGiftOriginalDetails

Original details of an upgraded gift.

### UpgradedGiftPurchaseOffer

Purchase offer for an upgraded gift.

### UpgradedGiftValueInfo

Value information for an upgraded gift.

### CheckedGiftCode

Result of checking a gift code.

### PremiumGiftCode

Premium gift code details.

### Giveaway

```go
type Giveaway struct {
    ChatID       int64
    Quantity     int32
    Months       int32
    Prize        string
    Winners      []int64
    UntilDate    int32
}
```

### GiveawayWinners

Winners of a giveaway.

### BoostInfo

Boost status for a chat.

### BoostsStatus

Full boosts status for a chat.

### MyBoost

A single boost applied by the current user.

---

## Privacy & Security {#privacykey}

### PrivacyKey

Enum: `PrivacyStatus`, `PrivacyProfilePhoto`, `PrivacyPhone`, `PrivacyChatInvite`, `PrivacyForwards`, `PrivacyVoiceMessages`, `PrivacyAddedByPhone`, `PrivacyBirthday`.

### PrivacyRule

A single privacy rule entry.

### PrivacyRuleType

Enum for rule discriminator (allow users, allow contacts, deny all, etc.).

### InputPrivacyRule

Input variant for setting privacy rules.

### InputPrivacyRuleType

Enum for input rule discriminator.

### GlobalPrivacySettings

```go
type GlobalPrivacySettings struct {
    ArchiveAndMuteNonContacts bool
    KeepArchivedUnmuted       bool
    KeepArchivedFolders       bool
    HideReadMarks             bool
}
```

### BlockList

Represents the blocked users list.

---

## Auth & Sessions {#sentcodeinfo}

### SentCodeInfo

```go
type SentCodeInfo struct {
    Type      SentCodeType
    PhoneCodeHash string
    NextType  *NextCodeType
    Timeout   int32
}
```

### SentCodeType

Enum: `SentCodeTypeApp`, `SentCodeTypeSms`, `SentCodeTypeCall`, `SentCodeTypeFlashCall`, `SentCodeTypeMissedCall`, `SentCodeTypeFragmentSms`, `SentCodeTypeEmailCode`, `SentCodeTypeSetUpEmailRequired`.

### NextCodeType

Enum for the next available code delivery method.

### TermsOfService

Terms of service shown during sign-up.

### PhoneNumberCodeType

Enum for phone number code types.

---

## Input Types & Helpers {#inputmedia}

### InputMedia

Helper for constructing media input objects.

### InputMediaType

Enum for input media discriminator.

### InputChatPhoto

Helper for setting chat photos.

### InputPhoto

Helper for referencing existing photos.

### InputPollOption

```go
type InputPollOption struct {
    Text string
}
```

### InputPhoneContact

```go
type InputPhoneContact struct {
    FirstName string
    LastName  string
    Phone     string
}
```

### MaskPosition

```go
type MaskPosition struct {
    Point  MaskPointType
    XShift float64
    YShift float64
    Scale  float64
}
```

### MaskPointType

Enum: `MaskForehead`, `MaskEyes`, `MaskMouth`, `MaskChin`.

### StickerType

Enum: `StickerTypeRegular`, `StickerTypeMask`, `StickerTypeCustomEmoji`.

### MediaArea

Represents a media area (used in story reactions and similar).

### MediaAreaType

Enum for media area discriminator.

### PeerInfo

Resolved peer information.

### PeerMap

Map of peers resolved from updates.

---

## Bot & Commands {#botcommand}

### BotCommand

```go
type BotCommand struct {
    Command     string
    Description string
}
```

### BotCommandScope

Scope for bot command registration.

### BotCommandScopeType

Enum: `ScopeDefault`, `ScopeAllPrivateChats`, `ScopeAllGroupChats`, `ScopeAllChatAdministrators`, `ScopeChat`, `ScopeChatAdministrators`, `ScopeChatMember`.

### MenuButton

Represents a bot menu button.

### MenuButtonType

Enum for menu button discriminator.

### ManagedBotUpdated

Fired when a managed bot's settings change.

---

## Service & System {#servicemessage}

### ServiceMessage

Represents a service message.

### ServiceActionType

Enum for all service action types.

### PhoneCallDiscardReason

Enum: `DiscardMissed`, `DiscardBusy`, `DiscardDisconnect`, `DiscardHangup`.

### PhoneCallEnded

Data for an ended phone call event.

### PhoneCallStarted

Data for a started phone call event.

### ProximityAlertTriggered

Fired when a proximity alert is triggered.

### VideoChatStarted

Fired when a video chat starts.

### VideoChatEnded {#videochatoended}

Fired when a video chat ends.

### VideoChatScheduled

Fired when a video chat is scheduled.

### VideoChatMembersInvited

Fired when members are invited to a video chat.

### GroupCallMember

Represents a group call participant.

### WriteAccessAllowed

Fired when write access is granted to a bot.

### GameHighScore

```go
type GameHighScore struct {
    Position int32
    UserID   int64
    Score    int32
}
```

### AvailableEffect

Represents an available message effect.

### ChatColor

Represents chat-level color settings.

### Restriction

Represents a platform restriction on a chat/user.

### Settings

Account-level settings.

### TranslatorFunc

Function type for custom message translation.

---

## Forum & Topics {#forumtopic}

### ForumTopic

```go
type ForumTopic struct {
    ID            int32
    Title         string
    IconColor     int32
    IconEmojiID   int64
    CreatorID     int64
    IsClosed      bool
    IsGeneral     bool
}
```

### ForumTopicCreated

Data for a forum topic creation event.

### ForumTopicEdited

Data for a forum topic edit event.

---

## Checklists & Suggested Posts {#checklist}

### Checklist

Represents a checklist message.

### ChecklistTask

Single task within a checklist.

### SuggestedPostParameters

Parameters for a suggested post.

### SuggestedPostPrice

Pricing for a suggested post.

### SuggestedPostState

State of a suggested post.

### SuggestedPostRefundReason

Reason for refunding a suggested post.

---

## Params {#params}

Parameter structs from the `telegram/params` package used to configure API calls.

### SendMessage {#sendmessage-params}

```go
type SendMessage struct {
    DisableWebPagePreview bool
    DisableNotification   bool
    Silent                bool
    Background            bool
    ClearDraft            bool
    NoForwards            bool
    InvertMedia           bool
    ReplyToMessageID      int32
    ReplyTo               tl.InputReplyToClass
    ReplyMarkup           tl.ReplyMarkupClass
    Entities              []tl.MessageEntityClass
    ParseMode             ParseMode
    ScheduleDate          *int32
    EffectID              *int64
    SendAs                tl.InputPeerClass
    RepeatPeriod          *int32
    BusinessConnectionID  string
    AllowPaidBroadcast    bool
    PaidMessageStarCount  *int64
    ShowCaptionAboveMedia bool
    MessageThreadID       int32
    DirectMessagesTopicID int64
    ProtectContent        bool
}
```

### EditMessage {#editmessage-params}

```go
type EditMessage struct {
    DisableWebPagePreview bool
    InvertMedia           bool
    ReplyMarkup           tl.ReplyMarkupClass
    ParseMode             ParseMode
    Entities              []tl.MessageEntityClass
    ScheduleDate          *int32
    ShowCaptionAboveMedia bool
    BusinessConnectionID  string
}
```

### CopyMessage {#copymessage-params}

```go
type CopyMessage struct {
    Caption               string
    ParseMode             ParseMode
    CaptionEntities       []tl.MessageEntityClass
    DisableNotification   bool
    ReplyToMessageID      int32
    ReplyMarkup           tl.ReplyMarkupClass
    ScheduleDate          *int32
    DropAuthor            bool
    HasSpoiler            bool
    ShowCaptionAboveMedia bool
    BusinessConnectionID  string
    AllowPaidBroadcast    bool
    PaidMessageStarCount  *int64
    MessageThreadID       int32
    ProtectContent        bool
    NoForwards            bool
}
```

### ForwardMessages {#forwardmessages-params}

```go
type ForwardMessages struct {
    DisableNotification  bool
    NoForwards           bool
    DropAuthor           bool
    DropMediaCaptions    bool
    ScheduleDate         *int32
    RepeatPeriod         *int32
    HideSenderName       bool
    HideCaptions         bool
    AllowPaidBroadcast   bool
    PaidMessageStarCount *int64
    MessageThreadID      int32
    ProtectContent       bool
}
```

### DeleteMessages {#deletemessages-params}

```go
type DeleteMessages struct {
    Revoke bool
}
```

### PinMessage {#pinmessage-params}

```go
type PinMessage struct {
    Silent bool
    Unpin  bool
}
```

### Download {#download-params}

```go
type Download struct {
    FileName  string
    ChunkSize int32
    Progress  ProgressFunc
    DCID      int32
}
```

### InlineQuery {#inlinequery-params}

```go
type InlineQuery struct {
    CacheTime    int
    Gallery      bool
    Private      bool
    NextOffset   string
    SwitchPM     string
    SwitchPMText string
}
```

### ParseMode {#parsemode-params}

```go
type ParseMode string
```

Enum: `ParseModeDefault`, `ParseModeMarkdown`, `ParseModeHTML`, `ParseModeDisabled`. Shorthands: `Markdown`, `HTML`, `MarkdownV2`, `Disabled`.

### ProgressFunc

```go
type ProgressFunc func(info ProgressInfo)
```

Callback for upload/download progress.

### ProgressInfo

```go
type ProgressInfo struct {
    FileName       string
    TotalBytes     int64
    UploadedBytes  int64
    DownloadedBytes int64
    IsUpload       bool
}

func (p ProgressInfo) Progress() float64
```

### SendPoll {#sendpoll-params}

```go
type SendPoll struct {
    DisableNotification   bool
    Silent                bool
    Background            bool
    ClearDraft            bool
    NoForwards            bool
    ProtectContent        bool
    ReplyToMessageID      int32
    ReplyTo               tl.InputReplyToClass
    ReplyMarkup           tl.ReplyMarkupClass
    ScheduleDate          *int32
    EffectID              *int64
    SendAs                tl.InputPeerClass
    PublicVoters          bool
    MultipleChoice        bool
    Quiz                  bool
    Closed                bool
    ShuffleAnswers        bool
    RevotingDisabled      bool
    HideResultsUntilClose bool
    SubscribersOnly       bool
    OpenAnswers           bool
    AllowAddingOptions    bool
    ClosePeriod           *int32
    CloseDate             *int32
    CorrectAnswers        [][]byte
    Solution              *string
    SolutionEntities      []tl.MessageEntityClass
    Description           string
    DescriptionMedia      tl.InputMediaClass
    BusinessConnectionID  string
    AllowPaidBroadcast    bool
    PaidMessageStarCount  *int64
    MessageThreadID       int32
    RepeatPeriod          *int32
}
```

### SendVenue {#sendvenue-params}

```go
type SendVenue struct {
    DisableNotification  bool
    Silent               bool
    Background           bool
    ClearDraft           bool
    NoForwards           bool
    ProtectContent       bool
    ReplyToMessageID     int32
    ReplyTo              tl.InputReplyToClass
    ReplyMarkup          tl.ReplyMarkupClass
    ScheduleDate         *int32
    EffectID             *int64
    SendAs               tl.InputPeerClass
    Provider             string
    VenueID              string
    VenueType            string
    FoursquareID         string
    FoursquareType       string
    BusinessConnectionID string
    AllowPaidBroadcast   bool
    PaidMessageStarCount *int64
    MessageThreadID      int32
}
```

### SendContact {#sendcontact-params}

```go
type SendContact struct {
    DisableNotification  bool
    Silent               bool
    Background           bool
    ClearDraft           bool
    NoForwards           bool
    ProtectContent       bool
    ReplyToMessageID     int32
    ReplyTo              tl.InputReplyToClass
    ReplyMarkup          tl.ReplyMarkupClass
    ScheduleDate         *int32
    EffectID             *int64
    SendAs               tl.InputPeerClass
    Vcard                string
    BusinessConnectionID string
    AllowPaidBroadcast   bool
    PaidMessageStarCount *int64
    MessageThreadID      int32
}
```

### SendLocation {#sendlocation-params}

```go
type SendLocation struct {
    DisableNotification  bool
    Silent               bool
    Background           bool
    ClearDraft           bool
    NoForwards           bool
    ProtectContent       bool
    ReplyToMessageID     int32
    ReplyTo              tl.InputReplyToClass
    ReplyMarkup          tl.ReplyMarkupClass
    ScheduleDate         *int32
    EffectID             *int64
    SendAs               tl.InputPeerClass
    AccuracyRadius       *int32
    Heading              *int32
    ProximityAlertRadius *int32
    LivePeriod           *int32
    BusinessConnectionID string
    AllowPaidBroadcast   bool
    PaidMessageStarCount *int64
    MessageThreadID      int32
}
```

### SendDice {#senddice-params}

```go
type SendDice struct {
    DisableNotification  bool
    Silent               bool
    Background           bool
    ClearDraft           bool
    NoForwards           bool
    ProtectContent       bool
    ReplyToMessageID     int32
    ReplyTo              tl.InputReplyToClass
    ReplyMarkup          tl.ReplyMarkupClass
    ScheduleDate         *int32
    EffectID             *int64
    SendAs               tl.InputPeerClass
    Emoticon             string
    BusinessConnectionID string
    AllowPaidBroadcast   bool
    PaidMessageStarCount *int64
    MessageThreadID      int32
}
```

### SendGame {#sendgame-params}

```go
type SendGame struct {
    DisableNotification  bool
    Silent               bool
    Background           bool
    ClearDraft           bool
    NoForwards           bool
    ProtectContent       bool
    ReplyToMessageID     int32
    ReplyTo              tl.InputReplyToClass
    ReplyMarkup          tl.ReplyMarkupClass
    ScheduleDate         *int32
    EffectID             *int64
    SendAs               tl.InputPeerClass
    BusinessConnectionID string
    AllowPaidBroadcast   bool
    PaidMessageStarCount *int64
    MessageThreadID      int32
}
```

### SendMediaGroup {#sendmediagroup-params}

```go
type SendMediaGroup struct {
    DisableNotification   bool
    Silent                bool
    Background            bool
    ClearDraft            bool
    NoForwards            bool
    ProtectContent        bool
    ReplyToMessageID      int32
    ReplyTo               tl.InputReplyToClass
    ScheduleDate          *int32
    EffectID              *int64
    SendAs                tl.InputPeerClass
    ShowCaptionAboveMedia bool
    BusinessConnectionID  string
    AllowPaidBroadcast    bool
    PaidMessageStarCount  *int64
    MessageThreadID       int32
}
```

### SendChecklist {#sendchecklist-params}

```go
type SendChecklist struct {
    DisableNotification  bool
    Silent               bool
    Background           bool
    ClearDraft           bool
    NoForwards           bool
    ProtectContent       bool
    ReplyToMessageID     int32
    ReplyTo              tl.InputReplyToClass
    ReplyMarkup          tl.ReplyMarkupClass
    ScheduleDate         *int32
    EffectID             *int64
    SendAs               tl.InputPeerClass
    OthersCanAppend      bool
    OthersCanComplete    bool
    RepeatPeriod         *int32
    PaidMessageStars     *int64
    BusinessConnectionID string
    MessageThreadID      int32
}
```

### SendInlineBotResult {#sendinlinebotresult-params}

```go
type SendInlineBotResult struct {
    DisableNotification  bool
    Silent               bool
    Background           bool
    ClearDraft           bool
    NoForwards           bool
    ProtectContent       bool
    ReplyToMessageID     int32
    ReplyTo              tl.InputReplyToClass
    ReplyMarkup          tl.ReplyMarkupClass
    ScheduleDate         *int32
    EffectID             *int64
    SendAs               tl.InputPeerClass
    HideVia              bool
    AllowPaidStars       *int64
    BusinessConnectionID string
    AllowPaidBroadcast   bool
    PaidMessageStarCount *int64
    MessageThreadID      int32
}
```

### SendAudio {#sendaudio-params}

```go
type SendAudio struct {
    DisableNotification   bool
    Silent                bool
    Background            bool
    ClearDraft            bool
    NoForwards            bool
    ProtectContent        bool
    ReplyToMessageID      int32
    ReplyTo               tl.InputReplyToClass
    ReplyMarkup           tl.ReplyMarkupClass
    ScheduleDate          *int32
    EffectID              *int64
    SendAs                tl.InputPeerClass
    Duration              int32
    Performer             string
    Title                 string
    FileName              string
    Thumb                 string
    ParseMode             ParseMode
    CaptionEntities       []tl.MessageEntityClass
    ShowCaptionAboveMedia bool
    BusinessConnectionID  string
    AllowPaidBroadcast    bool
    PaidMessageStarCount  *int64
    MessageThreadID       int32
    RepeatPeriod          *int32
}
```

### SendVideo {#sendvideo-params}

```go
type SendVideo struct {
    DisableNotification   bool
    Silent                bool
    Background            bool
    ClearDraft            bool
    NoForwards            bool
    ProtectContent        bool
    ReplyToMessageID      int32
    ReplyTo               tl.InputReplyToClass
    ReplyMarkup           tl.ReplyMarkupClass
    ScheduleDate          *int32
    EffectID              *int64
    SendAs                tl.InputPeerClass
    Duration              float64
    Width                 int32
    Height                int32
    SupportsStreaming     bool
    FileName              string
    Thumb                 string
    ParseMode             ParseMode
    CaptionEntities       []tl.MessageEntityClass
    HasSpoiler            bool
    TTLSeconds            *int32
    ViewOnce              bool
    ShowCaptionAboveMedia bool
    BusinessConnectionID  string
    AllowPaidBroadcast    bool
    PaidMessageStarCount  *int64
    MessageThreadID       int32
    RepeatPeriod          *int32
    NoSound               bool
    VideoStartTimestamp   *int32
    VideoCover            tl.InputDocumentClass
}
```

### SendDocument {#senddocument-params}

```go
type SendDocument struct {
    DisableNotification   bool
    Silent                bool
    Background            bool
    ClearDraft            bool
    NoForwards            bool
    ProtectContent        bool
    ReplyToMessageID      int32
    ReplyTo               tl.InputReplyToClass
    ReplyMarkup           tl.ReplyMarkupClass
    ScheduleDate          *int32
    EffectID              *int64
    SendAs                tl.InputPeerClass
    FileName              string
    Thumb                 string
    MimeType              string
    ForceDocument         bool
    ParseMode             ParseMode
    CaptionEntities       []tl.MessageEntityClass
    ShowCaptionAboveMedia bool
    BusinessConnectionID  string
    AllowPaidBroadcast    bool
    PaidMessageStarCount  *int64
    MessageThreadID       int32
    RepeatPeriod          *int32
}
```

### SendPhoto {#sendphoto-params}

```go
type SendPhoto struct {
    DisableNotification   bool
    Silent                bool
    Background            bool
    ClearDraft            bool
    NoForwards            bool
    ProtectContent        bool
    ReplyToMessageID      int32
    ReplyTo               tl.InputReplyToClass
    ReplyMarkup           tl.ReplyMarkupClass
    ScheduleDate          *int32
    EffectID              *int64
    SendAs                tl.InputPeerClass
    FileName              string
    ParseMode             ParseMode
    CaptionEntities       []tl.MessageEntityClass
    HasSpoiler            bool
    TTLSeconds            *int32
    ViewOnce              bool
    ShowCaptionAboveMedia bool
    BusinessConnectionID  string
    AllowPaidBroadcast    bool
    PaidMessageStarCount  *int64
    MessageThreadID       int32
    RepeatPeriod          *int32
}
```

### SendAnimation {#sendanimation-params}

```go
type SendAnimation struct {
    DisableNotification   bool
    Silent                bool
    Background            bool
    ClearDraft            bool
    NoForwards            bool
    ProtectContent        bool
    ReplyToMessageID      int32
    ReplyTo               tl.InputReplyToClass
    ReplyMarkup           tl.ReplyMarkupClass
    ScheduleDate          *int32
    EffectID              *int64
    SendAs                tl.InputPeerClass
    FileName              string
    Thumb                 string
    ParseMode             ParseMode
    CaptionEntities       []tl.MessageEntityClass
    HasSpoiler            bool
    Duration              float64
    Width                 int32
    Height                int32
    Unsave                bool
    ShowCaptionAboveMedia bool
    BusinessConnectionID  string
    AllowPaidBroadcast    bool
    PaidMessageStarCount  *int64
    MessageThreadID       int32
    RepeatPeriod          *int32
}
```

### SendVoice {#sendvoice-params}

```go
type SendVoice struct {
    DisableNotification   bool
    Silent                bool
    Background            bool
    ClearDraft            bool
    NoForwards            bool
    ProtectContent        bool
    ReplyToMessageID      int32
    ReplyTo               tl.InputReplyToClass
    ReplyMarkup           tl.ReplyMarkupClass
    ScheduleDate          *int32
    EffectID              *int64
    SendAs                tl.InputPeerClass
    Duration              int32
    FileName              string
    ParseMode             ParseMode
    CaptionEntities       []tl.MessageEntityClass
    ViewOnce              bool
    ShowCaptionAboveMedia bool
    BusinessConnectionID  string
    AllowPaidBroadcast    bool
    PaidMessageStarCount  *int64
    MessageThreadID       int32
    RepeatPeriod          *int32
}
```

### SendVideoNote {#sendvideonote-params}

```go
type SendVideoNote struct {
    DisableNotification  bool
    Silent               bool
    Background           bool
    ClearDraft           bool
    NoForwards           bool
    ProtectContent       bool
    ReplyToMessageID     int32
    ReplyTo              tl.InputReplyToClass
    ReplyMarkup          tl.ReplyMarkupClass
    ScheduleDate         *int32
    EffectID             *int64
    SendAs               tl.InputPeerClass
    Duration             float64
    FileName             string
    Thumb                string
    Length               int32
    ViewOnce             bool
    BusinessConnectionID string
    AllowPaidBroadcast   bool
    PaidMessageStarCount *int64
    MessageThreadID      int32
    RepeatPeriod         *int32
}
```

### SendSticker {#sendsticker-params}

```go
type SendSticker struct {
    DisableNotification  bool
    Silent               bool
    Background           bool
    ClearDraft           bool
    NoForwards           bool
    ProtectContent       bool
    ReplyToMessageID     int32
    ReplyTo              tl.InputReplyToClass
    ReplyMarkup          tl.ReplyMarkupClass
    ScheduleDate         *int32
    EffectID             *int64
    SendAs               tl.InputPeerClass
    FileName             string
    Emoji                string
    ParseMode            ParseMode
    CaptionEntities      []tl.MessageEntityClass
    BusinessConnectionID string
    AllowPaidBroadcast   bool
    PaidMessageStarCount *int64
    MessageThreadID      int32
    RepeatPeriod         *int32
}
```

### AnswerCallback {#answercallback-params}

```go
type AnswerCallback struct {
    Text      string
    ShowAlert bool
    URL       string
    CacheTime int32
}
```

### AnswerShipping {#answershipping-params}

```go
type AnswerShipping struct {
    Ok              bool
    ShippingOptions interface{}
    ErrorMsg        string
}
```

### AnswerPreCheckout {#answerprecheckout-params}

```go
type AnswerPreCheckout struct {
    Ok       bool
    ErrorMsg string
}
```

### EditCaption {#editcaption-params}

```go
type EditCaption struct {
    Caption               string
    ParseMode             ParseMode
    CaptionEntities       []tl.MessageEntityClass
    ReplyMarkup           tl.ReplyMarkupClass
    ShowCaptionAboveMedia bool
    BusinessConnectionID  string
    ScheduleDate          *int32
}
```

### StoryForward {#storyforward-params}

```go
type StoryForward struct {
    DisableNotification  bool
    MessageThreadID      int32
    ScheduleDate         *int32
    RepeatPeriod         *int32
    PaidMessageStarCount *int64
    ProtectContent       bool
    AllowPaidBroadcast   bool
    ReplyParameters      interface{}
    ReplyMarkup          tl.ReplyMarkupClass
    MessageEffectID      *int64
}
```

### StoryCopy {#storycopy-params}

```go
type StoryCopy struct {
    Caption         string
    ParseMode       ParseMode
    CaptionEntities []tl.MessageEntityClass
    Period          *int32
    MediaAreas      interface{}
    Privacy         string
    AllowedUsers    []int64
    DisallowedUsers []int64
    ProtectContent  bool
}
```

### EditPrivacy {#editprivacy-params}

```go
type EditPrivacy struct {
    Privacy         string
    AllowedUsers    []int64
    DisallowedUsers []int64
}
```

### React {#react-params}

```go
type React struct {
    Emoji string
    Big   bool
}
```

### GiftSend {#giftsend-params}

```go
type GiftSend struct {
    Text          string
    ParseMode     ParseMode
    Entities      []tl.MessageEntityClass
    IsPrivate     bool
    PayForUpgrade bool
}
```

### BuyGift {#buygift-params}

```go
type BuyGift struct {
    Ton bool
}
```

### GiftPurchaseOffer {#giftpurchaseoffer-params}

```go
type GiftPurchaseOffer struct {
    Price                int64
    Duration             int32
    PaidMessageStarCount *int64
}
```

### GetGifts {#getgifts-params}

```go
type GetGifts struct {
    ExcludeUnsaved      bool
    ExcludeSaved        bool
    ExcludeUnlimited    bool
    ExcludeUnique       bool
    SortByValue         bool
    ExcludeUpgradable   bool
    ExcludeUnupgradable bool
    PeerColorAvailable  bool
    ExcludeHosted       bool
    CollectionID        int32
    Offset              string
    Limit               int32
}
```

### SendReactionOption {#sendreactionoption-params}

```go
type SendReactionOption struct {
    Big         bool
    AddToRecent bool
}
```

### SendPaidReactionOption {#sendpaidreactionoption-params}

```go
type SendPaidReactionOption struct {
    Private bool
}
```

### GetStarsTransactionsOption {#getstarstransactionsoption-params}

```go
type GetStarsTransactionsOption struct {
    Ascending      bool
    SubscriptionID string
    Ton            bool
}
```

---

## Keyboard & Entity Helpers {#helpers}

Functions from the `telegram/params` package for building keyboards, reply references, peers, and message entities.

### Keyboard Builders

| Function | Signature | Description |
|----------|-----------|-------------|
| `InlineKeyboard` | `(rows ...[]KeyboardButton) tl.ReplyMarkupClass` | Build an inline keyboard from rows of buttons. |
| `ReplyKeyboard` | `(rows ...[]KeyboardButton) tl.ReplyMarkupClass` | Build a custom reply keyboard. |
| `RemoveKeyboard` | `() tl.ReplyMarkupClass` | Remove the current custom keyboard. |
| `ForceReplyKeyboard` | `() tl.ReplyMarkupClass` | Force the user to reply. |

### KeyboardButton

```go
type KeyboardButton struct {
    Text   string
    URL    string
    Data   []byte
    Switch string
    Game   bool
    Pay    bool
}
```

Button constructors:

| Function | Description |
|----------|-------------|
| `Button(text)` | Simple text button. |
| `ButtonURL(text, url)` | Button that opens a URL. |
| `ButtonCB(text, data)` | Callback data button. |
| `ButtonSwitch(text, query)` | Inline switch button. |
| `ButtonGame(text)` | Game launch button. |
| `ButtonPay(text)` | Payment button. |

### Reply References

| Function | Signature | Description |
|----------|-----------|-------------|
| `ReplyToMsg` | `(msgID int32) tl.InputReplyToClass` | Reply to a message by ID. |
| `ReplyToMsgQuote` | `(msgID int32, quote string, offset int32) tl.InputReplyToClass` | Reply with a quote. |
| `ReplyToStory` | `(storyID int32) tl.InputReplyToClass` | Reply to a story. |

### Peer Constructors

| Function | Signature | Description |
|----------|-----------|-------------|
| `PeerUser` | `(id int64) tl.InputPeerClass` | Create a user peer. |
| `PeerChat` | `(id int64) tl.InputPeerClass` | Create a chat peer. |
| `PeerChannel` | `(id int64) tl.InputPeerClass` | Create a channel peer. |
| `PeerFromID` | `(id int64) tl.InputPeerClass` | Auto-detect peer type from a bare ID. |

### Entity Helpers

```go
type EntityType int
type Entity struct { Type EntityType; Offset, Length int32; URL, Language string; CustomEmojiID int64 }
```

Entity constructors:

| Function | Description |
|----------|-------------|
| `Bold(offset, length)` | Bold entity. |
| `Italic(offset, length)` | Italic entity. |
| `Code(offset, length)` | Monospace code entity. |
| `Pre(offset, length, lang)` | Pre-formatted code block. |
| `Underline(offset, length)` | Underlined text. |
| `Strikethrough(offset, length)` | Strikethrough text. |
| `Spoiler(offset, length)` | Spoiler text. |
| `Blockquote(offset, length)` | Block quote. |
| `CustomEmoji(offset, length, docID)` | Custom emoji entity. |
| `Mention(offset, length)` | Mention entity. |
| `Entities(entities ...Entity)` | Collect entities into a slice. |

### Generic Helper

```go
func GetOptDef[T comparable](def T, opts ...T) T
```

Returns the first valid option from `opts`, or `def` when empty. Used internally by the functional-options pattern.

---

## Binder Interfaces {#binder}

### Binder

Interface injected into `Message` objects enabling fluent method calls. See [Bound Methods (Message)](/api/bound).

```go
type Binder interface {
    BoundSend(chatID int64, text string, replyTo int32, opts ...*params.SendMessage) (*Message, error)
    BoundSendMedia(chatID int64, media tl.InputMediaClass, caption string, replyTo int32, opts ...*params.SendMessage) (*Message, error)
    // ... see full interface in types/binder.go
}
```

### ChatBinder

Interface injected into `Chat` objects enabling fluent method calls. See [Bound Methods (Chat)](/api/bound-chat).

```go
type ChatBinder interface {
    BoundArchive(chatID int64) error
    BoundSetTitle(chatID int64, title string) error
    // ... see full interface in types/binder.go
}
```
