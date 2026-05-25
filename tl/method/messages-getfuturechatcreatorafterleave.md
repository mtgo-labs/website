---
title: GetFutureChatCreatorAfterLeave
description: TL method messages.getFutureChatCreatorAfterLeave
---

# messages.getFutureChatCreatorAfterLeave

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x3b7d0ea6`  
Returns: [User](/tl/types#user)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetFutureChatCreatorAfterLeaveRequest{
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
