---
title: ImportContactToken
description: TL method contacts.importContactToken
---

# contacts.importContactToken

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x13005788`  
Returns: [User](/tl/types#user)

## Parameters

| Name | Type | Description |
|---|---|---|
| `token` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ImportContactTokenRequest{
    token: "",
})
if err != nil {
    panic(err)
}
print(result)
```
