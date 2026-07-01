---
title: GetPreparedInlineMessage
description: TL method messages.getPreparedInlineMessage
---

# messages.getPreparedInlineMessage

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x857ebdb8`  
Returns: [PreparedInlineMessage](/tl/types#preparedinlinemessage)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `id` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetPreparedInlineMessageRequest{
    bot: nil, // InputUser
    id: "",
})
if err != nil {
    panic(err)
}
print(result)
```
