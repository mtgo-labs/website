---
title: ResetBotCommands
description: TL method bots.resetBotCommands
---

# bots.resetBotCommands

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x3d8de0f9`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `scope` | `BotCommandScope` | | 
| `lang_code` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ResetBotCommandsRequest{
    scope: nil, // BotCommandScope
    lang_code: "",
})
if err != nil {
    panic(err)
}
print(result)
```
