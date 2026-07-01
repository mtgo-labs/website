---
title: GetRecentMeUrls
description: TL method help.getRecentMeUrls
---

# help.getRecentMeUrls

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x3dc0f114`  
Returns: [RecentMeUrls](/tl/types#recentmeurls)

## Parameters

| Name | Type | Description |
|---|---|---|
| `referer` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetRecentMeUrlsRequest{
    referer: "",
})
if err != nil {
    panic(err)
}
print(result)
```
