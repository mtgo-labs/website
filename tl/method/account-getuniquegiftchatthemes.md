---
title: GetUniqueGiftChatThemes
description: TL method account.getUniqueGiftChatThemes
---

# account.getUniqueGiftChatThemes

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe42ce9c9`  
Returns: [ChatThemes](/tl/types#chatthemes)

## Parameters

| Name | Type | Description |
|---|---|---|
| `offset` | `string` | | 
| `limit` | `int32` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetUniqueGiftChatThemesRequest{
    offset: "",
    limit: 0,
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
