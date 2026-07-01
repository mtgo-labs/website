---
title: EditGroupCallTitle
description: TL method phone.editGroupCallTitle
---

# phone.editGroupCallTitle

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x1ca6ac0a`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `call` | `InputGroupCall` | | 
| `title` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.EditGroupCallTitleRequest{
    call: nil, // InputGroupCall
    title: "",
})
if err != nil {
    panic(err)
}
print(result)
```
