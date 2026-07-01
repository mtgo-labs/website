---
title: FinishJob
description: TL method smsjobs.finishJob
---

# smsjobs.finishJob

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4f1ebf24`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `job_id` | `string` | | 
| `error` | `string` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.FinishJobRequest{
    job_id: "",
    error: "",
})
if err != nil {
    panic(err)
}
print(result)
```
