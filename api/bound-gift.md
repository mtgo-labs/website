# Gift Bound Methods

When a `*types.Gift` is obtained from the client, it has bound convenience methods for managing that gift.

```go
gifts, _ := client.GetGifts(ctx)
gift := gifts[0]
gift.Show()        // unhide the gift
gift.Transfer(toID) // transfer to another user
```

All methods return `ErrNoBinder` if the Gift was not created by a client.

---

## Show

Make this gift visible in the chat.

```go
func (g *Gift) Show() error
```

**Example:**

```go
err := gift.Show()
```

## Hide

Hide this gift from the chat.

```go
func (g *Gift) Hide() error
```

## Convert

Convert this star gift to stars.

```go
func (g *Gift) Convert() error
```

**Example:**

```go
err := gift.Convert()
```

## Upgrade

Upgrade this gift (e.g. to a unique gift).

```go
func (g *Gift) Upgrade(keepOriginalDetails bool) error
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| keepOriginalDetails | `bool` | Whether to preserve original gift details |

**Example:**

```go
err := gift.Upgrade(true)
```

## Transfer

Transfer this gift to another user.

```go
func (g *Gift) Transfer(toID int64) error
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| toID | `int64` | The user ID to transfer the gift to |

**Example:**

```go
err := gift.Transfer(targetUserID)
```
