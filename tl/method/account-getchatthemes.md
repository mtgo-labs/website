---
title: GetChatThemes
description: TL method account.getChatThemes
---

# account.getChatThemes

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd638de89`  
Returns: [Themes](/tl/types#themes)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetChatThemesRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
