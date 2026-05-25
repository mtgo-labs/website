---
title: Keyboard & Callback Bot
description: Build a bot with inline keyboards, reply keyboards, text entities, and callback query handling.
---

# Keyboard & Callback Bot

This example demonstrates inline keyboards, reply keyboards, text formatting with entities, callback queries, force reply, and keyboard removal.

## Full Code

```go
package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/mtgo-labs/mtgo/telegram"
	"github.com/mtgo-labs/mtgo/telegram/params"
	"github.com/mtgo-labs/mtgo/telegram/types"
)

func main() {
	apiID := mustEnv("API_ID")
	apiHash := mustEnv("API_HASH")
	botToken := mustEnv("BOT_TOKEN")

	client, err := telegram.NewClient(mustAtoi(apiID), apiHash, &telegram.Config{
		BotToken:    botToken,
		SessionName: "keyboard_bot",
		SavePeers:   true,
	})
	if err != nil {
		log.Fatalf("new client: %v", err)
	}

	// /start — welcome with inline URL button.
	client.OnMessage(func(ctx *telegram.Context, msg *types.Message) {
		text := "Here is some bot commands:\n\n"
		text += "- /keyboard - show keyboard\n"
		text += "- /inline - show inline keyboard\n"
		text += "- /entities - show formatted text\n"
		text += "- /remove - remove keyboard\n"
		text += "- /force - force reply"

		_, _ = ctx.Reply(text, &params.SendMessage{
			ReplyMarkup: telegram.Keyboard().
				URL("GitHub", "https://github.com/mtgo-labs/mtgo").
				Build(),
		})
	}, telegram.Command("start"))

	// /inline — inline keyboard with callback buttons.
	client.OnMessage(func(ctx *telegram.Context, msg *types.Message) {
		_, _ = ctx.Reply("This is an inline keyboard", &params.SendMessage{
			ReplyMarkup: telegram.Keyboard().
				Callback("OwO", "OwO").
				Callback("UwU", "UwU").
				Next().
				URL("Docs", "https://example.com").
				Build(),
		})
	}, telegram.Command("inline"))

	// /keyboard — reply keyboard.
	client.OnMessage(func(ctx *telegram.Context, msg *types.Message) {
		_, _ = ctx.Reply("This is a keyboard", &params.SendMessage{
			ReplyMarkup: telegram.Keyboard().
				Text("OwO").
				Text("UwU").
				BuildReply(telegram.ReplyOpts{Resize: true, OneTime: true}),
		})
	}, telegram.Command("keyboard"))

	// /entities — demonstrate formatted text using params.Entities.
	client.OnMessage(func(ctx *telegram.Context, msg *types.Message) {
		text := "Hello World"
		_, _ = ctx.Reply(text, &params.SendMessage{
			Entities: params.Entities(
				params.Bold(0, 5),
				params.Italic(6, 5),
			),
		})
	}, telegram.Command("entities"))

	// /formatted — more advanced entity formatting example.
	client.OnMessage(func(ctx *telegram.Context, msg *types.Message) {
		text := "Bold Italic Code Pre Underline Strike Spoiler"
		_, _ = ctx.Reply(text, &params.SendMessage{
			Entities: params.Entities(
				params.Bold(0, 4),
				params.Italic(5, 6),
				params.Code(12, 4),
				params.Pre(17, 3, "go"),
				params.Underline(21, 9),
				params.Strikethrough(31, 6),
				params.Spoiler(38, 7),
			),
		})
	}, telegram.Command("formatted"))

	// /remove — remove reply keyboard.
	client.OnMessage(func(ctx *telegram.Context, msg *types.Message) {
		_, _ = ctx.Reply("Keyboards removed", &params.SendMessage{
			ReplyMarkup: telegram.RemoveKeyboard(),
		})
	}, telegram.Command("remove"))

	// /force — force reply.
	client.OnMessage(func(ctx *telegram.Context, msg *types.Message) {
		_, _ = ctx.Reply("This is a force reply", &params.SendMessage{
			ReplyMarkup: telegram.ForceReplyMarkup(),
		})
	}, telegram.Command("force"))

	// Echo any other text.
	client.OnMessage(func(ctx *telegram.Context, msg *types.Message) {
		_, _ = ctx.Reply(fmt.Sprintf("You said %q", msg.Text))
	})

	// Handle inline keyboard button presses.
	client.OnCallbackQuery(func(ctx *telegram.Context) {
		data := string(ctx.CallbackQuery.Data)
		_, _ = ctx.CallbackEditText(
			fmt.Sprintf("You pressed %s", data),
			&params.EditMessage{
				ReplyMarkup: telegram.Keyboard().
					URL("GitHub", "https://github.com/mtgo-labs/mtgo").
					Build(),
			},
		)
		_ = ctx.Answer("", false)
	})

	if err := client.Connect(0); err != nil {
		log.Fatalf("connect: %v", err)
	}
	defer client.Stop()

	bot, err := client.GetMe(context.Background())
	if err != nil {
		log.Fatalf("get me: %v", err)
	}

	fmt.Println("=== Keyboard Bot ===")
	fmt.Printf("  ID:   %d\n", bot.ID)
	fmt.Printf("  Name: %s\n", bot.FirstName)
	fmt.Println("────────────────────")
	fmt.Println("keyboard bot running, press Ctrl+C to stop")

	client.Idle()
}

func mustEnv(key string) string {
	v := os.Getenv(key)
	if v == "" {
		log.Fatalf("environment variable %s is required", key)
	}
	return v
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

### Inline Keyboards

Inline keyboards are buttons attached to a message. They use the builder pattern:

```go
telegram.Keyboard().
    Callback("Button Label", "callback_data").
    URL("Link", "https://example.com").
    Build()
