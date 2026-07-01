---
title: DeleteAutoSaveExceptions
description: TL method account.deleteAutoSaveExceptions
---

# account.deleteAutoSaveExceptions

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x53bc0020`  
Returns: [Bool](/tl/types#bool)

## Example

```go
result, err := client.Raw(&tg.DeleteAutoSaveExceptionsRequest{
})
if err != nil {
    panic(err)
}
print(result)
```
