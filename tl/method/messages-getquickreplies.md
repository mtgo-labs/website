---
title: GetQuickReplies
description: TL method messages.getQuickReplies
---

# messages.getQuickReplies

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd483f2a8`  
Returns: [QuickReplies](/tl/types#quickreplies)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetQuickRepliesRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
