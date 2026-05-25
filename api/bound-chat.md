# Chat Methods

Chat methods are fluent wrappers injected by the Client into each `*Chat` it creates. They let you manage a chat directly — archive, set title, ban members, export invite links — without manually passing chat IDs.

```go
chat, _ := client.GetChat(ctx, chatID)
chat.SetTitle("New Title")
chat.Mute()
```

If a chat was not created by a client, calling any bound method returns `types.ErrNoChatBinder`.

---

## Folder Management

### Archive

Moves the chat to the archived chats folder.

```go
func (c *Chat) Archive() error
```

### Unarchive

Moves the chat back to the main chat list.

```go
func (c *Chat) Unarchive() error
```

---

## Chat Settings

### SetTitle

Changes the title of a group or channel. Requires appropriate admin permissions.

```go
func (c *Chat) SetTitle(title string) error
```

### SetDescription

Changes the description (about text) of a group or channel.

```go
func (c *Chat) SetDescription(description string) error
```

### SetPhoto

Changes the profile photo of a group or channel.

```go
func (c *Chat) SetPhoto(photo tg.InputChatPhotoClass) error
```

### DeletePhoto

Removes the profile photo, reverting to the default.

```go
func (c *Chat) DeletePhoto() error
```

### SetUsername

Changes the public username (without `@`).

```go
func (c *Chat) SetUsername(username string) error
```

---

## Member Management

### BanMember

Bans a user from the chat. The user cannot rejoin unless unbanned.

```go
func (c *Chat) BanMember(userID int64) error
```

### UnbanMember

Removes a prior ban, allowing the user to rejoin.

```go
func (c *Chat) UnbanMember(userID int64) error
```

### RestrictMember

Applies restrictions to a user, limiting what they can do.

```go
func (c *Chat) RestrictMember(userID int64, bannedRights *tg.ChatBannedRights) error
```

### PromoteMember

Grants admin privileges to a user.

```go
func (c *Chat) PromoteMember(userID int64, adminRights *tg.ChatAdminRights) error
```

### GetMember

Retrieves a single member by user ID.

```go
func (c *Chat) GetMember(userID int64) (*ChatMember, error)
```

### GetMembers

Retrieves a paginated list of members.

```go
func (c *Chat) GetMembers(limit int, offset int) ([]*ChatMember, error)
```

### AddMembers

Adds a user to the chat.

```go
func (c *Chat) AddMembers(userID int64) error
```

### SetAdminTitle

Sets a custom title for an administrator in a supergroup.

```go
func (c *Chat) SetAdminTitle(userID int64, title string) error
```

---

## Join & Leave

### Join

Joins a public chat or channel by username.

```go
func (c *Chat) Join(username string) (*Chat, error)
```

### Leave

Leaves the chat.

```go
func (c *Chat) Leave() error
```

---

## Invite Links

### ExportInviteLink

Generates a new primary invite link for the chat.

```go
func (c *Chat) ExportInviteLink() (string, error)
```

---

## Notifications

### Mute

Disables notifications for the chat.

```go
func (c *Chat) Mute() error
```

### Unmute

Re-enables notifications for the chat.

```go
func (c *Chat) Unmute() error
```

### MarkUnread

Toggles the unread marker on the chat.

```go
func (c *Chat) MarkUnread(unread bool) error
```

---

## Content & Permissions

### SetProtectedContent

Enables or disables content protection (no-forward restriction).

```go
func (c *Chat) SetProtectedContent(enabled bool) error
```

### SetTTL

Sets the auto-delete period for messages in seconds. Pass `0` to disable.

```go
func (c *Chat) SetTTL(ttl int) error
```

### SetPermissions

Sets default permissions for non-admin members.

```go
func (c *Chat) SetPermissions(permissions *tg.ChatBannedRights) error
```

### SetSlowMode

Enables slow mode with the given cooldown in seconds. Pass `0` to disable.

```go
func (c *Chat) SetSlowMode(seconds int) error
```

---

## Pinned Messages

### UnpinAll

Removes all pinned messages. Returns the count of unpinned messages.

```go
func (c *Chat) UnpinAll() (int, error)
```

### UnpinAllMessages

Alias for `UnpinAll`.

```go
func (c *Chat) UnpinAllMessages() (int, error)
```

---

## Info & Logs

### GetChat

Fetches the latest full chat information from the server.

```go
func (c *Chat) GetChat() (*Chat, error)
```

```go
updated, _ := chat.GetChat()
fmt.Printf("%s (%d members)\n", updated.Title, updated.MembersCount)
```

### GetEventLog

Retrieves recent admin log events matching a query.

```go
func (c *Chat) GetEventLog(query string, limit int) ([]*ChatEvent, error)
```

### DC

Returns the data center ID the chat is associated with.

```go
func (c *Chat) DC() int
```

---

## Display Helpers

### String

Returns a human-readable representation.

```go
func (c *Chat) String() string
```

### MentionName

Returns the chat's username with `@` prefix if available, or the title.

```go
func (c *Chat) MentionName() string
```

### FullName

Returns the full display name of the chat.

```go
func (c *Chat) FullName() string
```
