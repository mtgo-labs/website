---
title: GetInlineBotResults
description: TL method messages.getInlineBotResults
---

# messages.getInlineBotResults

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x514e999d`  
Returns: [BotResults](/tl/types#botresults)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `peer` | `InputPeer` | | 
| `geo_point` | `InputGeoPoint` *(flags.0, optional)* | | 
| `query` | `string` | | 
| `offset` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetInlineBotResultsRequest{
    bot: nil, // InputUser
    peer: nil, // InputPeer
    geo_point: nil, // InputGeoPoint
    query: "",
    offset: "",
})
if err != nil {
    panic(err)
}
print(result)
```
