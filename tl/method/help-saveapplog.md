---
title: SaveAppLog
description: TL method help.saveAppLog
---

# help.saveAppLog

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x6f02f748`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `events` | `[]InputAppEvent` | | 

## Example

```go
result, err := client.Raw(&tg.SaveAppLogRequest{
    events: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
