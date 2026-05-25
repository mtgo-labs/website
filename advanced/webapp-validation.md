---
title: WebApp Validation
description: Validate Telegram Mini App (WebApp) init data with mtgo.
---

# WebApp Validation

mtgo provides built-in helpers for validating Telegram WebApp (Mini App) `initData` sent from the client to your server.

## One-Shot Validation

```go
data, err := telegram.ValidateWebAppData(botToken, initData, 5*time.Minute)
if err != nil {
    http.Error(w, "invalid webapp data", http.StatusUnauthorized)
    return
}
fmt.Printf("User ID: %d\n", data.User.ID)
fmt.Printf("Name: %s\n", data.User.FirstName)
```

`ValidateWebAppData` derives the secret key from the bot token and validates in one call.

## Reusable Secret Key

For repeated validation, derive the key once and reuse it:

```go
secretKey := telegram.CreateWebAppSecretKey(botToken)

// Use across multiple requests
data, err := telegram.ParseWebAppData(secretKey, initData, 5*time.Minute)
```

The key is computed as `HMAC-SHA256("WebAppData", botToken)` per the Telegram spec.

## WebAppInitData Fields

| Field | Type | Description |
|-------|------|-------------|
| `QueryID` | `string` | Query ID for answering WebApp queries |
| `User` | `*WebAppUser` | User info (ID, FirstName, LastName, Username, LanguageCode) |
| `ChatType` | `string` | "private", "group", "supergroup", "channel" |
| `ChatInstance` | `string` | Chat instance identifier |
| `StartParam` | `string` | Start parameter from deep link |
| `AuthDate` | `time.Time` | When the data was signed |
| `Hash` | `string` | HMAC hash |
| `Raw` | `map[string]string` | All raw key-value pairs |

## Error Handling

```go
data, err := telegram.ParseWebAppData(secretKey, initData, maxAge)
if err != nil {
    switch {
    case errors.Is(err, types.ErrWebAppDataOutdated):
        // Data is older than maxAge
    case errors.Is(err, types.ErrWebAppDataMismatch):
        // Hash verification failed — tampered data
    case errors.Is(err, types.ErrWebAppDataInvalid):
        // Malformed data or missing fields
    }
}
```

## maxAge Parameter

- `maxAge > 0` — reject data older than the specified duration
- `maxAge == 0` — skip the age check (useful for debugging)

## Answering WebApp Queries

```go
client.AnswerWebAppQuery(ctx, &tg.InputBotInlineMessageID{
    DC:     data.DC,
    ID:     data.QueryID,
}, result)
```
