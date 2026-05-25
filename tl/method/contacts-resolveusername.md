---
title: ResolveUsername
description: TL method contacts.resolveUsername
---

# contacts.resolveUsername

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x725afbbc`  
Returns: [ResolvedPeer](/tl/types#resolvedpeer)

## Parameters

| Name | Type | Description |
|---|---|---|
| `username` | `string` | | 
| `referer` | `string` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ResolveUsernameRequest{
    username: "",
    referer: "",
})
if err != nil {
    panic(err)
}
print(result)
```
