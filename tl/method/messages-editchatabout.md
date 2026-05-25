---
title: EditChatAbout
description: TL method messages.editChatAbout
---

# messages.editChatAbout

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xdef60797`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `about` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.EditChatAboutRequest{
    peer: nil, // InputPeer
    about: "",
})
if err != nil {
    panic(err)
}
print(result)
```
