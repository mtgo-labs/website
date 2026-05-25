---
title: JoinGroupCall
description: TL method phone.joinGroupCall
---

# phone.joinGroupCall

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8fb53057`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `muted` | `bool` *(flags.0, optional)* | | 
| `video_stopped` | `bool` *(flags.2, optional)* | | 
| `call` | `InputGroupCall` | | 
| `join_as` | `InputPeer` | | 
| `invite_hash` | `string` *(flags.1, optional)* | | 
| `public_key` | `Int256` *(flags.3, optional)* | | 
| `block` | `[]byte` *(flags.3, optional)* | | 
| `params` | `DataJSON` | | 

## Example

```go
result, err := client.Raw(&tg.JoinGroupCallRequest{
    muted: false,
    video_stopped: false,
    call: nil, // InputGroupCall
    join_as: nil, // InputPeer
    invite_hash: "",
    public_key: nil, // Int256
    block: nil,
    params: nil, // DataJSON
})
if err != nil {
    panic(err)
}
print(result)
```
