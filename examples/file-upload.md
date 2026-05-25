---
title: MTGo File Upload & Download
description: Build a bot that handles photo and document uploads and downloads with progress tracking.
---

# MTGo File Upload & Download

This example shows a bot that receives photos and documents, downloads them, and can re-upload files on command. It demonstrates the complete file transfer lifecycle with progress callbacks.

## Full Code

```go
package main

import (
    "context"
    "fmt"
    "log"
    "os"
    "path/filepath"
    "strings"

    tg "github.com/mtgo-labs/mtgo/telegram"
    "github.com/mtgo-labs/mtgo/telegram/types"
)

const downloadDir = "./downloads"

func main() {
    apiID := mustAtoi(mustEnv("API_ID"))
    apiHash := mustEnv("API_HASH")
    botToken := mustEnv("BOT_TOKEN")

    os.MkdirAll(downloadDir, 0755)

    client, err := tg.NewClient(apiID, apiHash, &tg.Config{
        BotToken:    botToken,
        SessionName: "file_bot",
        SavePeers:   true,
    })
    if err != nil {
        log.Fatalf("new client: %v", err)
    }

    // /upload <path> - upload a file from the server
    client.OnMessage(func(c *tg.Client, msg *types.Message) {
        path := strings.TrimSpace(msg.Args())
        if path == "" {
            msg.Reply("Usage: /upload <file_path>")
            return
        }

        // Check file exists
        info, err := os.Stat(path)
        if err != nil {
            msg.Reply(fmt.Sprintf("File not found: %s", path))
            return
        }

        // Notify user
        msg.Reply(fmt.Sprintf("Uploading %s (%.1f KB)...", filepath.Base(path), float64(info.Size())/1024))

        // Upload with progress
        uploadResult, err := client.UploadFromFile(context.Background(), path,
            tg.WithProgress(func(sent, total int64) {
                pct := float64(sent) / float64(total) * 100
                if int(pct)%25 == 0 {
                    fmt.Printf("  Upload: %.0f%%\n", pct)
                }
            }),
        )
        if err != nil {
            msg.Reply(fmt.Sprintf("Upload failed: %v", err))
            return
        }

        // Determine media type from extension
        ext := strings.ToLower(filepath.Ext(path))
        var media tg.InputMedia
        switch ext {
        case ".jpg", ".jpeg", ".png", ".webp":
            media = tg.NewPhotoMedia(uploadResult, filepath.Base(path))
        default:
            media = tg.NewDocumentMedia(uploadResult, filepath.Base(path))
        }

        // Send the uploaded file
        _, err = client.SendMedia(context.Background(),
            tg.ChatRef(msg.ChatID()),
            media,
            fmt.Sprintf("Uploaded: %s", filepath.Base(path)),
        )
        if err != nil {
            msg.Reply(fmt.Sprintf("Send failed: %v", err))
        }

    }, tg.Command("upload"))

    // Handle incoming photos - download them
    client.OnMessage(func(c *tg.Client, msg *types.Message) {
        if msg.Photo == nil {
            return
        }

        photo := msg.Photo
        // Get the largest size
        size := photo.Sizes[len(photo.Sizes)-1]
        fileLoc := size.Location

        filename := fmt.Sprintf("photo_%d.jpg", msg.ID)
        filepath := filepath.Join(downloadDir, filename)

        err := client.DownloadToFile(context.Background(), fileLoc, filepath,
            tg.WithDownloadProgress(func(received, total int64) {
                pct := float64(received) / float64(total) * 100
                if int(pct)%25 == 0 {
                    fmt.Printf("  Download %s: %.0f%%\n", filename, pct)
                }
            }),
        )
        if err != nil {
            log.Printf("download photo error: %v", err)
            return
        }

        log.Printf("Downloaded photo: %s", filepath)
        msg.Reply(fmt.Sprintf("Photo saved to %s", filepath))

    }, tg.Private)

    // Handle incoming documents - download them
    client.OnMessage(func(c *tg.Client, msg *types.Message) {
        if msg.Document == nil {
            return
        }

        doc := msg.Document
        fileLoc := doc.Location

        filename := doc.Filename
        if filename == "" {
            filename = fmt.Sprintf("doc_%d", msg.ID)
        }
        filepath := filepath.Join(downloadDir, filename)

        err := client.DownloadToFile(context.Background(), fileLoc, filepath,
            tg.WithDownloadProgress(func(received, total int64) {
                pct := float64(received) / float64(total) * 100
                if int(pct)%25 == 0 {
                    fmt.Printf("  Download %s: %.0f%%\n", filename, pct)
                }
            }),
        )
        if err != nil {
            log.Printf("download document error: %v", err)
            return
        }

        log.Printf("Downloaded document: %s", filepath)
        msg.Reply(fmt.Sprintf("Document saved to %s (%d bytes)", filepath, doc.Size))

    }, tg.Private)

    if err := client.Connect(0); err != nil {
        log.Fatalf("connect: %v", err)
    }
    defer client.Stop()

    bot, err := client.GetMe(context.Background())
    if err != nil {
        log.Fatalf("get me: %v", err)
    }
    fmt.Printf("Bot @%s is running\n", bot.Username)
    fmt.Printf("Downloads will be saved to %s\n", downloadDir)
    client.Idle()
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

### Uploading Files

The `/upload` command demonstrates the full upload flow:

**1. Upload the file:**

```go
uploadResult, err := client.UploadFromFile(ctx, "./photo.jpg",
    tg.WithProgress(func(sent, total int64) {
        fmt.Printf("Upload: %.1f%%\n", float64(sent)/float64(total)*100)
    }),
)
```

`UploadFromFile` handles chunking, parallel uploads, and retries internally.

**2. Create a media object:**

```go
media := tg.NewPhotoMedia(uploadResult, "photo.jpg")
// or for documents:
media := tg.NewDocumentMedia(uploadResult, "document.pdf")
```

**3. Send the media:**

```go
client.SendMedia(ctx, chatRef, media, "Optional caption")
```

### Downloading Photos

When a photo message arrives, MTGo parses the photo sizes:

```go
photo := msg.Photo
size := photo.Sizes[len(photo.Sizes)-1]  // largest size
fileLoc := size.Location
```

Photos have multiple sizes (thumbnail → full). The last size is typically the highest resolution.

### Downloading Documents

Documents are simpler—they have a single file location:

```go
doc := msg.Document
fileLoc := doc.Location
filename := doc.Filename
```

### Progress Tracking

Both uploads and downloads support progress callbacks:

```go
tg.WithProgress(func(sent, total int64) { ... })          // upload
tg.WithDownloadProgress(func(received, total int64) { ... }) // download
```

The callback receives the bytes transferred so far and the total size. Use these to build progress bars, log statistics, or update the user.

### File Type Detection

The example uses file extension to determine media type:

```go
switch ext {
case ".jpg", ".jpeg", ".png", ".webp":
    media = tg.NewPhotoMedia(uploadResult, name)
default:
    media = tg.NewDocumentMedia(uploadResult, name)
}
```

MTGo also supports specialized media types:

- `NewVideoMedia` — for `.mp4` files
- `NewAudioMedia` — for `.mp3`, `.ogg` files
- `NewAnimationMedia` — for `.gif` files

## Running

```bash
export API_ID=12345
export API_HASH=your_api_hash
export BOT_TOKEN=your_bot_token

go run main.go
```

- Send a photo or document to the bot in a private chat — it downloads to `./downloads/`
- Send `/upload /path/to/file` — it uploads and sends the file back
