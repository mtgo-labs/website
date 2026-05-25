---
title: DeletePhoneCallHistory
description: TL method messages.deletePhoneCallHistory
---

# messages.deletePhoneCallHistory

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xf9cbe409`  
Returns: [AffectedFoundMessages](/tl/types#affectedfoundmessages)

## Parameters

| Name | Type | Description |
|---|---|---|
| `revoke` | `bool` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.DeletePhoneCallHistoryRequest{
    revoke: false,
})
if err != nil {
    panic(err)
}
print(result)
```
