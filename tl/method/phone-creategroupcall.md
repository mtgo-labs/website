---
title: CreateGroupCall
description: TL method phone.createGroupCall
---

# phone.createGroupCall

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x48cdc6d8`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `rtmp_stream` | `bool` *(flags.2, optional)* | | 
| `peer` | `InputPeer` | | 
| `random_id` | `int32` | | 
| `title` | `string` *(flags.0, optional)* | | 
| `schedule_date` | `int32` *(flags.1, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.CreateGroupCallRequest{
    rtmp_stream: false,
    peer: nil, // InputPeer
    random_id: 0,
    title: "",
    schedule_date: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
