# User Methods

User methods provide access to user information, profile management, contacts, and blocking. These methods operate on the `*Client` instance and require a `context.Context`.

```go
client, _ := telegram.NewClient(cfg)
user, err := client.GetMe(ctx)
```

## GetMe

Retrieves the currently authenticated user's full information. The result is cached on the client.

```go
func (c *Client) GetMe(ctx context.Context) (*types.User, error)
```

**Returns:** The authenticated `*types.User`, or an error if not connected.

::: code-group

```go [Example]
me, err := client.GetMe(ctx)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Logged in as: %s (ID: %d)\n", me.FirstName, me.ID)
```

:::

## GetUser

Retrieves full profile information for a single user by ID.

```go
func (c *Client) GetUser(ctx context.Context, userID int64) (*types.User, error)
```

**Parameters:**

| Name   | Type    | Description               |
|--------|---------|---------------------------|
| ctx    | `context.Context` | Cancellation context |
| userID | `int64` | Identifier of the user    |

**Returns:** `*types.User` with full profile information, or an error.

## GetUsers

Retrieves full user information for each of the provided user IDs. Users that cannot be resolved are silently skipped.

```go
func (c *Client) GetUsers(ctx context.Context, userIDs []int64) ([]*types.User, error)
```

**Parameters:**

| Name     | Type      | Description                    |
|----------|-----------|--------------------------------|
| ctx      | `context.Context` | Cancellation context    |
| userIDs  | `[]int64` | Slice of user identifiers      |

::: code-group

```go [Example]
users, err := client.GetUsers(ctx, []int64{123456, 789012})
if err != nil {
    log.Fatal(err)
}
for _, u := range users {
    fmt.Printf("%s %s (ID: %d)\n", u.FirstName, u.LastName, u.ID)
}
```

:::

## GetCommonChats

Retrieves the list of chats (groups, channels, supergroups) shared with a specific user.

```go
func (c *Client) GetCommonChats(ctx context.Context, userID int64, limit int) ([]*types.Chat, error)
```

**Parameters:**

| Name   | Type    | Description                                       |
|--------|---------|---------------------------------------------------|
| ctx    | `context.Context` | Cancellation context                      |
| userID | `int64` | Identifier of the target user                     |
| limit  | `int`   | Maximum chats to return (defaults to 100 if <= 0) |

## UpdateProfile

Updates the current user's first name, last name, and bio. Only non-empty fields are included in the update; pass an empty string for fields that should remain unchanged.

```go
func (c *Client) UpdateProfile(ctx context.Context, firstName, lastName, bio string) (*types.User, error)
```

**Parameters:**

| Name      | Type     | Description                       |
|-----------|----------|-----------------------------------|
| ctx       | `context.Context` | Cancellation context     |
| firstName | `string` | New first name (empty to skip)    |
| lastName  | `string` | New last name (empty to skip)     |
| bio       | `string` | New bio/about text (empty to skip)|

**Returns:** The updated `*types.User`.

::: code-group

```go [Example]
updated, err := client.UpdateProfile(ctx, "Alice", "", "Full-stack developer")
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Updated: %s\n", updated.FirstName)
```

:::

## SetProfilePhoto

Uploads and sets a new profile photo for the current user.

```go
func (c *Client) SetProfilePhoto(ctx context.Context, photo tg.InputFileClass) error
```

**Parameters:**

| Name  | Type                  | Description                         |
|-------|-----------------------|-------------------------------------|
| ctx   | `context.Context`     | Cancellation context                |
| photo | `tg.InputFileClass`   | Uploaded file to use as profile photo |

## DeleteProfilePhoto

Deletes a profile photo by its ID.

```go
func (c *Client) DeleteProfilePhoto(ctx context.Context, photoID int64) error
```

## GetProfilePhotos

Retrieves a paginated list of profile photos for a user.

```go
func (c *Client) GetProfilePhotos(ctx context.Context, userID int64, opts ...*GetProfilePhotosOption) ([]*types.ChatPhoto, error)
```

**Parameters:**

| Name   | Type                       | Description                       |
|--------|----------------------------|-----------------------------------|
| ctx    | `context.Context`          | Cancellation context              |
| userID | `int64`                    | Target user identifier            |
| opts   | `...*GetProfilePhotosOption` | Pagination options (limit defaults to 100) |

**GetProfilePhotosOption:**

| Field  | Type    | Description                               |
|--------|---------|-------------------------------------------|
| Offset | `int32` | Number of photos to skip                  |
| Limit  | `int32` | Maximum photos to return (default: 100)   |
| MaxID  | `int64` | Maximum photo ID (0 to disable filter)    |

::: code-group

```go [Example]
photos, err := client.GetProfilePhotos(ctx, userID, &telegram.GetProfilePhotosOption{
    Limit: 10,
})
if err != nil {
    log.Fatal(err)
}
fmt.Printf("User has %d profile photos\n", len(photos))
```

:::

## SetUsername

Updates the current user's username. Must comply with Telegram's naming rules.

```go
func (c *Client) SetUsername(ctx context.Context, username string) error
```

## SetBio

Updates the current user's bio/about text. Must not exceed Telegram's length limit.

```go
func (c *Client) SetBio(ctx context.Context, bio string) error
```

## BlockUser

Blocks a user from interacting with the current account.

```go
func (c *Client) BlockUser(ctx context.Context, userID int64) error
```

::: code-group

```go [Example]
err := client.BlockUser(ctx, spammerID)
if err != nil {
    log.Fatal(err)
}
fmt.Println("User blocked")
```

:::

## UnblockUser

Removes a user from the blocked list.

```go
func (c *Client) UnblockUser(ctx context.Context, userID int64) error
```

## GetBlocked

Retrieves a paginated list of blocked users.

```go
func (c *Client) GetBlocked(ctx context.Context, limit, offset int) (tg.BlockedClass, error)
```

**Parameters:**

| Name   | Type    | Description                          |
|--------|---------|--------------------------------------|
| ctx    | `context.Context` | Cancellation context        |
| limit  | `int`   | Maximum entries to return            |
| offset | `int`   | Starting position for pagination     |

## AddContact

Adds a user to the contact list. If `share` is true, the phone number is shared with the contact.

```go
func (c *Client) AddContact(ctx context.Context, userID int64, firstName, lastName, phone string, share bool) error
```

**Parameters:**

| Name      | Type     | Description                          |
|-----------|----------|--------------------------------------|
| ctx       | `context.Context` | Cancellation context       |
| userID    | `int64`  | User to add as contact               |
| firstName | `string` | Contact first name                   |
| lastName  | `string` | Contact last name                    |
| phone     | `string` | Contact phone number                 |
| share     | `bool`   | Whether to share phone with contact  |

::: code-group

```go [Example]
err := client.AddContact(ctx, userID, "Alice", "Smith", "+1234567890", true)
if err != nil {
    log.Fatal(err)
}
fmt.Println("Contact added")
```

:::

## DeleteContacts

Removes users from the contact list.

```go
func (c *Client) DeleteContacts(ctx context.Context, userIDs []int64) error
```

## GetContacts

Retrieves the current user's contact list. The `hash` parameter is a checksum of the previously known contact list; if it matches the server-side hash, an empty response may be returned.

```go
func (c *Client) GetContacts(ctx context.Context, hash int64) (tg.ContactsClass, error)
```

::: code-group

```go [Example]
contacts, err := client.GetContacts(ctx, 0)
if err != nil {
    log.Fatal(err)
}
```

:::
