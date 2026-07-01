---
title: UploadMedia
description: TL method messages.uploadMedia
---

# messages.uploadMedia

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x14967978`  
Returns: [MessageMedia](/tl/types#messagemedia)

## Parameters

| Name | Type | Description |
|---|---|---|
| `business_connection_id` | `string` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 
| `media` | `InputMedia` | | 

## Example

```go
result, err := client.Raw(&tg.UploadMediaRequest{
    business_connection_id: "",
    peer: nil, // InputPeer
    media: nil, // InputMedia
})
if err != nil {
    panic(err)
}
print(result)
```
