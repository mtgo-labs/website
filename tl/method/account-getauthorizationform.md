---
title: GetAuthorizationForm
description: TL method account.getAuthorizationForm
---

# account.getAuthorizationForm

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xa929597a`  
Returns: [AuthorizationForm](/tl/types#authorizationform)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot_id` | `int64` | | 
| `scope` | `string` | | 
| `public_key` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetAuthorizationFormRequest{
    bot_id: 0,
    scope: "",
    public_key: "",
})
if err != nil {
    panic(err)
}
print(result)
```
