---
title: GetBotInfo
description: TL method bots.getBotInfo
---

# bots.getBotInfo

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xdcd914fd`  
Returns: [BotInfo](/tl/types#botinfo)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` *(flags.0, optional)* | | 
| `lang_code` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetBotInfoRequest{
    bot: nil, // InputUser
    lang_code: "",
})
if err != nil {
    panic(err)
}
print(result)
```
