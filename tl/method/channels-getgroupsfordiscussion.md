---
title: GetGroupsForDiscussion
description: TL method channels.getGroupsForDiscussion
---

# channels.getGroupsForDiscussion

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf5dad378`  
Returns: [Chats](/tl/types#chats)

## Example

```go
result, err := client.Raw(&tg.GetGroupsForDiscussionRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
