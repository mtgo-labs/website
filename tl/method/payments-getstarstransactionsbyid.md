---
title: GetStarsTransactionsByID
description: TL method payments.getStarsTransactionsByID
---

# payments.getStarsTransactionsByID

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x2dca16b8`  
Returns: [StarsStatus](/tl/types#starsstatus)

## Parameters

| Name | Type | Description |
|---|---|---|
| `ton` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `id` | `[]InputStarsTransaction` | | 

## Example

```go
result, err := client.Raw(&tg.GetStarsTransactionsByIDRequest{
    ton: false,
    peer: nil, // InputPeer
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
