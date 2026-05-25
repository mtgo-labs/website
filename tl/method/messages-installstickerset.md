---
title: InstallStickerSet
description: TL method messages.installStickerSet
---

# messages.installStickerSet

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xc78fe460`  
Returns: [StickerSetInstallResult](/tl/types#stickersetinstallresult)

## Parameters

| Name | Type | Description |
|---|---|---|
| `stickerset` | `InputStickerSet` | | 
| `archived` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.InstallStickerSetRequest{
    stickerset: nil, // InputStickerSet
    archived: false,
})
if err != nil {
    panic(err)
}
print(result)
```
