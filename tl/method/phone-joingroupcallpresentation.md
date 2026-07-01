---
title: JoinGroupCallPresentation
description: TL method phone.joinGroupCallPresentation
---

# phone.joinGroupCallPresentation

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xcbea6bc4`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 
| `params` | `DataJSON` | | 

## Example

```go
result, err := client.Raw(&tg.JoinGroupCallPresentationRequest{
    call: nil, // InputGroupCall
    params: nil, // DataJSON
})
if err != nil {
    panic(err)
}
print(result)
```
