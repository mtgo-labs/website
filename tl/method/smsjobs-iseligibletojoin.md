---
title: IsEligibleToJoin
description: TL method smsjobs.isEligibleToJoin
---

# smsjobs.isEligibleToJoin

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x0edc39d0`  
Returns: [EligibilityToJoin](/tl/types#eligibilitytojoin)

## Example

```go
result, err := client.Raw(&tg.IsEligibleToJoinRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
