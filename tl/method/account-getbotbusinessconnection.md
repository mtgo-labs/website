---
title: GetBotBusinessConnection
description: TL method account.getBotBusinessConnection
---

# account.getBotBusinessConnection

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x76a86270`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `connection_id` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetBotBusinessConnectionRequest{
    connection_id: "",
})
if err != nil {
    panic(err)
}
print(result)
```
