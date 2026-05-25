---
title: GetRequirementsToContact
description: TL method users.getRequirementsToContact
---

# users.getRequirementsToContact

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xd89a83a3`  
Returns: [RequirementToContact](/tl/types#requirementtocontact)

## Parameters

| Name | Type | Description |
|---|---|---|
| `id` | `[]InputUser` | | 

## Example

```go
result, err := client.Raw(&tg.GetRequirementsToContactRequest{
    id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
