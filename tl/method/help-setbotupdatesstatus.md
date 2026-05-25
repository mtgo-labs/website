---
title: SetBotUpdatesStatus
description: TL method help.setBotUpdatesStatus
---

# help.setBotUpdatesStatus

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xec22cfcd`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `pending_updates_count` | `int32` | | 
| `message` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.SetBotUpdatesStatusRequest{
    pending_updates_count: 0,
    message: "",
})
if err != nil {
    panic(err)
}
print(result)
```
