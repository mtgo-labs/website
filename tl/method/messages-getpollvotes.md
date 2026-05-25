---
title: GetPollVotes
description: TL method messages.getPollVotes
---

# messages.getPollVotes

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xb86e380e`  
Returns: [VotesList](/tl/types#voteslist)

## Parameters

| Name | Type | Description |
|---|---|---|
| `peer` | `InputPeer` | | 
| `id` | `int32` | | 
| `option` | `[]byte` *(flags.0, optional)* | | 
| `offset` | `string` *(flags.1, optional)* | | 
| `limit` | `int32` | | 

## Example

```go
result, err := client.Raw(&tg.GetPollVotesRequest{
    peer: nil, // InputPeer
    id: 0,
    option: nil,
    offset: "",
    limit: 0,
})
if err != nil {
    panic(err)
}
print(result)
```
