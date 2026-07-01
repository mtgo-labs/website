---
title: ExportStoryLink
description: TL method stories.exportStoryLink
---

# stories.exportStoryLink

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x7b8def20`  
Returns: [ExportedStoryLink](/tl/types#exportedstorylink)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ExportStoryLinkRequest{
    peer: nil, // InputPeer
    id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
