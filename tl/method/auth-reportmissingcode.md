---
title: ReportMissingCode
description: TL method auth.reportMissingCode
---

# auth.reportMissingCode

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xcb9deff6`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `phone_number` | `string` | | 
| `phone_code_hash` | `string` | | 
| `mnc` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.ReportMissingCodeRequest{
    phone_number: "",
    phone_code_hash: "",
    mnc: "",
})
if err != nil {
    panic(err)
}
print(result)
```
