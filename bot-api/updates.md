---
title: Updates
description: getUpdates, the persistent update queue (TQueue), update types, and allowed_updates filtering.
---

# Updates

Updates flow through a **monotonic update queue (TQueue)** that persists every
event to SQLite on push. On restart, the queue replays undelivered events — no
updates are lost across crashes or deploys.

## getUpdates

Long-poll for updates:

```bash
# Poll with a 30-second timeout
curl "http://localhost:8081/bot<TOKEN>/getUpdates?timeout=30&offset=<LAST_ID+1>"
```

The request blocks for up to `timeout` seconds (default `0`) until an update is
available, shaped exactly like the official server — including the 3-second
delayed conflict response and a 50-second hard cap.

## TQueue guarantees

- **Persistent** — every event is written to SQLite on push. On restart the queue
  replays undelivered events.
- **Monotonic IDs** — `update_id` values are strictly increasing per bot.
  Clients acknowledge by passing `offset = last_update_id + 1`.
- **Long polling** — `getUpdates` blocks for up to `timeout` seconds, matching
  the official server's timing (3-second delayed conflict, 50-second hard cap).
- **Conflict detection** — a second concurrent `getUpdates` (with an older
  offset) gets HTTP `409 Conflict`. Webhook-active bots get `409` on *any*
  `getUpdates` call.
- **Negative offset** — passing `offset < 0` clears the queue but keeps the
  newest events.
- **Size budget** — a single `getUpdates` response is capped at ~4 MB
  (`1 << 22` bytes), truncating the event list if it overflows.

::: tip Offset semantics
`offset = update_id + 1` confirms receipt of `update_id` and all prior events.
Once confirmed, those events are removed from the queue. A negative offset wipes
the queue while retaining the most recent events for the next poll.
:::

## Update types

All **22** Bot API update types are delivered via `getUpdates` and webhooks:

```
message                    deleted_business_messages   message_reaction_count
edited_message             callback_query              poll
channel_post               inline_query                poll_answer
edited_channel_post        chosen_inline_result        business_connection
business_message           chat_join_request           chat_boost
edited_business_message    chat_member                 removed_chat_boost
my_chat_member             shipping_query
                           pre_checkout_query
```

## allowed_updates filtering

`allowed_updates` controls which update types are delivered. Filtering applies
at push time (in the TQueue) and is persisted per webhook.

| `allowed_updates` value | Behavior |
|-------------------------|----------|
| `nil` / empty / omitted | **Default set** — excludes `chat_member`, `message_reaction`, `message_reaction_count`, `chat_boost`, `removed_chat_boost` |
| Non-nil array | **Only** the listed types are delivered |

```bash
# Receive only messages and callback queries
curl http://localhost:8081/bot<TOKEN>/getUpdates \
  -d 'allowed_updates=["message","callback_query"]'
```

::: warning
Setting `allowed_updates` to a non-empty array is a *whitelist*: anything not
listed is dropped at push time. To receive the default set plus extra types,
list the defaults explicitly alongside the extras.
:::

## Webhook vs. polling

A bot may use **either** `getUpdates` **or** a webhook, never both. The server
enforces this:

- An active webhook causes `getUpdates` to return `409 Conflict`.
- Calling `setWebhook` while `getUpdates` is mid-poll cancels the poll.

See [Webhooks](/bot-api/webhooks) for the webhook delivery model.