```

- **`Callback(label, data)`** — sends a callback query when pressed (data up to 64 bytes)
- **`URL(label, url)`** — opens a URL when pressed
- **`Next()`** — moves to the next row
- **`Build()`** — returns a `ReplyMarkup` for inline keyboards

### Reply Keyboards

Reply keyboards replace the user's keyboard with custom buttons:

```go
telegram.Keyboard().
    Text("Button 1").
    Text("Button 2").
    BuildReply(telegram.ReplyOpts{
        Resize:  true,
        OneTime: true,
    })
```

- **`Text(label)`** — sends the label as a text message when pressed
- **`Resize: true`** — resize keyboard to fit button labels
- **`OneTime: true`** — hide keyboard after first use

### Callback Queries

When a user presses an inline button, a callback query is received:

```go
client.OnCallbackQuery(func(ctx *telegram.Context) {
    data := string(ctx.CallbackQuery.Data)
    // Edit the original message
    ctx.CallbackEditText(fmt.Sprintf("You pressed %s", data), nil)
    // Answer the callback (required, removes loading spinner)
    ctx.Answer("", false)
})
```

- **`ctx.CallbackQuery.Data`** — the data string from the button
- **`ctx.CallbackEditText`** — edits the message the button was attached to
- **`ctx.Answer(text, showAlert)`** — acknowledges the callback. Required to remove the loading spinner. Set `showAlert` to `true` for a popup alert.

### Text Entities

Format text without parse modes by specifying entity ranges:

```go
params.Entities(
    params.Bold(0, 5),       // bold from offset 0, length 5
    params.Italic(6, 5),     // italic from offset 6, length 5
    params.Code(12, 4),      // monospace from offset 12, length 4
    params.Pre(17, 3, "go"), // preformatted code block with language
    params.Underline(21, 9),
    params.Strikethrough(31, 6),
    params.Spoiler(38, 7),
)
```

Each entity takes `offset` and `length` in UTF-16 code units. `params.Pre` also accepts a language string.

### Keyboard Removal

```go
telegram.RemoveKeyboard()
```

Removes the reply keyboard from the user's chat. Use this when you no longer need the custom keyboard.

### Force Reply

```go
telegram.ForceReplyMarkup()
```

Forces the user to reply to the message. The user's text input field becomes a reply to your message.

## Running

```bash
export API_ID=12345
export API_HASH=your_api_hash
export BOT_TOKEN=your_bot_token

go run main.go
```

Try `/start`, `/inline`, `/keyboard`, `/entities`, `/formatted`, `/remove`, and `/force`.
