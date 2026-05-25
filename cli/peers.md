---
title: Peer Resolution
description: Peer formats and resolution in mtgo-cli.
---

# Peer Resolution

mtgo-cli accepts multiple peer formats in any command that needs a peer argument:

| Input | Example | Resolution |
|---|---|---|
| `@username` | `@durov` | Public username lookup |
| Phone | `+1234567890` | Contact lookup |
| `me` / `self` | `me` | Current user |
| Numeric ID | `123456789` | Auto-detected as user/chat |
| Explicit | `channel:1234` | Forced channel type |

## Resolve Peer

Get detailed access info for a peer:

```bash
mtgo-cli resolve-peer @username
mtgo-cli resolve-peer @username --format json
```

## Usage in Commands

```bash
mtgo-cli get-user @durov
mtgo-cli send-message me "Hello self"
mtgo-cli get-chat channel:123456
mtgo-cli send-photo +1234567890 photo.jpg "From CLI"
```

## Performance Tips

- Resolve peers once with `resolve-peer`, then use numeric IDs in subsequent calls
- Commands like `send-message`, `get-user`, and `get-chat` bypass JSON and use the Go API directly — prefer them over raw `invoke` for precision with `access_hash` values
