---
title: ExportBotToken
description: TL method bots.exportBotToken
---

# bots.exportBotToken

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xbd0d99eb`  
Returns: [ExportedBotToken](/tl/types#exportedbottoken)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `revoke` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ExportBotTokenRequest{
    bot: nil, // InputUser
    revoke: false,
})
if err != nil {
    panic(err)
}
print(result)
```
