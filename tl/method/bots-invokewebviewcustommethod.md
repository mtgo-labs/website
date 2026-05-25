---
title: InvokeWebViewCustomMethod
description: TL method bots.invokeWebViewCustomMethod
---

# bots.invokeWebViewCustomMethod

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x087fc5e7`  
Returns: [DataJSON](/tl/types#datajson)

## Parameters

| Name | Type | Description |
|---|---|---|
| `bot` | `InputUser` | | 
| `custom_method` | `string` | | 
| `params` | `DataJSON` | | 

## Example

```go
result, err := client.Raw(&tg.InvokeWebViewCustomMethodRequest{
    bot: nil, // InputUser
    custom_method: "",
    params: nil, // DataJSON
})
if err != nil {
    panic(err)
}
print(result)
```
