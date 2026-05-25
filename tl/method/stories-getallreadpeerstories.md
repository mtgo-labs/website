---
title: GetAllReadPeerStories
description: TL method stories.getAllReadPeerStories
---

# stories.getAllReadPeerStories

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x9b5ae7f9`  
Returns: [Updates](/tl/types#updates)

## Example

```go
result, err := client.Raw(&tg.GetAllReadPeerStoriesRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
