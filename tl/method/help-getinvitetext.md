---
title: GetInviteText
description: TL method help.getInviteText
---

# help.getInviteText

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4d392343`  
Returns: [InviteText](/tl/types#invitetext)

## Example

```go
result, err := client.Raw(&tg.GetInviteTextRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
