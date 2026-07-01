---
title: CheckUsername
description: TL method channels.checkUsername
---

# channels.checkUsername

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x10e6bd2c`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `username` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.CheckUsernameRequest{
    channel: nil, // InputChannel
    username: "",
})
if err != nil {
    panic(err)
}
print(result)
```
