---
title: TogglePeerTranslations
description: TL method messages.togglePeerTranslations
---

# messages.togglePeerTranslations

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xe47cb579`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `disabled` | `bool` *(flags.0, optional)* | | 
| `peer` | `InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.TogglePeerTranslationsRequest{
    disabled: false,
    peer: nil, // InputPeer
})
if err != nil {
    panic(err)
}
print(result)
```
