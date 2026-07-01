---
title: UploadImportedMedia
description: TL method messages.uploadImportedMedia
---

# messages.uploadImportedMedia

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x2a862092`  
Returns: [MessageMedia](/tl/types#messagemedia)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `import_id` | `int64` | | 
| `file_name` | `string` | | 
| `media` | `InputMedia` | | 

## Example

```go
result, err := client.Raw(&tg.UploadImportedMediaRequest{
    peer: nil, // InputPeer
    import_id: 0,
    file_name: "",
    media: nil, // InputMedia
})
if err != nil {
    panic(err)
}
print(result)
```
