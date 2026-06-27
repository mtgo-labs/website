---
title: Methods & Coverage
description: Implemented Bot API method categories, parity status, and schema certification.
---

# Methods & Coverage

mtgo-bot-api implements **180 official Bot API methods** — 100% of the Bot API
10.1 surface. If a method exists on `api.telegram.org`, it exists here with the
same parameters, response shape, and error mapping.

## Method categories

| Category | Methods | Notes |
|----------|---------|-------|
| **Getting updates** | `getUpdates` | Long polling, webhook conflict detection, 409 on concurrent calls, negative offset, byte-budget truncation |
| **Webhooks** | `setWebhook`, `deleteWebhook`, `getWebhookInfo` | HTTPS validation, secret token, TCP/TLS readiness probe, max_connections |
| **Messages** | `sendMessage`, `editMessageText/Caption/Media/ReplyMarkup`, `deleteMessage(s)`, `forwardMessage(s)`, `copyMessage(s)` | HTML + MarkdownV2 + plain text |
| **Media** | `sendPhoto`, `sendDocument`, `sendAudio`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendSticker`, `sendMediaGroup` | Upload + re-send by file_id |
| **Interactive** | `sendContact`, `sendVenue`, `sendLocation`, `sendDice`, `sendPoll`, `stopPoll`, `sendPaidMedia`, `setMessageReaction` | |
| **Chat management** | `getChat`, `getChatMember(s)`, `leaveChat`, `setChatTitle/Description/Photo/Permissions/StickerSet/MenuButton` | |
| **Admin** | `promoteChatMember`, `restrictChatMember`, `banChatMember`, `unbanChatMember`, `banChatSenderChat` | `ChatBannedRights` inversion handled |
| **Forum topics** | `createForumTopic`, `editForumTopic`, `close/reopen/deleteForumTopic`, `edit/close/reopen/hide/unhideGeneralForumTopic` | 12 methods |
| **Sticker sets** | `getStickerSet`, `createNewStickerSet`, `addStickerToSet`, `setStickerSetTitle/Thumbnail/EmojiList`, `deleteStickerSet` | 16 methods, full CRUD |
| **Inline mode** | `answerInlineQuery`, `answerCallbackQuery`, `setGameScore`, `getGameHighScores`, `answerWebAppQuery`, `answerGuestQuery`, `savePreparedInlineMessages/KeyboardButton`, `sendCustomRequest`, `answerCustomQuery` | |
| **Bot profile** | `getMyCommands/setMyCommands/deleteMyCommands`, `getMyName/setMyName`, `getMyDescription/setMyDescription`, `getMyShortDescription/setMyShortDescription` | Via `BotsGetBotInfo`/`BotsSetBotInfo` |
| **Payments** | `sendInvoice`, `createInvoiceLink`, `answerShippingQuery`, `answerPreCheckoutQuery`, `refundStarPayment`, `getMyStarBalance`, `getStarTransactions`, `sendGift`, `giftPremiumSubscription`, `getAvailableGifts`, `getUserGifts`, `getChatGifts`, `transferGift`, `upgradeGift`, `convertGiftToStars`, `editUserStarSubscription`, `getUserChatBoosts` | Stars, invoices, gifts, subscriptions |
| **Business** | `getBusinessConnection`, `setBusinessAccountName/Bio/Username`, `readBusinessMessage`, `deleteBusinessMessages`, `setBusinessAccountProfilePhoto`, `getBusinessAccountStarBalance`, `transferBusinessAccountStars`, `getBusinessAccountGifts` | 12 methods |
| **Stories** | `postStory`, `editStory`, `deleteStory`, `repostStory`, `sendLivePhoto` | |
| **Rich messages** | `sendRichMessage`, `sendRichMessageDraft`, `sendMessageDraft`, `sendChecklist`, `editMessageChecklist` | RichBlock (21 types) + RichText (27 types) |
| **File operations** | `getFile`, `uploadStickerFile` | Download via `upload.getFile`, file_id parity |
| **Verification** | `verifyChat`, `verifyUser`, `removeChatVerification`, `removeUserVerification` | |
| **Lifecycle** | `getMe`, `logout`, `close` | |
| **Invite links** | `exportChatInviteLink`, `createChatInviteLink`, `editChatInviteLink`, `revokeChatInviteLink`, `createChatSubscriptionInviteLink`, `approve/declineChatJoinRequest`, `answerChatJoinRequestQuery` | |
| **Moderation** | `approveSuggestedPost`, `declineSuggestedPost`, `deleteMessageReaction`, `deleteAllMessageReactions` | |

::: tip Full reference
Parameter-level documentation for every method lives at the official
[Bot API reference](https://core.telegram.org/bots/api). Since mtgo-bot-api is a
behavioral clone, that reference is authoritative here too.
:::

## Parity verification

Field-shape parity is verified with a **grammY-based comparison harness** in
[`examples/test-bot/`](https://github.com/mtgo-labs/mtgo-bot-api/tree/main/examples/test-bot).
The `/testall` command runs 26 Bot API methods against both this server and
`api.telegram.org` simultaneously and compares every top-level field:

```bash
# Start the server, then run the comparison bot
BOT_TOKEN=<token> bun run examples/test-bot/index.ts
# Send /testall to the bot in Telegram
```

**Result:** 26/26 methods produce identical top-level field sets between this
server and the official Bot API. `file_id` / `file_unique_id` values are
byte-for-byte identical (see [File Handling](/bot-api/files)).

## Schema certification

Method parity is **continuously certified** against the official Bot API
reference. The [`schema/`](https://github.com/mtgo-labs/mtgo-bot-api/tree/main/schema)
toolchain scrapes [core.telegram.org/bots/api](https://core.telegram.org/bots/api)
into machine-readable JSON (`methods.json`, `types.json`), then a `validate`
command cross-checks every official method against the handlers registered in
`internal/client`:

```bash
go run ./schema/cmd/validate     # schema vs implementation parity (exit 1 on gaps)
./schema/regen.sh                # scrape + validate + generate reports
```

**Result: 180/180 official methods registered (100%).** The generated
`schema/COVERAGE.md` lists any gaps, deprecated aliases, and the two
mtgo-only extensions (`close`, `logout`).
