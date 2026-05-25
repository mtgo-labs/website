---
title: GetNotifyExceptions
description: TL method account.getNotifyExceptions
---

# account.getNotifyExceptions

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x53577479`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `compare_sound` | `bool` *(flags.1, optional)* | | 
| `compare_stories` | `bool` *(flags.2, optional)* | | 
| `peer` | `InputNotifyPeer` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.GetNotifyExceptionsRequest{
    compare_sound: false,
    compare_stories: false,
    peer: nil, // InputNotifyPeer
})
if err != nil {
    panic(err)
}
print(result)
```
