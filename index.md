---
layout: home
hero:
  name: MTGo
  text: Telegram MTProto Client for Go
  tagline: Fast, idiomatic, and feature-complete Go library for the Telegram MTProto API
  image:
    src: /mtgo-web.png
    alt: MTGo Logo
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: API Reference
      link: /api/client
    - theme: alt
      text: View on GitHub
      link: https://github.com/mtgo-labs/mtgo
features:
  - title: MTProto Native
    details: Direct MTProto protocol implementation with full Layer support, not a Bot API wrapper. Access every Telegram feature.
  - title: High-Level API
    details: Ergonomic context-based handlers, composable filters, and bound methods on messages and chats that feel natural in Go.
  - title: Low-Level Access
    details: Call any raw TL method via client.Raw() with full access to generated types. No abstraction limits — the entire MTProto API at your fingertips.
  - title: Code Generated
    details: TL schema compiler generates type-safe Go structs for every Telegram type and RPC call. Zero manual binding.
  - title: Plugin System
    details: Extensible plugin architecture with official plugins for i18n, conversations, and more. Build your own with the plugin template.
  - title: File Transfer
    details: Upload and download files of any size with streaming support, progress tracking, and CDN fallback.
  - title: Multiple Transports
    details: TCP, WebSocket, and NetPoll transports. Connect from any network environment including restrictive firewalls.
  - title: Session Persistence
    details: SQLite, PostgreSQL, MongoDB, Redis, GORM, and in-memory storage backends. Import sessions from Telethon, Pyrogram, GramJS, mtcute, and tdesktop.
  - title: Middlewares
    details: Invoker-level middleware for rate limiting, flood wait handling, and retries. Handler-level middleware for auth, logging, and i18n. Build your own with the middleware template.
  - title: Agent Skills
    details: Install the MTGo skill for your AI coding agent (`npx skills add mtgo-labs/mtgo`) and get in-editor documentation, patterns, and conventions.
---
