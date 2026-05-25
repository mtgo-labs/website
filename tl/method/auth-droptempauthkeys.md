---
title: DropTempAuthKeys
description: TL method auth.dropTempAuthKeys
---

# auth.dropTempAuthKeys

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x8e48a188`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `except_auth_keys` | `[]int64` | | 

## Example

```go
result, err := client.Raw(&tg.DropTempAuthKeysRequest{
    except_auth_keys: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
