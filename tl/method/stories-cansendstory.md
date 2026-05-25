---
title: CanSendStory
description: TL method stories.canSendStory
---

# stories.canSendStory

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x30eb63f0`  
Returns: [CanSendStoryCount](/tl/types#cansendstorycount)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.CanSendStoryRequest{
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
