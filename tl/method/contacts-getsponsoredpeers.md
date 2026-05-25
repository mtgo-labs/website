---
title: GetSponsoredPeers
description: TL method contacts.getSponsoredPeers
---

# contacts.getSponsoredPeers

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb6c8c393`  
Returns: [SponsoredPeers](/tl/types#sponsoredpeers)

## Parameters

| Name | Type | Description |
|---|---|---|
| `q` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetSponsoredPeersRequest{
    q: "",
})
if err != nil {
    panic(err)
}
print(result)
```
