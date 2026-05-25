---
title: ReportMusicListen
description: TL method messages.reportMusicListen
---

# messages.reportMusicListen

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xddbcd819`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `InputDocument` | | 
| `listened_duration` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.ReportMusicListenRequest{
    id: nil, // InputDocument
    listened_duration: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
