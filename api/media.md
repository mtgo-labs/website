---
title: MTGo Media & File Transfer API
description: Upload, download, and stream files through Telegram using MTGo.
---

# MTGo Media & File Transfer API

MTGo provides a comprehensive media and file transfer API for uploading and downloading files through Telegram's distributed storage system. Files are automatically split into parts, encrypted, and distributed across Telegram's data centers.

## Types

### FileChunk

```go
type FileChunk struct {
    Offset int64 // Byte offset of the current chunk
    Bytes  int64 // Bytes transferred so far
    Total  int64 // Total file size in bytes
}
```

Progress callback receives `FileChunk` on each part transfer.

### UploadResult

```go
type UploadResult struct {
    FileID int64 // Unique file identifier
    Parts  int   // Number of uploaded parts
    // Additional fields provided by Telegram
}
```

Returned by all upload methods.

---

## Upload

### UploadFile

```go
func (c *Client) UploadFile(ctx context.Context, path string) (*UploadResult, error)
```

Uploads a file from disk by path.

| Parameter | Type | Description |
|-----------|------|-------------|
| `ctx` | `context.Context` | Request context |
| `path` | `string` | Absolute or relative file path |

| Return | Description |
|--------|-------------|
| `*UploadResult` | Uploaded file metadata |
| `error` | File access or upload error |

```go
result, err := client.UploadFile(ctx, "/path/to/photo.jpg")
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Uploaded file ID: %d, parts: %d\n", result.FileID, result.Parts)
```

### UploadFromReader

```go
func (c *Client) UploadFromReader(ctx context.Context, reader io.Reader, size int64, fileName string) (*UploadResult, error)
```

Uploads file content from an `io.Reader`.

| Parameter | Type | Description |
|-----------|------|-------------|
| `ctx` | `context.Context` | Request context |
| `reader` | `io.Reader` | Data source |
| `size` | `int64` | Total size in bytes (required) |
| `fileName` | `string` | File name for the upload |

```go
buf := bytes.NewReader(data)
result, err := client.UploadFromReader(ctx, buf, int64(len(data)), "document.pdf")
if err != nil {
    log.Fatal(err)
}
```

### UploadFromFile

```go
func (c *Client) UploadFromFile(ctx context.Context, file *os.File) (*UploadResult, error)
```

Uploads from an already-opened `*os.File`. Useful when you need to control file opening yourself.

| Parameter | Type | Description |
|-----------|------|-------------|
| `ctx` | `context.Context` | Request context |
| `file` | `*os.File` | Open file handle |

```go
f, err := os.Open("video.mp4")
if err != nil {
    log.Fatal(err)
}
defer f.Close()

result, err := client.UploadFromFile(ctx, f)
if err != nil {
    log.Fatal(err)
}
```

---

## Download

### DownloadFile

```go
func (c *Client) DownloadFile(
    ctx context.Context,
    location tg.InputFileLocationClass,
    dcID int32,
    progress func(FileChunk),
) ([]byte, error)
```

Downloads a file to memory. Returns the full file content as a byte slice.

| Parameter | Type | Description |
|-----------|------|-------------|
| `ctx` | `context.Context` | Request context |
| `location` | `tg.InputFileLocationClass` | File location from Telegram |
| `dcID` | `int32` | Data center ID |
| `progress` | `func(FileChunk)` | Optional progress callback |

| Return | Description |
|--------|-------------|
| `[]byte` | File content |
| `error` | Download or network error |

```go
data, err := client.DownloadFile(ctx, fileLoc, dcID, func(chunk media.FileChunk) {
    pct := float64(chunk.Bytes) / float64(chunk.Total) * 100
    fmt.Printf("\rDownloading: %.1f%%", pct)
})
if err != nil {
    log.Fatal(err)
}
fmt.Printf("\nDownloaded %d bytes\n", len(data))
```

### DownloadToFile

```go
func (c *Client) DownloadToFile(
    ctx context.Context,
    location tg.InputFileLocationClass,
    dcID int32,
    filePath string,
    fileSize int64,
    progress func(FileChunk),
) error
```

Downloads a file directly to disk, avoiding loading the entire file into memory.

| Parameter | Type | Description |
|-----------|------|-------------|
| `ctx` | `context.Context` | Request context |
| `location` | `tg.InputFileLocationClass` | File location |
| `dcID` | `int32` | Data center ID |
| `filePath` | `string` | Destination file path |
| `fileSize` | `int64` | Expected file size for progress |
| `progress` | `func(FileChunk)` | Optional progress callback |

