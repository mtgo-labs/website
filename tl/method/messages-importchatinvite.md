---
title: ImportChatInvite
description: TL method messages.importChatInvite
---

# messages.importChatInvite

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x6c50051c`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ImportChatInviteRequest{
    hash: "",
})
if err != nil {
    panic(err)
}
print(result)
```
