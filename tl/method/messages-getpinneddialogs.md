---
title: GetPinnedDialogs
description: TL method messages.getPinnedDialogs
---

# messages.getPinnedDialogs

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd6b94df2`  
Returns: [PeerDialogs](/tl/types#peerdialogs)

## Parameters

| Name | Type | Description |
|---|---|---|
| `folder_id` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetPinnedDialogsRequest{
    folder_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
