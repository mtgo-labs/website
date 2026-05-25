---
title: ReportProfilePhoto
description: TL method account.reportProfilePhoto
---

# account.reportProfilePhoto

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xfa8cc6f5`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `photo_id` | `InputPhoto` | | 
| `reason` | `ReportReason` | | 
| `message` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ReportProfilePhotoRequest{
    peer: nil, // InputPeer
    photo_id: nil, // InputPhoto
    reason: nil, // ReportReason
    message: "",
})
if err != nil {
    panic(err)
}
print(result)
```
