---
title: GetBirthdays
description: TL method contacts.getBirthdays
---

# contacts.getBirthdays

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xdaeda864`  
Returns: [ContactBirthdays](/tl/types#contactbirthdays)

## Example

```go
result, err := client.Raw(&tg.GetBirthdaysRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