```go
err := client.DownloadToFile(ctx, fileLoc, dcID, "/tmp/download.mp4", fileSize, nil)
if err != nil {
    log.Fatal(err)
}
```

### DownloadMedia

```go
func (c *Client) DownloadMedia(
    ctx context.Context,
    media types.Media,
    thumbSize string,
    progress func(FileChunk),
) ([]byte, error)
```

Downloads media from a `types.Media` object. MTGo resolves the file location automatically.

| Parameter | Type | Description |
|-----------|------|-------------|
| `ctx` | `context.Context` | Request context |
| `media` | `types.Media` | Media object from a message |
| `thumbSize` | `string` | Thumbnail size (e.g. `"m"`, `"x"`, `"y"`, `"w"`) |
| `progress` | `func(FileChunk)` | Optional progress callback |

```go
data, err := client.DownloadMedia(ctx, msg.Photo, "", nil)
if err != nil {
    log.Fatal(err)
}
os.WriteFile("photo.jpg", data, 0644)
```

### DownloadMediaToFile

```go
func (c *Client) DownloadMediaToFile(
    ctx context.Context,
    media types.Media,
    thumbSize string,
    filePath string,
    fileSize int64,
    progress func(FileChunk),
) error
```

Downloads media from a `types.Media` object directly to a file on disk.

| Parameter | Type | Description |
|-----------|------|-------------|
| `ctx` | `context.Context` | Request context |
| `media` | `types.Media` | Media object |
| `thumbSize` | `string` | Thumbnail size or empty for full |
| `filePath` | `string` | Destination path |
| `fileSize` | `int64` | Expected size |
| `progress` | `func(FileChunk)` | Optional progress callback |

```go
err := client.DownloadMediaToFile(ctx, msg.Document, "", "report.pdf", msg.Document.Size, nil)
if err != nil {
    log.Fatal(err)
}
```

---

## Streaming

### StreamFile

```go
func (c *Client) StreamFile(
    ctx context.Context,
    location tg.InputFileLocationClass,
    dcID int32,
    chunkSize int,
    handler func(chunk []byte) error,
) error
```

Streams a file in chunks through a handler callback. Each chunk is passed to `handler` as it arrives, enabling real-time processing without buffering the entire file.

| Parameter | Type | Description |
|-----------|------|-------------|
| `ctx` | `context.Context` | Request context |
| `location` | `tg.InputFileLocationClass` | File location |
| `dcID` | `int32` | Data center ID |
| `chunkSize` | `int` | Desired chunk size in bytes |
| `handler` | `func(chunk []byte) error` | Chunk handler; return error to abort |

```go
var buf bytes.Buffer
err := client.StreamFile(ctx, fileLoc, dcID, 64*1024, func(chunk []byte) error {
    buf.Write(chunk)
    return nil
})
if err != nil {
    log.Fatal(err)
}
```

---

## Resolve File Location

### GetFileLocation

```go
func GetFileLocation(media types.Media, thumbSize string) (tg.InputFileLocationClass, int32, error)
```

Resolves a `types.Media` object into a Telegram file location and data center ID. Used internally by `DownloadMedia` and `DownloadMediaToFile`, but exposed for advanced use cases.

| Parameter | Type | Description |
|-----------|------|-------------|
| `media` | `types.Media` | Media object |
| `thumbSize` | `string` | Thumbnail size or empty for full file |

| Return | Description |
|--------|-------------|
| `tg.InputFileLocationClass` | Resolved file location |
| `int32` | Data center ID |
| `error` | Unsupported media type or missing fields |

```go
loc, dcID, err := media.GetFileLocation(msg.Photo, "m")
if err != nil {
    log.Fatal(err)
}
data, err := client.DownloadFile(ctx, loc, dcID, nil)
```

---

## Progress Tracking

All download and upload methods accept an optional `progress func(FileChunk)` callback. Use it to build progress bars, log transfer status, or cancel long transfers.

```go
progress := func(chunk media.FileChunk) {
    if chunk.Total > 0 {
        pct := float64(chunk.Bytes) / float64(chunk.Total) * 100
        fmt.Printf("Progress: %.1f%% (%d / %d bytes)\n", pct, chunk.Bytes, chunk.Total)
    }
}

data, err := client.DownloadFile(ctx, loc, dcID, progress)
```

For cancellation, use the context:

```go
ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
defer cancel()

data, err := client.DownloadFile(ctx, loc, dcID, progress)
if errors.Is(err, context.DeadlineExceeded) {
    fmt.Println("Download timed out")
}
```
