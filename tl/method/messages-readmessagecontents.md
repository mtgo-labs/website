---
title: ReadMessageContents
description: TL method messages.readMessageContents
---

# messages.readMessageContents

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x36a73f77`  
Returns: [AffectedMessages](/tl/types#affectedmessages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `[]int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReadMessageContentsRequest{
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
