---
title: GetAttachMenuBot
description: TL method messages.getAttachMenuBot
---

# messages.getAttachMenuBot

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x77216192`  
Returns: [AttachMenuBotsBot](/tl/types#attachmenubotsbot)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.GetAttachMenuBotRequest{
    bot: nil, // InputUser
})
if err != nil {
    panic(err)
}
print(result)
```
