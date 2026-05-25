---
title: SetCustomVerification
description: TL method bots.setCustomVerification
---

# bots.setCustomVerification

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8b89dfbd`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `enabled` | `bool` *(flags.1, optional)* | | 
| `bot` | `InputUser` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `custom_description` | `string` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SetCustomVerificationRequest{
    enabled: false,
    bot: nil, // InputUser
    peer: nil, // InputPeer
    custom_description: "",
})
if err != nil {
    panic(err)
}
print(result)
```
