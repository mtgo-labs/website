---
title: File Handling
description: Uploads, downloads, local mode, and byte-identical file_id / file_unique_id parity.
---

# File Handling

## Uploads

Files are uploaded via `multipart/form-data` and staged in `--temp-dir`, then
uploaded to Telegram in 512 KB chunks (`upload.saveFilePart` /
`upload.saveBigFilePart` for files > 10 MB). Large file uploads are
flood-control aware.

```bash
# Send a photo by uploading a file
curl http://localhost:8081/bot<TOKEN>/sendPhoto \
  -F chat_id=<CHAT_ID> \
  -F photo=@/path/to/photo.jpg \
  -F caption="Uploaded via mtgo-bot-api"
```

Files can also be re-sent by `file_id` without re-uploading — see
[file_id parity](#file-id-file-unique-id-parity) below.

## Downloads

`getFile` resolves a `file_id` to a download path. The server streams the file
via `upload.getFile` in 1 MB chunks:

```bash
# Resolve a file_id
curl http://localhost:8081/bot<TOKEN>/getFile -d file_id=<FILE_ID>
# → { "file_path": "photos/file_1.jpg", ... }

# Download it
curl http://localhost:8081/file/bot<TOKEN>/photos/file_1.jpg -o photo.jpg
```

## Local mode {#local-mode}

In `--local` mode the 20 MB file download size limit is **removed**, and the
file is served directly from the working directory instead of streamed through
the API. This matches the official server's local-mode behavior exactly.

::: tip
Local mode is the right choice when you self-host and want to handle large
media. The tradeoff is the same as the official server: file paths are local to
the server's working directory.
:::

## file_id / file_unique_id parity {#file-id-file-unique-id-parity}

File ID encoding and decoding is **byte-for-byte identical** to the official Bot
API server, verified end-to-end against live `api.telegram.org`:

- All **28 `FileType` constants** (0–27) with correct type-class mapping.
- **Legacy constructors**: `InputPeerPhotoFileLocationLegacy`,
  `InputStickerSetThumbLegacy`, `DialogPhotoSmallLegacy`, `DialogPhotoBigLegacy`,
  `StickerSetThumbLegacy`.
- **Web remote** file IDs via `InputWebFileLocation` → `upload.getWebFile`.
- **Generated** file IDs (map tiles, audio thumbnails) with full validation.
- **RLE encoding**, version bytes, and the exact serialization TDLib uses.

This means a `file_id` produced by `api.telegram.org` resolves identically here,
and vice versa — bots can move between the two servers without re-fetching media
references. The full encoder/decoder lives in
[`internal/fileid/`](https://github.com/mtgo-labs/mtgo-bot-api/tree/main/internal/fileid).

## Symlink safety

::: warning Symlink escape prevention
File downloads cannot traverse symlinks outside the working directory. A
download path that resolves through a symlink to a location outside `--dir` is
rejected, preventing path-traversal escapes.
:::
