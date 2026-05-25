---
title: Invoke & Methods
description: Call any Telegram TL method from the terminal with mtgo-cli.
---

# Invoke & Methods

## Invoke — Call Any TL Method

The core command. Takes a TL method name and optional JSON parameters:

```bash
# No params needed
mtgo-cli invoke help.getConfig

# With JSON params
mtgo-cli invoke users.getFullUser '{"id":{"_":"inputUserSelf"}}'

# Send a message
mtgo-cli invoke messages.sendMessage '{"peer":{"_":"inputPeerUser","user_id":123,"access_hash":456},"message":"Hello!","random_id":789}'

# Pretty JSON output
mtgo-cli invoke users.getFullUser '{"id":{"_":"inputUserSelf"}}' --format json

# Fast path — skip full TL decode for bulk operations
mtgo-cli invoke help.getConfig --fast
```

### Discovering Methods and Parameters

```bash
# List all TL methods
mtgo-cli methods

# Filter by prefix
mtgo-cli methods messages.
mtgo-cli methods users.get

# Machine-readable
mtgo-cli methods --format json
```

For parameter details, check:
- **https://corefork.telegram.org/methods** — method reference with parameters and return types
- **https://corefork.telegram.org/schema** — raw TL constructors and interface types

## JSON Constructor Format

TL interface fields need a `"_"` key to specify the constructor:

```json
{
  "_": "inputPeerUser",
  "user_id": 123456,
  "access_hash": 789012345
}
```

Common constructors:

| Constructor | Fields | Use For |
|---|---|---|
| `inputPeerSelf` | none | Yourself |
| `inputPeerUser` | `user_id`, `access_hash` | A specific user |
| `inputPeerChat` | `chat_id` | A basic group |
| `inputPeerChannel` | `channel_id`, `access_hash` | A supergroup/channel |
| `inputPeerEmpty` | none | Empty placeholder |
| `inputUserSelf` | none | Your own user object |
| `inputUser` | `user_id`, `access_hash` | Another user |

## Output Format

```bash
--format json    # machine-readable JSON (use with jq)
--no-color       # disable ANSI colors
--debug          # log full request/response to stderr (sensitive!)
```
