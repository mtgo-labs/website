---
title: Media
description: Send photos, files, and download media with mtgo-cli.
---

# Media Commands

## Send Media

```bash
# Send a photo with caption
mtgo-cli send-photo @username photo.jpg "Check this out"

# Send a document
mtgo-cli send-file @username report.pdf
```

## Download Media

```bash
# Download to auto-generated filename
mtgo-cli download @username 2667

# Download to specific path
mtgo-cli download @username 2667 /tmp/output.jpg
```

The message ID can be found via `list-messages` or from `invoke messages.getHistory`.
