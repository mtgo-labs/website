---
title: UpdateBusinessIntro
description: TL method account.updateBusinessIntro
---

# account.updateBusinessIntro

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa614d034`  
Returns: [Bool](/tl/types#bool)

## Parameters

| Name | Type | Description |
|---|---|---|
| `intro` | `InputBusinessIntro` *(flags.0, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.UpdateBusinessIntroRequest{
    intro: nil, // InputBusinessIntro
})
if err != nil {
    panic(err)
}
print(result)
```
