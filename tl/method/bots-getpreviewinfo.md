---
title: GetPreviewInfo
description: TL method bots.getPreviewInfo
---

# bots.getPreviewInfo

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x423ab3ad`  
Returns: [PreviewInfo](/tl/types#previewinfo)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `lang_code` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetPreviewInfoRequest{
    bot: nil, // InputUser
    lang_code: "",
})
if err != nil {
    panic(err)
}
print(result)
```
