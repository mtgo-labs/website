---
title: Raw RPC & Invoke
description: Low-level RPC access — Invoke, InvokeRaw, InvokeWithRawResult, InvokeJSON, InvokeRawJSON, and the typed RPC API.
---

# Raw RPC & Invoke

When high-level methods aren't enough, use the generated TL RPC methods. For a full list of available Telegram API methods, refer to:

- **https://corefork.telegram.org/methods** — official Telegram API method reference
- **https://corefork.telegram.org/schema** — raw TL schema

## Typed RPC via Raw() / RPC()

```go
rpc := client.Raw() // or client.RPC()

// Typed TL method
result, err := rpc.AuthSendCode(ctx, &tg.AuthSendCodeRequest{
    PhoneNumber: "+1234567890",
    APIID:       apiID,
    APIHash:     apiHash,
    Settings:    &tg.CodeSettings{},
})

// Resolve a username
peer, err := rpc.ContactsResolveUsername(ctx, &tg.ContactsResolveUsernameRequest{
    Username: "durov",
})
```

`Raw()` and `RPC()` return the same `*tg.RPCClient` — they are aliases. `RPC()` is preferred when the intent is typed API calls; `Raw()` is the older name.

## Invoke — Standard RPC

```go
result, err := client.Invoke(ctx, &tg.MessagesGetHistoryRequest{
    Peer:  &tg.InputPeerChannel{ChannelID: channelID, AccessHash: hash},
    Limit: 100,
}, 3, 10*time.Second)
```

Parameters:
- `query` — the TL request object
- `retries` — number of retry attempts
- `timeout` — per-request timeout

This is the base invoke method. It wraps errors and handles DC migration (error code 303) automatically.

## InvokeRaw — Skip Error Wrapping

```go
raw, err := client.InvokeRaw(ctx, &tg.MessagesGetHistoryRequest{
    Peer:  &tg.InputPeerChannel{ChannelID: channelID, AccessHash: hash},
    Limit: 100,
}, 3, 10*time.Second)
```

Same signature as `Invoke` but returns the raw response without wrapping errors. Useful when the caller needs to inspect the original error (e.g. `*tgerr.Error`).

Parameters:
- `query` — the TL request object
- `retries` — number of retry attempts
- `timeout` — per-request timeout

## InvokeWithRawResult — Raw MTProto Bytes

```go
rawBytes, err := client.InvokeWithRawResult(ctx, &tg.PingRequest{PingID: rand.Int63()})
```

Returns the raw `rpc_result.result:Object` payload bytes without TL deserialization. RPC errors are returned as `*tgerr.Error`. The returned bytes are not gzip-unpacked; if the server returned `gzip_packed`, the bytes start with the gzip_packed constructor.

Use when:
- Doing bulk operations and don't need the full typed response
- Only need part of the response and want to skip full deserialization
- Implementing a custom parser

`InvokeWithRawByte` is a deprecated alias for this method — use `InvokeWithRawResult` instead.

## InvokeJSON — Dynamic RPC via JSON

Call any TL method by name with JSON parameters:

```go
resp, err := client.InvokeJSON(ctx, "messages.SendMessage", []byte(`{
    "peer": "inputPeerSelf",
    "message": "hello"
}`), false)
```

Parameters:
- `functionName` — TL method name (e.g. `"messages.sendMessage"`)
- `payload` — JSON-encoded parameters (interface fields need `"_"` constructor key)
- `useSnakeCase` — `true` to use snake_case in JSON output

Returns the raw JSON response body from the server.

## InvokeRawJSON — Raw JSON RPC

```go
resp, err := client.InvokeRawJSON(ctx, []byte(`{
    "method": "messages.SendMessage",
    "params": {
        "peer": "inputPeerSelf",
        "message": "hello"
    }
}`))
```

Takes a complete JSON-RPC-style request and returns the raw JSON response. Lower-level than `InvokeJSON`.

## Context Deadlines

Context deadlines are extracted automatically for RPC timeouts. When no deadline is set, `Config.ReqTimeout` (default 60s) is used:

```go
ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
defer cancel()
result, err := rpc.MessagesGetMessages(ctx, req)
```
