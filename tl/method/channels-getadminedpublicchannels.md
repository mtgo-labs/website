---
title: GetAdminedPublicChannels
description: TL method channels.getAdminedPublicChannels
---

# channels.getAdminedPublicChannels

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xf8b036af`  
Returns: [Chats](/tl/types#chats)

## Parameters

| Name | Type | Description |
|---|---|---|
| `by_location` | `bool` *(flags.0, optional)* | | 
| `check_limit` | `bool` *(flags.1, optional)* | | 
| `for_personal` | `bool` *(flags.2, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.GetAdminedPublicChannelsRequest{
    by_location: false,
    check_limit: false,
    for_personal: false,
})
if err != nil {
    panic(err)
}
print(result)
```
