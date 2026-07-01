---
title: ReportEncryptedSpam
description: TL method messages.reportEncryptedSpam
---

# messages.reportEncryptedSpam

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x4b0c8c0f`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputEncryptedChat` | | 

## Example

```go
result, err := client.Raw(&tg.ReportEncryptedSpamRequest{
    peer: nil, // InputEncryptedChat
})
if err != nil {
    panic(err)
}
print(result)
```
