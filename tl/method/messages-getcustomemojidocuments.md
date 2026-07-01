---
title: GetCustomEmojiDocuments
description: TL method messages.getCustomEmojiDocuments
---

# messages.getCustomEmojiDocuments

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xd9ab0f54`  
Returns: [Document](/tl/types#document)

## Parameters

| Name | Type | Description |
|---|---|---|
| `document_id` | `[]int64` | | 

## Example

```go
result, err := client.Raw(&tg.GetCustomEmojiDocumentsRequest{
    document_id: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
