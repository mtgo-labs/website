---
title: GetAdminLog
description: TL method channels.getAdminLog
---

# channels.getAdminLog

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x33ddf480`  
Returns: [AdminLogResults](/tl/types#adminlogresults)

## Parameters

| Name | Type | Description |
|---|---|---|
| `channel` | `InputChannel` | | 
| `q` | `string` | | 
| `events_filter` | `ChannelAdminLogEventsFilter` *(flags.0, optional)* | | 
| `admins` | `[]InputUser` *(flags.1, optional)* | | 
| `max_id` | `int64` | | 
| `min_id` | `int64` | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetAdminLogRequest{
    channel: nil, // InputChannel
    q: "",
    events_filter: nil, // ChannelAdminLogEventsFilter
    admins: nil,
    max_id: 0,
    min_id: 0,
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
