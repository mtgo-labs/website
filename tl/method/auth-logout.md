---
title: LogOut
description: TL method auth.logOut
---

# auth.logOut

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x3e72ba19`  
Returns: [LoggedOut](/tl/types#loggedout)

## Example

```go
result, err := client.Raw(&tg.LogOutRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
