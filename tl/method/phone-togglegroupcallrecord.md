---
title: ToggleGroupCallRecord
description: TL method phone.toggleGroupCallRecord
---

# phone.toggleGroupCallRecord

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xf128c708`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `start` | `bool` *(flags.0, optional)* | | 
| `video` | `bool` *(flags.2, optional)* | | 
| `call` | `InputGroupCall` | | 
| `title` | `string` *(flags.1, optional)* | | 
| `video_portrait` | `bool` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ToggleGroupCallRecordRequest{
    start: false,
    video: false,
    call: nil, // InputGroupCall
    title: "",
    video_portrait: false,
})
if err != nil {
    panic(err)
}
print(result)
```
