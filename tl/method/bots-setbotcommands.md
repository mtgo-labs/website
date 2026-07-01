---
title: SetBotCommands
description: TL method bots.setBotCommands
---

# bots.setBotCommands

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x0517165a`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `scope` | `BotCommandScope` | | 
| `lang_code` | `string` | | 
| `commands` | `[]BotCommand` | | 

## Example

```go
result, err := client.Raw(&tg.SetBotCommandsRequest{
    scope: nil, // BotCommandScope
    lang_code: "",
    commands: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
