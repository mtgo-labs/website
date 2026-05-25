---
title: DeletePasskey
description: TL method account.deletePasskey
---

# account.deletePasskey

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xf5b5563f`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.DeletePasskeyRequest{
    id: "",
})
if err != nil {
    panic(err)
}
print(result)
```
