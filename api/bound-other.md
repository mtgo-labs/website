# Other Bound Methods

Several other types in the mtgo ecosystem have bound convenience methods.

---

## ChatJoinRequest

A `*types.ChatJoinRequest` is dispatched when a user requests to join a chat. It has approve/decline methods.

### Approve

Approve the join request.

```go
func (r *ChatJoinRequest) Approve() error
```

**Example:**

```go
dispatcher.OnChatJoinRequest(func(ctx context.Context, req *types.ChatJoinRequest) error {
    return req.Approve()
})
```

### Decline

Decline the join request.

```go
func (r *ChatJoinRequest) Decline() error
```

---

## PreCheckoutQuery

A `*types.PreCheckoutQuery` is sent when a user confirms a payment but before the charge is finalized. You must respond within 10 seconds.

### Answer

Approve or reject the pre-checkout query.

```go
func (q *PreCheckoutQuery) Answer(ok bool, errorMsg string) error
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ok | `bool` | `true` to approve, `false` to reject |
| errorMsg | `string` | Error message to show the user (when `ok` is `false`) |

**Example:**

```go
dispatcher.OnPreCheckoutQuery(func(ctx context.Context, q *types.PreCheckoutQuery) error {
    if validPayment(q) {
        return q.Answer(true, "")
    }
    return q.Answer(false, "Payment expired")
})
```

---

## ShippingQuery

A `*types.ShippingQuery` is sent when a user selects a shipping address during checkout so you can return available shipping options.

### Answer

Respond with shipping options or an error.

```go
func (q *ShippingQuery) Answer(ok bool, errorMsg string) error
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ok | `bool` | `true` if shipping is available, `false` otherwise |
| errorMsg | `string` | Error message when `ok` is `false` |

**Example:**

```go
dispatcher.OnShippingQuery(func(ctx context.Context, q *types.ShippingQuery) error {
    if canShipTo(q.Address.CountryCode) {
        return q.Answer(true, "")
    }
    return q.Answer(false, "We don't ship to your country")
})
```

---

## ActiveSession

A `*types.ActiveSession` represents an active session on the account (e.g. from `client.GetAuthorizations()`).

### Reset

Terminate this session (log out the device).

```go
func (s *ActiveSession) Reset() error
```

**Example:**

```go
sessions, _ := client.GetAuthorizations(ctx)
for _, s := range sessions.Sessions {
    if s.IP == "suspicious IP" {
        s.Reset()
    }
}
```

---

## Folder

A `*types.Folder` represents a chat folder (dialog filter). It has methods for managing folder membership and settings.

### Delete

Delete this folder.

```go
func (f *Folder) Delete() error
```

### Edit

Edit the folder name and/or icon.

```go
func (f *Folder) Edit(name string, icon string) error
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| name | `string` | New folder name (empty to keep current) |
| icon | `string` | New folder icon emoji (empty to keep current) |

### IncludeChat

Add a chat to this folder's included chats.

```go
func (f *Folder) IncludeChat(chatID int64) error
```

### ExcludeChat

Add a chat to this folder's excluded chats.

```go
func (f *Folder) ExcludeChat(chatID int64) error
```

### UpdateColor

Update the folder color.

```go
func (f *Folder) UpdateColor(color int32) error
```

### PinChat

Pin a chat within this folder.

```go
func (f *Folder) PinChat(chatID int64) error
```

### RemoveChat

Remove a chat from this folder.

```go
func (f *Folder) RemoveChat(chatID int64) error
```

**Example:**

```go
folders, _ := client.GetChatFolders(ctx)
for _, folder := range folders {
    if folder.Name == "Work" {
        folder.IncludeChat(workGroupID)
        folder.PinChat(importantChatID)
    }
}
```
