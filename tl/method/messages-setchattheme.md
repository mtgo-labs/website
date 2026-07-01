---
title: SetChatTheme
description: TL method messages.setChatTheme
---

# messages.setChatTheme

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x081202c9`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `theme` | `InputChatTheme` | | 

## Example

```go
result, err := client.Raw(&tg.SetChatThemeRequest{
    peer: nil, // InputPeer
    theme: nil, // InputChatTheme
})
if err != nil {
    panic(err)
}
print(result)
```
