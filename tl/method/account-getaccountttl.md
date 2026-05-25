---
title: GetAccountTTL
description: TL method account.getAccountTTL
---

# account.getAccountTTL

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x08fc711d`  
Returns: [AccountDaysTTL](/tl/types#accountdaysttl)

## Example

```go
result, err := client.Raw(&tg.GetAccountTTLRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
