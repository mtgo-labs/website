---
title: UpdateBusinessWorkHours
description: TL method account.updateBusinessWorkHours
---

# account.updateBusinessWorkHours

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x4b00e066`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `business_work_hours` | `BusinessWorkHours` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateBusinessWorkHoursRequest{
    business_work_hours: nil, // BusinessWorkHours
})
if err != nil {
    panic(err)
}
print(result)
```
