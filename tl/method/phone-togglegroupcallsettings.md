---
title: ToggleGroupCallSettings
description: TL method phone.toggleGroupCallSettings
---

# phone.toggleGroupCallSettings

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x974392f2`  
Returns: [Updates](/tl/types#updates)

## Parameters

| Name | Type | Description |
|---|---|---|
| `reset_invite_hash` | `bool` *(flags.1, optional)* | | 
| `call` | `InputGroupCall` | | 
| `join_muted` | `bool` *(flags.0, optional)* | | 
| `messages_enabled` | `bool` *(flags.2, optional)* | | 
| `send_paid_messages_stars` | `int64` *(flags.3, optional)* | | 

## Example

```go
result, err := client.Raw(&tg.ToggleGroupCallSettingsRequest{
    reset_invite_hash: false,
    call: nil, // InputGroupCall
    join_muted: false,
    messages_enabled: false,
    send_paid_messages_stars: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
