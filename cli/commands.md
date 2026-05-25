---
title: Commands
description: High-level mtgo-cli commands for common operations.
---

# Commands

High-level commands wrap common TL methods with smart peer resolution.

## User & Chat Info

```bash
mtgo-cli get-me                       # current user/bot info
mtgo-cli get-me --format json         # JSON output
mtgo-cli get-user @durov              # user by username
mtgo-cli get-user +1234567890         # user by phone
mtgo-cli get-user me                  # self
mtgo-cli get-chat @channelname        # chat/channel info (auto-routes)
```

## Messages

```bash
mtgo-cli send-message @username "Hi"                    # send text
mtgo-cli send-message @username "Hello" --format json   # JSON output
```

`random_id` is generated automatically.

## Sessions

```bash
mtgo-cli resolve-peer @username       # resolve to access info
mtgo-cli export-session               # export session string

# Export and reuse later
mtgo-cli export-session > my_session.txt
MTGO_CLI_SESSION=$(cat my_session.txt) mtgo-cli get-me
```

## Lists

```bash
mtgo-cli list-chats --limit 10                # recent dialogs
mtgo-cli list-messages @username --limit 20   # message history
```

## Utility

```bash
mtgo-cli version                    # build version
mtgo-cli completion bash            # shell completion
mtgo-cli completion zsh
mtgo-cli completion fish
```
