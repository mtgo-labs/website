---
title: GetSmsJob
description: TL method smsjobs.getSmsJob
---

# smsjobs.getSmsJob

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x778d902f`  
Returns: [SmsJob](/tl/types#smsjob)

## Parameters

| Name | Type | Description |
|---|---|---|
| `job_id` | `string` | | 

## Example

```go
result, err := client.Raw(&tg.GetSmsJobRequest{
    job_id: "",
})
if err != nil {
    panic(err)
}
print(result)
```
