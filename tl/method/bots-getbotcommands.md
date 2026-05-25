---
title: GetBotCommands
description: TL method bots.getBotCommands
---

# bots.getBotCommands

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe34c0dd6`  
Returns: [BotCommand](/tl/types#botcommand)

## Parameters

| Name | Type | Description |
|---|---|---|
| `scope` | `BotCommandScope` | | 
| `lang_code` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetBotCommandsRequest{
    scope: nil, // BotCommandScope
    lang_code: "",
})
if err != nil {
    panic(err)
}
print(result)
```
