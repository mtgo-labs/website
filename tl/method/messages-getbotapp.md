---
title: GetBotApp
description: TL method messages.getBotApp
---

# messages.getBotApp

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x34fdc5c3`  
Returns: [BotApp](/tl/types#botapp)

## Parameters

| Name | Type | Description |
|---|---|---|
| `app` | `InputBotApp` | | 
| `hash` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetBotAppRequest{
    app: nil, // InputBotApp
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
