---
title: GetSearchResultsCalendar
description: TL method messages.getSearchResultsCalendar
---

# messages.getSearchResultsCalendar

<span class="layer-badge">Layer 227</span>

Constructor ID: `0x6aa3f6bd`  
Returns: [SearchResultsCalendar](/tl/types#searchresultscalendar)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `saved_peer_id` | `InputPeer` *(flags.2, optional)* | | 
| `filter` | `MessagesFilter` | | 
| `offset_id` | `int32` | | 
| `offset_date` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetSearchResultsCalendarRequest{
    peer: nil, // InputPeer
    saved_peer_id: nil, // InputPeer
    filter: nil, // MessagesFilter
    offset_id: 0,
    offset_date: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
