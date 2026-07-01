---
title: SendMultiMedia
description: TL method messages.sendMultiMedia
---

# messages.sendMultiMedia

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x1bf89d74`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `silent` | `bool` *(flags.5, optional)* | | 
| `background` | `bool` *(flags.6, optional)* | | 
| `clear_draft` | `bool` *(flags.7, optional)* | | 
| `noforwards` | `bool` *(flags.14, optional)* | | 
| `update_stickersets_order` | `bool` *(flags.15, optional)* | | 
| `invert_media` | `bool` *(flags.16, optional)* | | 
| `allow_paid_floodskip` | `bool` *(flags.19, optional)* | | 
| `peer` | `InputPeer` | | 
| `reply_to` | `InputReplyTo` *(flags.0, optional)* | | 
| `multi_media` | `[]InputSingleMedia` | | 
| `schedule_date` | `int32` *(flags.10, optional)* | | 
| `send_as` | `InputPeer` *(flags.13, optional)* | | 
| `quick_reply_shortcut` | `InputQuickReplyShortcut` *(flags.17, optional)* | | 
| `effect` | `int64` *(flags.18, optional)* | | 
| `allow_paid_stars` | `int64` *(flags.21, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.SendMultiMediaRequest{
    silent: false,
    background: false,
    clear_draft: false,
    noforwards: false,
    update_stickersets_order: false,
    invert_media: false,
    allow_paid_floodskip: false,
    peer: nil, // InputPeer
    reply_to: nil, // InputReplyTo
    multi_media: nil,
    schedule_date: 0,
    send_as: nil, // InputPeer
    quick_reply_shortcut: nil, // InputQuickReplyShortcut
    effect: 0,
    allow_paid_stars: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
