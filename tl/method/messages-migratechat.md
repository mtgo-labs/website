---
title: MigrateChat
description: TL method messages.migrateChat
---

# messages.migrateChat

<span class="layer-badge">Layer 227</span>

Constructor ID: `0xa2875319`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `chat_id` | `int64` | | 

## Example

```go
result, err := client.Raw(&tg.MigrateChatRequest{
    chat_id: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
