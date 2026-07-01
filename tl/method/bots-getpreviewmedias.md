---
title: GetPreviewMedias
description: TL method bots.getPreviewMedias
---

# bots.getPreviewMedias

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa2a5594d`  
Returns: [BotPreviewMedia](/tl/types#botpreviewmedia)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.GetPreviewMediasRequest{
    bot: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
