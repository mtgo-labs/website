---
title: SetPrivacy
description: TL method account.setPrivacy
---

# account.setPrivacy

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xc9f81ce8`  
Returns: [PrivacyRules](/tl/types#privacyrules)

## Parameters

| Name | Type | Description |
|---|---|---|
| `key` | `InputPrivacyKey` | | 
| `rules` | `[]InputPrivacyRule` | | 

## Example

```go
result, err := client.Raw(&tg.SetPrivacyRequest{
    key: nil, // InputPrivacyKey
    rules: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
