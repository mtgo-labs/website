---
title: ExportMessageLink
description: TL method channels.exportMessageLink
---

# channels.exportMessageLink

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe63fadeb`  
Returns: [ExportedMessageLink](/tl/types#exportedmessagelink)

## Parameters

| Name | Type | Description |
|---|---|---|
| `grouped` | `bool` *(flags.0, optional)* | | 
| `thread` | `bool` *(flags.1, optional)* | | 
| `channel` | `InputChannel` | | 
| `id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ExportMessageLinkRequest{
    grouped: false,
    thread: false,
    channel: nil, // InputChannel
    id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
