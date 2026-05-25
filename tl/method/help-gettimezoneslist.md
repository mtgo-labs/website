---
title: GetTimezonesList
description: TL method help.getTimezonesList
---

# help.getTimezonesList

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x49b30240`  
Returns: [TimezonesList](/tl/types#timezoneslist)

## Parameters

| Name | Type | Description |
|---|---|---|
| `hash` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetTimezonesListRequest{
    hash: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
