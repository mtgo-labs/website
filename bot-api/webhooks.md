---
title: Webhooks
description: setWebhook, deleteWebhook, getWebhookInfo, delivery semantics, and SSRF protection.
---

# Webhooks

Instead of long-polling, point the server at an HTTPS endpoint and it will
deliver updates as they arrive. Delivery mirrors the official `WebhookActor`
semantics.

## Basic usage

```bash
# Set a webhook
curl http://localhost:8081/bot<TOKEN>/setWebhook \
  -d 'url=https://example.com/webhook' \
  -d 'secret_token=mysecret'

# Check webhook status
curl http://localhost:8081/bot<TOKEN>/getWebhookInfo

# Delete (switch back to polling)
curl http://localhost:8081/bot<TOKEN>/deleteWebhook
```

`setWebhook` returns only after the server has confirmed outbound **TCP/TLS
readiness** to the webhook URL — so a successful response means your endpoint is
actually reachable, not just accepted.

## Delivery semantics

- **Verification** — `setWebhook` returns only after confirming outbound TCP/TLS
  readiness to the webhook URL.
- **Concurrency** — respects `max_connections` per bot (configurable via
  `--max-webhook-connections`, default `100`).
- **Ordering** — events within a single queue are delivered in order.
- **Retry** — exponential backoff with a `Retry-After` header clamp and a
  randomized resend cap.
- **Expiry** — events past their TTL are dropped (not retried forever).
- **Sustained 410** — repeated `410 Gone` responses close the webhook.
- **DNS/IP cache** — resolved endpoints are cached to avoid redundant lookups.
- **Flood gates** — active and pending connection counts are flood-controlled.

## Parameters

| Parameter | Description |
|-----------|-------------|
| `url` | HTTPS endpoint to deliver to. Send empty (with `drop_pending_updates`) to delete. |
| `secret_token` | Optional token sent in the `X-Telegram-Bot-Api-Secret-Token` header on every delivery. |
| `max_connections` | Max simultaneous in-flight deliveries (≤ `--max-webhook-connections`). |
| `allowed_updates` | Per-webhook update-type whitelist (see [Updates](/bot-api/updates#allowed-updates-filtering)). |
| `ip_address` | Fixed IP to connect to (bypasses DNS). |
| `drop_pending_updates` | Drop all pending updates before switching. |

## Security

::: warning SSRF protection
Outgoing webhook requests are validated against an IP blocklist — loopback,
link-local, and private ranges — to prevent server-side request forgery. A
webhook URL that resolves into a blocked range is rejected.

All outgoing webhook requests also carry connect, read, and write timeouts, and
an `--proxy` may be configured for egress.
:::

Bot tokens are validated for format (shape + checksum) before client creation,
returning official `401` / `421` envelopes for malformed tokens. Token values are
never logged.

## Testing

A webhook receiver for testing is included at
[`examples/webhook/receiver.ts`](https://github.com/mtgo-labs/mtgo-bot-api/tree/main/examples/webhook)
in the mtgo-bot-api repo. Run it locally and point `setWebhook` at it to observe
delivery, retries, and headers:

```bash
BOT_TOKEN=<token> bun run examples/webhook/receiver.ts
```
