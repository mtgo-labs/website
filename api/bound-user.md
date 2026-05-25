# User Bound Methods

When a `*types.User` is returned by the client (e.g. from `client.GetMe()` or through handler context), it has bound convenience methods for user-level operations.

```go
user, _ := client.GetMe(ctx)
user.Archive()     // archive this user's chat
user.Block()       // block this user
```

All methods return `ErrNoUserBinder` if the User was not created by a client.

---

## Archive

Archive the chat with this user.

```go
func (u *User) Archive() error
```

**Example:**

```go
user, _ := client.GetMe(ctx)
// Archive a specific user's chat
err := user.Archive()
```

## Unarchive

Unarchive the chat with this user.

```go
func (u *User) Unarchive() error
```

## Block

Block this user.

```go
func (u *User) Block() error
```

**Example:**

```go
err := user.Block()
```

## Unblock

Unblock this user.

```go
func (u *User) Unblock() error
```

## GetCommonChats

Get chats that you share with this user.

```go
func (u *User) GetCommonChats(limit int) ([]*Chat, error)
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| limit | `int` | Maximum number of chats to return |

**Example:**

```go
chats, err := user.GetCommonChats(20)
for _, chat := range chats {
    fmt.Println(chat.Title)
}
```

## Display Helpers

These are not bound methods but are useful helpers on the `User` type:

### String

Returns the user's username, full name, or fallback `"user_<id>"`.

```go
func (u *User) String() string
```

### MentionName

Returns `"@username"` if set, otherwise falls back to `String()`.

```go
func (u *User) MentionName() string
```
