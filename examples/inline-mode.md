---
title: MTGo Inline Mode Bot
description: Build a bot that responds to inline queries with article results and handles chosen results.
---

# MTGo Inline Mode Bot

Inline mode lets users interact with your bot in any chat by typing `@botname query`. This example shows how to handle inline queries and return article results.

## Full Code

```go
package main

import (
    "context"
    "fmt"
    "log"
    "os"
    "time"

    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/mtgo/telegram/types"
)

func main() {
    apiID := mustAtoi(mustEnv("API_ID"))
    apiHash := mustEnv("API_HASH")
    botToken := mustEnv("BOT_TOKEN")

    client, err := tg.NewClient(apiID, apiHash, &tg.Config{
        BotToken:    botToken,
        SessionName: "inline_bot",
        SavePeers:   true,
    })
    if err != nil {
        log.Fatalf("new client: %v", err)
    }

    // Handle inline queries
    client.OnInlineQuery(func(c *tg.Client, query *types.InlineQuery) {
        results := buildResults(query.Query)

        _, err := c.AnswerInlineQuery(context.Background(), query.ID, results)
        if err != nil {
            log.Printf("answer inline query error: %v", err)
        }
    })

    // Handle chosen inline results (when user selects a result)
    client.OnChosenInlineResult(func(c *tg.Client, result *types.ChosenInlineResult) {
        log.Printf("User %d chose result: %s (query: %s)",
            result.UserID,
            result.ResultID,
            result.Query,
        )
    })

    if err := client.Connect(0); err != nil {
        log.Fatalf("connect: %v", err)
    }
    defer client.Stop()

    bot, err := client.GetMe(context.Background())
    if err != nil {
        log.Fatalf("get me: %v", err)
    }
    fmt.Printf("Bot @%s is running (try @%s <query> in any chat)\n", bot.Username, bot.Username)
    client.Idle()
}

func buildResults(query string) []tg.InputBotInlineResult {
    if query == "" {
        return defaultResults()
    }

    return []tg.InputBotInlineResult{
        {
            ID:      "1",
            Type:    "article",
            Title:   fmt.Sprintf("Result for: %s", query),
            Description: fmt.Sprintf("You searched for \"%s\"", query),
            InputMessageContent: tg.InputTextMessageContent{
                MessageText: fmt.Sprintf("Search result: *%s*", query),
                ParseMode:   "Markdown",
            },
        },
        {
            ID:      "2",
            Type:    "article",
            Title:   fmt.Sprintf("Uppercase: %s", query),
            Description: "Convert to uppercase",
            InputMessageContent: tg.InputTextMessageContent{
                MessageText: fmt.Sprintf("`%s`", upper(query)),
                ParseMode:   "Markdown",
            },
        },
        {
            ID:      "3",
            Type:    "article",
            Title:   fmt.Sprintf("Reversed: %s", reverse(query)),
            Description: "Reverse the text",
            InputMessageContent: tg.InputTextMessageContent{
                MessageText: reverse(query),
            },
        },
        {
            ID:      "4",
            Type:    "article",
            Title:   "Timestamp",
            Description: fmt.Sprintf("Current time for query: %s", query),
            InputMessageContent: tg.InputTextMessageContent{
                MessageText: fmt.Sprintf("%s — %s", query, time.Now().Format(time.RFC1123)),
            },
        },
    }
}

func defaultResults() []tg.InputBotInlineResult {
    return []tg.InputBotInlineResult{
        {
            ID:      "help",
            Type:    "article",
            Title:   "How to use this bot",
            Description: "Type any text after @botname to search",
            InputMessageContent: tg.InputTextMessageContent{
                MessageText: "Type @botname followed by any text to get results!",
            },
        },
        {
            ID:      "hello",
            Type:    "article",
            Title:   "Hello World",
            Description: "Send a greeting",
            InputMessageContent: tg.InputTextMessageContent{
                MessageText: "Hello from the inline bot!",
            },
        },
    }
}

func upper(s string) string {
    result := make([]byte, 0, len(s))
    for i := 0; i < len(s); i++ {
        c := s[i]
        if c >= 'a' && c <= 'z' {
            c -= 32
        }
        result = append(result, c)
    }
    return string(result)
}

func reverse(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}

func mustEnv(key string) string {
    v := os.Getenv(key)
    if v == "" {
        log.Fatalf("environment variable %s is required", key)
    }
    return v
}

func mustAtoi(s string) int {
    var n int
    if _, err := fmt.Sscanf(s, "%d", &n); err != nil {
        log.Fatalf("invalid integer %q: %v", s, err)
    }
    return n
}
```

## How It Works

### OnInlineQuery Handler

```go
client.OnInlineQuery(func(c *tg.Client, query *types.InlineQuery) {
    results := buildResults(query.Query)
    c.AnswerInlineQuery(context.Background(), query.ID, results)
})
```

- **`query.Query`** — the text the user typed after `@botname`
- **`query.ID`** — unique ID for this inline query (required for the response)
- **`AnswerInlineQuery`** — sends the results back to the user's client

The handler fires every time the user types or modifies their query. You should respond quickly—Telegram shows a loading indicator until you answer.

### Building Inline Results

Each result is an `InputBotInlineResult`:

```go
tg.InputBotInlineResult{
    ID:      "1",              // unique result ID
    Type:    "article",        // result type
    Title:   "Result title",   // shown in the results list
    Description: "Subtitle",   // shown below the title
    InputMessageContent: tg.InputTextMessageContent{
        MessageText: "Sent message text",  // what gets sent when selected
        ParseMode:   "Markdown",            // optional formatting
    },
}
```

**Result types:**

| Type | Description |
|------|-------------|
| `article` | Text article (most common) |
| `photo` | Photo result |
| `gif` | GIF animation |
| `video` | Video result |
| `audio` | Audio result |
| `document` | File result |
| `location` | Location on a map |
| `venue` | Venue with address |
| `contact` | Contact result |
| `game` | Game result |
| `sticker` | Sticker result |

### InputMessageContent

`InputMessageContent` determines what message gets sent when the user selects a result. The two main types:

**Text message:**

```go
tg.InputTextMessageContent{
    MessageText:       "Hello *world*",
    ParseMode:         "Markdown",
    DisableWebPagePreview: true,
}
```

**Media message:**

```go
tg.InputMediaMessageContent{
    Type:  "photo",
    Media: inputFile,
}
```

### OnChosenInlineResult

```go
client.OnChosenInlineResult(func(c *tg.Client, result *types.ChosenInlineResult) {
    log.Printf("User chose: %s", result.ResultID)
})
```

This fires after the user selects a result. Useful for analytics, logging, or triggering follow-up actions. Not all inline selections trigger this—only when the result is sent to an actual chat.

### Default Results

When the query is empty (user just typed `@botname`), return helpful default results:

```go
if query == "" {
    return defaultResults()
}
```

This is a good UX practice—don't show an empty list.

## Enabling Inline Mode

Before the bot can receive inline queries, enable inline mode via [@BotFather](https://t.me/BotFather):

1. Send `/setinline` to @BotFather
2. Select your bot
3. Set a placeholder text (e.g., "Search...")

## Running

```bash
export API_ID=12345
export API_HASH=your_api_hash
export BOT_TOKEN=your_bot_token

go run main.go
```

Then type `@yourbotname hello` in any chat to see the inline results.
