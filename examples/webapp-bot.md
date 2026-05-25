---
title: WebApp Validation Bot
description: Validate Telegram Mini App (WebApp) init data with an HTTP server alongside the bot client.
---

# WebApp Validation Bot

This example shows how to validate Telegram Mini App `init_data` using MTGo's built-in WebApp validation. The bot connects to Telegram and starts an HTTP server that validates incoming WebApp data.

## Full Code

```go
package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/mtgo-labs/mtgo/telegram"
)

var client *telegram.Client

func main() {
	apiID := mustEnv("API_ID")
	apiHash := mustEnv("API_HASH")
	botToken := mustEnv("BOT_TOKEN")
	port := envOrDefault("PORT", "8080")

	var err error
	client, err = telegram.NewClient(mustAtoi(apiID), apiHash, &telegram.Config{
		BotToken:    botToken,
		SessionName: "webapp_bot",
	})
	if err != nil {
		log.Fatalf("new client: %v", err)
	}

	if err := client.Connect(0); err != nil {
		log.Fatalf("connect: %v", err)
	}
	defer client.Stop()

	bot, err := client.GetMe(context.Background())
	if err != nil {
		log.Fatalf("get me: %v", err)
	}
	fmt.Printf("bot @%s connected\n", bot.Username)

	secretKey := telegram.CreateWebAppSecretKey(botToken)

	// Full validation with parsed fields
	http.HandleFunc("/validate", func(w http.ResponseWriter, r *http.Request) {
		initData := r.URL.Query().Get("init_data")
		if initData == "" {
			http.Error(w, "missing init_data parameter", http.StatusBadRequest)
			return
		}

		data, err := telegram.ParseWebAppData(secretKey, initData, 5*time.Minute)
		if err != nil {
			http.Error(w, fmt.Sprintf("validation failed: %v", err), http.StatusUnauthorized)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
			"user_id":     data.User.ID,
			"first_name":  data.User.FirstName,
			"username":    data.User.Username,
			"auth_date":   data.AuthDate,
			"query_id":    data.QueryID,
			"chat_type":   data.ChatType,
			"start_param": data.StartParam,
		})
	})

	// Simple validation shortcut
	http.HandleFunc("/validate-simple", func(w http.ResponseWriter, r *http.Request) {
		initData := r.URL.Query().Get("init_data")
		if initData == "" {
			http.Error(w, "missing init_data parameter", http.StatusBadRequest)
			return
		}

		data, err := telegram.ValidateWebAppData(botToken, initData, 5*time.Minute)
		if err != nil {
			http.Error(w, fmt.Sprintf("validation failed: %v", err), http.StatusUnauthorized)
			return
		}

		fmt.Fprintf(w, "authenticated user %d (@%s)", data.User.ID, data.User.Username)
	})

	fmt.Printf("webapp validation server listening on :%s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func mustEnv(key string) string {
	v := os.Getenv(key)
	if v == "" {
		log.Fatalf("environment variable %s is required", key)
	}
	return v
}

func envOrDefault(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}

func mustAtoi(s string) int32 {
	var n int32
	if _, err := fmt.Sscanf(s, "%d", &n); err != nil {
		log.Fatalf("invalid integer %q: %v", s, err)
	}
	return n
}
```

## How It Works

### Creating the Secret Key

```go
secretKey := telegram.CreateWebAppSecretKey(botToken)
```

Derives a HMAC-SHA256 secret key from the bot token. This is used to verify the integrity of `init_data` received from Telegram Web Apps.

### Full Validation with ParseWebAppData

```go
data, err := telegram.ParseWebAppData(secretKey, initData, 5*time.Minute)
```

Validates the `init_data` string and parses it into a structured `WebAppData` object:

- Verifies the HMAC-SHA256 signature
- Checks `auth_date` is within the allowed time window (5 minutes)
- Parses user info, query ID, chat type, and start parameters

Returns an error if validation fails (tampered data, expired, wrong signature).

### Simple Validation with ValidateWebAppData

```go
data, err := telegram.ValidateWebAppData(botToken, initData, 5*time.Minute)
```

A convenience function that creates the secret key internally and validates in one call. Same result as `ParseWebAppData` but simpler for basic use cases.

### WebAppData Fields

| Field | Type | Description |
|-------|------|-------------|
| `data.User.ID` | `int64` | Telegram user ID |
| `data.User.FirstName` | `string` | User's first name |
| `data.User.Username` | `string` | Username (may be empty) |
| `data.AuthDate` | `int64` | Unix timestamp of auth |
| `data.QueryID` | `string` | Inline query ID (for answering) |
| `data.ChatType` | `string` | "sender", "private", "group", etc. |
| `data.StartParam` | `string` | Start parameter from the WebApp URL |

### Time Window

```go
telegram.ParseWebAppData(secretKey, initData, 5*time.Minute)
```

The third argument is the maximum age of the `init_data`. Data older than this is rejected. Use a short window (1-5 minutes) to prevent replay attacks.

## Running

```bash
export API_ID=12345
export API_HASH=your_api_hash
export BOT_TOKEN=your_bot_token
export PORT=8080  # optional

go run main.go
```

Test with curl:

```bash
curl "http://localhost:8080/validate?init_data=your_init_data_here"
```

::: tip
This example runs the Telegram client and HTTP server in the same process. You can use the validation functions independently without a Telegram client if you only need server-side validation.
:::
