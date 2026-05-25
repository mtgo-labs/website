---
title: DeleteMessages
description: TL method messages.deleteMessages
---

# messages.deleteMessages

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe58e95d2`  
Returns: [AffectedMessages](/tl/types#affectedmessages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `revoke` | `bool` *(flags.0, optional)* | | 
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.DeleteMessagesRequest{
    revoke: false,
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
