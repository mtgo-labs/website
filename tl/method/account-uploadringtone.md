---
title: UploadRingtone
description: TL method account.uploadRingtone
---

# account.uploadRingtone

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x831a83a2`  
Returns: [Document](/tl/types#document)

## Parameters

| Name | Type | Description |
|---|---|---|
| `file` | `InputFile` | | 
| `file_name` | `string` | | 
| `mime_type` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.UploadRingtoneRequest{
    file: nil, // InputFile
    file_name: "",
    mime_type: "",
})
if err != nil {
    panic(err)
}
print(result)
```
