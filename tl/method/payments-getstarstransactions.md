---
title: GetStarsTransactions
description: TL method payments.getStarsTransactions
---

# payments.getStarsTransactions

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x69da4557`  
Returns: [StarsStatus](/tl/types#starsstatus)

## Parameters

| Name | Type | Description |
|---|---|---|
| `inbound` | `bool` *(flags.0, optional)* | | 
| `outbound` | `bool` *(flags.1, optional)* | | 
| `ascending` | `bool` *(flags.2, optional)* | | 
| `ton` | `bool` *(flags.4, optional)* | | 
| `subscription_id` | `string` *(flags.3, optional)* | | 
| `peer` | `InputPeer` | | 
| `offset` | `string` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetStarsTransactionsRequest{
    inbound: false,
    outbound: false,
    ascending: false,
    ton: false,
    subscription_id: "",
    peer: nil, // InputPeer
    offset: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
