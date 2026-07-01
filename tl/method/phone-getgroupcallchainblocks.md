---
title: GetGroupCallChainBlocks
description: TL method phone.getGroupCallChainBlocks
---

# phone.getGroupCallChainBlocks

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xee9f88a6`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 
| `sub_chain_id` | `int32` | | 
| `offset` | `int32` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetGroupCallChainBlocksRequest{
    call: nil, // InputGroupCall
    sub_chain_id: 0,
    offset: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
