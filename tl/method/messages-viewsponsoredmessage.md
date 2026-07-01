---
title: ViewSponsoredMessage
description: TL method messages.viewSponsoredMessage
---

# messages.viewSponsoredMessage

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x269e3643`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `random_id` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.ViewSponsoredMessageRequest{
    random_id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
