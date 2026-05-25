---
title: ReportSponsoredMessage
description: TL method messages.reportSponsoredMessage
---

# messages.reportSponsoredMessage

<span class="layer-badge">Layer 225</span>

Constructor ID: `0x12cbf0c4`  
Returns: [SponsoredMessageReportResult](/tl/types#sponsoredmessagereportresult)

## Parameters

| Name | Type | Description |
|---|---|---|
| `random_id` | `[]byte` | | 
| `option` | `[]byte` | | 

## Example

```go
result, err := client.Raw(&tg.ReportSponsoredMessageRequest{
    random_id: nil,
    option: nil,
})
if err != nil {
    panic(err)
}
print(result)
```
