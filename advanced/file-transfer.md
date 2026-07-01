---
title: MTGo File Transfer
description: Learn how MTGo handles file uploads and downloads, including chunked transfer, progress tracking, and CDN fallback.
---

# MTGo File Transfer

MTGo provides a complete file transfer system that handles chunked uploads, resumable downloads, streaming, progress tracking, and automatic CDN fallback for large files.

## Upload Process

File uploads in MTProto work by splitting a file into chunks and sending them sequentially via the `upload.SaveFile` RPC. MTGo abstracts this into high-level functions.

::: tip Parallel by Default
File uploads and downloads are **parallelized by default**. Large files are split into chunks and transferred concurrently for maximum throughput. Uploads run on a **dedicated session** to avoid blocking update delivery and RPC calls.

Control parallelism with `Config.MaxConcurrentTrans` (default `0` = unlimited):
```go
client, _ := tg.NewClient(apiID, apiHash, &tg.Config{
    MaxConcurrentTrans: 4, // limit to 4 concurrent chunk transfers
})
```
:::


### Upload Flow

```
File → Split into chunks → Upload each chunk via UploadFile RPC → Receive UploadResult
```

Each chunk is typically 512 KB. The server reassembles the chunks and returns an `InputFile` that you can reference when sending media.

### UploadFile

Upload a file from a byte slice:

```go
uploadResult, err := client.UploadFile(ctx, "photo.jpg", fileBytes)
if err != nil {
    log.Fatal(err)
}
```

### UploadFromReader

Upload from any `io.Reader`, useful for streaming uploads:

```go
file, err := os.Open("document.pdf")
if err != nil {
    log.Fatal(err)
}
defer file.Close()

uploadResult, err := client.UploadFromReader(ctx, "document.pdf", file, fileSize)
```

### UploadFromFile

Upload directly from a file path. This is the simplest API:

```go
uploadResult, err := client.UploadFromFile(ctx, "./photo.jpg")
```

### Upload with Progress

All upload functions accept optional progress callbacks:

```go
uploadResult, err := client.UploadFromFile(ctx, "./large_video.mp4",
    tg.WithProgress(func(sent, total int64) {
        fmt.Printf("\rUpload: %.1f%%", float64(sent)/float64(total)*100)
    }),
)
```

## Download Process

### GetFileLocation

Before downloading, you need a file location. MTGo extracts this from media objects:

```go
fileLoc := client.GetFileLocation(photo)
```

This returns an `InputFileLocation` variant appropriate for the media type (photo, document, video, etc.).

### DownloadFile

Download to a byte slice:

```go
data, err := client.DownloadFile(ctx, inputFileLocation)
```

### DownloadToFile

Download directly to a file on disk:

```go
err := client.DownloadToFile(ctx, inputFileLocation, "./downloads/photo.jpg")
```

### Streaming Downloads with StreamFile

For large files, `StreamFile` provides a streaming download that returns an `io.Reader`:

```go
reader, err := client.StreamFile(ctx, inputFileLocation)
if err != nil {
    log.Fatal(err)
}
defer reader.Close()

io.Copy(outputFile, reader)
```

### Progress Tracking

Download functions support the `FileChunk` callback for progress monitoring:

```go
err := client.DownloadToFile(ctx, fileLoc, "./video.mp4",
    tg.WithDownloadProgress(func(received, total int64) {
        fmt.Printf("\rDownload: %.1f%%", float64(received)/float64(total)*100)
    }),
)
```

## CDN Fallback

For large files, Telegram may redirect downloads to a CDN. MTGo handles this automatically:

1. Client requests file from the home DC
2. If the response indicates a CDN redirect, MTGo connects to the CDN DC
3. The file is downloaded from the CDN using the provided CDN parameters
4. The CDN file is verified against the original DC's hash

This is transparent to the caller—no special handling is required.

## DC-Specific Sessions

File transfers often need to happen on a specific DC. MTGo manages this automatically via `GetSession`:

```go
// GetSession creates or returns a session connected to a specific DC
// Setting isMedia=true configures the session for file transfer
mediaSession := client.GetSession(dcID, true)
```

When you upload or download a file, MTGo:

1. Determines which DC holds the file (or uses the home DC for uploads)
2. Gets or creates a media session for that DC
3. Performs the transfer on the appropriate session
4. Returns the result to the caller

You rarely need to manage this manually—the upload/download functions handle DC routing internally.

## Working with Media Types

### Photos

Photos have multiple thumbnail sizes. To download a specific size:

```go
// Download the largest size
fileLoc := photo.Sizes[len(photo.Sizes)-1].Location
data, err := client.DownloadFile(ctx, fileLoc)
```

### Documents

Documents include files, videos, audio, and other attachments:

```go
fileLoc := document.Location
err := client.DownloadToFile(ctx, fileLoc, "./"+document.Filename)
```

### Videos

Videos are documents with a video MIME type. They may have thumbnail images:

```go
// Download video
err := client.DownloadToFile(ctx, videoDoc.Location, "./video.mp4")

// Download thumbnail
thumbLoc := videoDoc.Thumbs[0].Location
data, err := client.DownloadFile(ctx, thumbLoc)
```

## Complete Example: Upload and Send Photo

```go
package main

import (
    "context"
    "log"

    tg "github.com/mtgo-labs/mtgo/telegram"
)

func main() {
    client, err := tg.NewClient(apiID, apiHash, &tg.Config{
        BotToken:    botToken,
        SessionName: "photo_bot",
    })
    if err != nil {
        log.Fatal(err)
    }

    ctx := context.Background()

    // Upload the photo
    uploadResult, err := client.UploadFromFile(ctx, "./cat.jpg")
    if err != nil {
        log.Fatal(err)
    }

    // Send the uploaded photo
    _, err = client.SendMedia(ctx,
        tg.ChatRef("@username"),
        tg.NewPhotoMedia(uploadResult, "cat.jpg"),
        "Here is a photo!",
    )
    if err != nil {
        log.Fatal(err)
    }
}
```

## Complete Example: Download Received Media

```go
client.OnMessage(func(c *tg.Client, msg *types.Message) {
    if msg.Photo == nil {
        return
    }

    // Get the largest photo size
    photo := msg.Photo
    fileLoc := photo.Sizes[len(photo.Sizes)-1].Location

    // Download to file
    filename := fmt.Sprintf("photo_%d.jpg", msg.ID)
    err := client.DownloadToFile(context.Background(), fileLoc, "./downloads/"+filename,
        tg.WithDownloadProgress(func(received, total int64) {
            fmt.Printf("\rDownloading %s: %.1f%%", filename, float64(received)/float64(total)*100)
        }),
    )
    if err != nil {
        log.Printf("download error: %v", err)
        return
    }
    fmt.Printf("\nSaved %s\n", filename)
}, tg.All)
```
