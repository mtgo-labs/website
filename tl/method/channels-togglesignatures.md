---
title: ToggleSignatures
description: TL method channels.toggleSignatures
---

# channels.toggleSignatures

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x418d549c`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `signatures_enabled` | `bool` *(flags.0, optional)* | | 
| `profiles_enabled` | `bool` *(flags.1, optional)* | | 
| `channel` | `InputChannel` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleSignaturesRequest{
    signatures_enabled: false,
    profiles_enabled: false,
    channel: nil, // InputChannel
})
if err != nil {
    panic(err)
}
print(result)
```
