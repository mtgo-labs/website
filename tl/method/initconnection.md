---
title: InitConnection
description: TL method initConnection
---

# initConnection

<span class="layer-badge">Layer 225</span>

Constructor ID: `0xc1cd5ea9`  
Returns: [X](/tl/types#x)

## Parameters

| Name | Type | Description |
|---|---|---|
| `api_id` | `int32` | | 
| `device_model` | `string` | | 
| `system_version` | `string` | | 
| `app_version` | `string` | | 
| `system_lang_code` | `string` | | 
| `lang_pack` | `string` | | 
| `lang_code` | `string` | | 
| `proxy` | `InputClientProxy` *(flags.0, optional)* | | 
| `params` | `JSONValue` *(flags.1, optional)* | | 
| `query` | `TLObject` | | 

## Example

```go
result, err := client.Raw(&tg.InitConnectionRequest{
    api_id: 0,
    device_model: "",
    system_version: "",
    app_version: "",
    system_lang_code: "",
    lang_pack: "",
    lang_code: "",
    proxy: nil, // InputClientProxy
    params: nil, // JSONValue
    query: nil, // TLObject
})
if err != nil {
    panic(err)
}
print(result)
```
