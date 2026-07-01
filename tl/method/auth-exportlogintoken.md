---
title: ExportLoginToken
description: TL method auth.exportLoginToken
---

# auth.exportLoginToken

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xb7e085fe`  
Returns: [LoginToken](/tl/types#logintoken)

## Parameters

| Name | Type | Description |
|---|---|---|
| `api_id` | `int32` | | 
| `api_hash` | `string` | | 
| `except_ids` | `[]int64` | | 

## Example

```go
result, err := client.Raw(&tg.ExportLoginTokenRequest{
    api_id: 0,
    api_hash: "",
    except_ids: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
