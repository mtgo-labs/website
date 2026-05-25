---
title: ImportLoginToken
description: TL method auth.importLoginToken
---

# auth.importLoginToken

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x95ac5ce4`  
Returns: [LoginToken](/tl/types#logintoken)

## Parameters

| Name | Type | Description |
|---|---|---|
| `token` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.ImportLoginTokenRequest{
    token: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
