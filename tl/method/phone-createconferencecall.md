---
title: CreateConferenceCall
description: TL method phone.createConferenceCall
---

# phone.createConferenceCall

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x7d0444bb`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `muted` | `bool` *(flags.0, optional)* | | 
| `video_stopped` | `bool` *(flags.2, optional)* | | 
| `join` | `bool` *(flags.3, optional)* | | 
| `random_id` | `int32` | | 
| `public_key` | `Int256` *(flags.3, optional)* | | 
| `block` | `[]byte` *(flags.3, optional)* | | 
| `params` | `DataJSON` *(flags.3, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.CreateConferenceCallRequest{
    muted: false,
    video_stopped: false,
    join: false,
    random_id: 0,
    public_key: nil, // Int256
    block: nil,
    params: nil, // DataJSON
})
if err != nil {
    panic(err)
}
print(result)
```
