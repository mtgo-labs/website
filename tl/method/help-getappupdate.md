---
title: GetAppUpdate
description: TL method help.getAppUpdate
---

# help.getAppUpdate

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x522d5a7d`  
Returns: [AppUpdate](/tl/types#appupdate)

## Parameters

| Name | Type | Description |
|---|---|---|
| `source` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetAppUpdateRequest{
    source: "",
})
if err != nil {
    panic(err)
}
print(result)
```
