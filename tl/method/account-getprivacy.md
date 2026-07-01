---
title: GetPrivacy
description: TL method account.getPrivacy
---

# account.getPrivacy

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xdadbc950`  
Returns: [PrivacyRules](/tl/types#privacyrules)

## Parameters

| Name | Type | Description |
|---|---|---|
| `key` | `InputPrivacyKey` | | 

## Example

```go
result, err := client.Raw(&tg.GetPrivacyRequest{
    key: nil, // InputPrivacyKey
})
if err != nil {
    panic(err)
}
print(result)
```
