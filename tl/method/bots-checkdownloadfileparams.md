---
title: CheckDownloadFileParams
description: TL method bots.checkDownloadFileParams
---

# bots.checkDownloadFileParams

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x50077589`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `file_name` | `string` | | 
| `url` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.CheckDownloadFileParamsRequest{
    bot: nil, // InputUser
    file_name: "",
    url: "",
})
if err != nil {
    panic(err)
}
print(result)
```
