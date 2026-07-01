---
title: SearchSentMedia
description: TL method messages.searchSentMedia
---

# messages.searchSentMedia

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x107e31a0`  
Returns: [Messages](/tl/types#messages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `q` | `string` | | 
| `filter` | `MessagesFilter` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.SearchSentMediaRequest{
    q: "",
    filter: nil, // MessagesFilter
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
