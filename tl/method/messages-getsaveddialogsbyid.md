---
title: GetSavedDialogsByID
description: TL method messages.getSavedDialogsByID
---

# messages.getSavedDialogsByID

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x6f6f9c96`  
Returns: [SavedDialogs](/tl/types#saveddialogs)

## Parameters

| Name | Type | Description |
|---|---|---|
| `parent_peer` | `InputPeer` *(flags.1, optional)* | | 
| `ids` | `[]InputPeer` | | 

## Example

```go
result, err := client.Raw(&tg.GetSavedDialogsByIDRequest{
    parent_peer: nil, // InputPeer
    ids: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
