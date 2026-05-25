---
title: UploadTheme
description: TL method account.uploadTheme
---

# account.uploadTheme

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x1c3db333`  
Returns: [Document](/tl/types#document)

## Parameters

| Name | Type | Description |
|---|---|---|
| `file` | `InputFile` | | 
| `thumb` | `InputFile` *(flags.0, optional)* | | 
| `file_name` | `string` | | 
| `mime_type` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.UploadThemeRequest{
    file: nil, // InputFile
    thumb: nil, // InputFile
    file_name: "",
    mime_type: "",
})
if err != nil {
    panic(err)
}
print(result)
```
