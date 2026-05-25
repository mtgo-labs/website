---
title: UpdateConnectedBot
description: TL method account.updateConnectedBot
---

# account.updateConnectedBot

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x66a08c7e`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `deleted` | `bool` *(flags.1, optional)* | | 
| `rights` | `BusinessBotRights` *(flags.0, optional)* | | 
| `bot` | `InputUser` | | 
| `recipients` | `InputBusinessBotRecipients` | | 

## Example

```go
result, err := client.Raw(&tg.UpdateConnectedBotRequest{
    deleted: false,
    rights: nil, // BusinessBotRights
    bot: nil, // InputUser
    recipients: nil, // InputBusinessBotRecipients
})
if err != nil {
    panic(err)
}
print(result)
```
