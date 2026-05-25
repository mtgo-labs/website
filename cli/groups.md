---
title: Group Management
description: Create groups, add bots, and promote admins with mtgo-cli (userbot only).
---

# Group Management

Group management operations require a **userbot session** (phone or session string), not a bot token. Bots cannot create groups, add members, or promote admins.

## Create a Group

```bash
mtgo-cli create-group "Test Suite"
# → returns chat_id (e.g. 5282748388)
```

## Add a Bot to the Group

```bash
# Accepts raw chat ID or resolved peer
mtgo-cli add-bot 5282748388 @my_bot
```

For supergroups/channels, the bot is added via `channels.inviteToChannel`. For basic groups, it uses `messages.addChatUser`.

## Promote Bot to Admin

Requires a channel/supergroup (migrated):

```bash
mtgo-cli promote-bot channel:123456 @my_bot
```

## Full Workflow

```bash
# 1. Create group
CHAT_ID=$(mtgo-cli create-group "Bot Test Suite" --format json | jq -r '.chat_id')

# 2. Migrate to supergroup (if needed)
mtgo-cli invoke messages.migrateChat "{\"chat_id\": $CHAT_ID}"

# 3. Add bot
mtgo-cli add-bot $CHAT_ID @my_test_bot

# 4. Promote to admin (after migration)
mtgo-cli promote-bot "channel:$CHAT_ID" @my_test_bot
```

## Error Handling

Common errors:

- `USER_IS_BOT` — you're using a bot token; switch to a userbot session
- `CHAT_ID_INVALID` — the chat ID is wrong or not migrated
- `PEER_ID_INVALID` — re-resolve the peer with `resolve-peer`
- `CHANNEL_PRIVATE` — you don't have permission to add members
