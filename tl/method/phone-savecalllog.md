---
title: SaveCallLog
description: TL method phone.saveCallLog
---

# phone.saveCallLog

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x41248786`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPhoneCall` | | 
| `file` | `InputFile` | | 

## Example

```go
result, err := client.Raw(&tg.SaveCallLogRequest{
    peer: nil, // InputPhoneCall
    file: nil, // InputFile
})
if err != nil {
    panic(err)
}
print(result)
```
