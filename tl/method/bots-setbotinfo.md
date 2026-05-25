---
title: SetBotInfo
description: TL method bots.setBotInfo
---

# bots.setBotInfo

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x10cf3123`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` *(flags.2, optional)* | | 
| `lang_code` | `string` | | 
| `name` | `string` *(flags.3, optional)* | | 
| `about` | `string` *(flags.0, optional)* | | 
| `description` | `string` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SetBotInfoRequest{
    bot: nil, // InputUser
    lang_code: "",
    name: "",
    about: "",
    description: "",
})
if err != nil {
    panic(err)
}
print(result)
```
