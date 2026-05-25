---
title: GetAttachMenuBots
description: TL method messages.getAttachMenuBots
---

# messages.getAttachMenuBots

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x16fcc2cb`  
Returns: [AttachMenuBots](/tl/types#attachmenubots)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetAttachMenuBotsRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
