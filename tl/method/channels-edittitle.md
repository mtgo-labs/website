---
title: EditTitle
description: TL method channels.editTitle
---

# channels.editTitle

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x566decd0`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `title` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.EditTitleRequest{
    channel: nil, // InputChannel
    title: "",
})
if err != nil {
    panic(err)
}
print(result)
```
