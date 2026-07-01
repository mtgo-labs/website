---
title: GetDeepLinkInfo
description: TL method help.getDeepLinkInfo
---

# help.getDeepLinkInfo

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x3fedc75f`  
Returns: [DeepLinkInfo](/tl/types#deeplinkinfo)

## Parameters

| Name | Type | Description |
|---|---|---|
| `path` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetDeepLinkInfoRequest{
    path: "",
})
if err != nil {
    panic(err)
}
print(result)
```
