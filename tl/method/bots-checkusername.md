---
title: CheckUsername
description: TL method bots.checkUsername
---

# bots.checkUsername

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x87f2219b`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `username` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.CheckUsernameRequest{
    username: "",
})
if err != nil {
    panic(err)
}
print(result)
```
