---
title: ToggleUsername
description: TL method account.toggleUsername
---

# account.toggleUsername

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x58d6b376`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `username` | `string` | | 
| `active` | `bool` | | 

## Example

```go
result, err := client.Raw(&tg.ToggleUsernameRequest{
    username: "",
    active: false,
})
if err != nil {
    panic(err)
}
print(result)
```
