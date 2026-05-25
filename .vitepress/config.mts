import { defineConfig } from "vitepress";
import { editLink } from "./shared/edit-link";
import {
  availableMethods,
  availableTypes,
  messageMethods,
  callbackMethods,
  inlineMethods,
  chatMethods,
  userBoundMethods,
  storyBoundMethods,
  giftBoundMethods,
  otherBoundMethods,
  userMethods,
} from "./shared/sidebar";

export default defineConfig({
  title: "MTGo",
  description:
    "A fast, idiomatic Go client library for the Telegram MTProto API",
  base: "/website/",
  head: [["link", { rel: "icon", href: "/website/favicon.png" }]],
  cleanUrls: true,
  themeConfig: {
    logo: "/mtgo-web.png",
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "API", link: "/api/client" },
      { text: "Storage", link: "/storage/" },
      { text: "CLI", link: "/cli/" },
      { text: "Plugins", link: "/plugins/" },
      { text: "TL Reference", link: "/tl/types" },
      { text: "Examples", link: "/examples/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          items: [
            { text: "Getting Started", link: "/guide/getting-started" },
            { text: "Installation", link: "/guide/installation" },
            { text: "Quick Start", link: "/guide/quick-start" },
          ],
        },
        {
          text: "Core Concepts",
          items: [
            { text: "Client & Configuration", link: "/guide/client" },
            { text: "Authentication", link: "/guide/authentication" },
            { text: "Handlers & Dispatcher", link: "/guide/handlers" },
            { text: "Filters", link: "/guide/filters" },
            { text: "Context", link: "/guide/context" },
            { text: "Middleware", link: "/guide/middleware" },
          ],
        },
      ],
      "/api/": [
        {
          text: "API Reference",
          items: [
            { text: "Client", link: "/api/client" },
            { text: "Configuration", link: "/api/config" },
            { text: "Messages", link: "/api/messages" },
            { text: "Media & Files", link: "/api/media" },
            { text: "Auth", link: "/api/auth" },
            { text: "Filters", link: "/api/filters" },
            { text: "Context", link: "/api/context" },
            { text: "Users", link: "/api/users" },
            { text: "Types", link: "/api/types" },
            { text: "Message Methods", link: "/api/bound" },
            { text: "Chat Methods", link: "/api/bound-chat" },
            { text: "User Methods", link: "/api/bound-user" },
            { text: "Story Methods", link: "/api/bound-story" },
            { text: "Gift Methods", link: "/api/bound-gift" },
            { text: "Other Bound Methods", link: "/api/bound-other" },
            { text: "Storage", link: "/api/storage" },
            { text: "tg (Generated Types)", link: "/api/tg" },
            { text: "tgerr (Errors)", link: "/api/tgerr" },
          ],
        },
        {
          text: "Available Methods",
          collapsed: false,
          items: [
            ...availableMethods,
            ...userMethods,
          ],
        },
        {
          text: "Available Types",
          collapsed: false,
          items: availableTypes,
        },
        {
          text: "Message Bound Methods",
          collapsed: false,
          items: [
            ...messageMethods,
          ],
        },
        {
          text: "CallbackQuery Bound Methods",
          collapsed: false,
          items: [
            ...callbackMethods,
          ],
        },
        {
          text: "InlineQuery Bound Methods",
          collapsed: false,
          items: [
            ...inlineMethods,
          ],
        },
        {
          text: "Chat Bound Methods",
          collapsed: false,
          items: [
            ...chatMethods,
          ],
        },
        {
          text: "User Bound Methods",
          collapsed: false,
          items: [
            ...userBoundMethods,
          ],
        },
        {
          text: "Story Bound Methods",
          collapsed: false,
          items: [
            ...storyBoundMethods,
          ],
        },
        {
          text: "Gift Bound Methods",
          collapsed: false,
          items: [
            ...giftBoundMethods,
          ],
        },
        {
          text: "Other Bound Methods",
          collapsed: true,
          items: [
            ...otherBoundMethods,
          ],
        },
      ],
      "/tl/": [
        {
          text: "TL Reference",
          items: [
            { text: "Types", link: "/tl/types" },
            { text: "Constructors", link: "/tl/constructors" },
            { text: "Methods", link: "/tl/methods" },
          ],
        },
      ],
      "/plugins/": [
        {
          text: "Plugins",
          items: [
            { text: "Overview", link: "/plugins/" },
            { text: "Plugin Interface", link: "/plugins/plugin-interface" },
          ],
        },
        {
          text: "Official Plugins",
          items: [
            { text: "i18n", link: "/plugins/i18n" },
            { text: "Conversations", link: "/plugins/conversations" },
          ],
        },
        {
          text: "Invoker Middlewares",
          items: [
            { text: "Flood Wait", link: "/plugins/floodwait" },
            { text: "Rate Limit", link: "/plugins/ratelimit" },
          ],
        },
        {
          text: "Templates",
          items: [
            { text: "Plugin Template", link: "/plugins/template" },
            { text: "Middleware Template", link: "/plugins/middleware-template" },
          ],
        },
      ],
      "/storage/": [
        {
          text: "Storage",
          items: [
            { text: "Overview", link: "/storage/" },
            { text: "SQLite", link: "/storage/sqlite" },
            { text: "PostgreSQL", link: "/storage/postgres" },
            { text: "MongoDB", link: "/storage/mongodb" },
            { text: "Redis", link: "/storage/redis" },
            { text: "GORM", link: "/storage/gorm" },
            { text: "Memory", link: "/storage/memory" },
          ],
        },
      ],
      "/cli/": [
        {
          text: "mtgo-cli",
          items: [
            { text: "Overview", link: "/cli/" },
            { text: "Invoke & Methods", link: "/cli/invoke" },
            { text: "Commands", link: "/cli/commands" },
            { text: "Listener & Trace", link: "/cli/listener" },
            { text: "Group Management", link: "/cli/groups" },
            { text: "Media", link: "/cli/media" },
            { text: "Peer Resolution", link: "/cli/peers" },
          ],
        },
      ],
      "/advanced/": [
        {
          text: "Advanced",
          items: [
            { text: "Peer Resolution", link: "/advanced/peer-resolution" },
            { text: "File Upload & Download", link: "/advanced/file-transfer" },
            {
              text: "Session Management",
              link: "/advanced/session-management",
            },
            { text: "Transport Layer", link: "/advanced/transport" },
            { text: "WebSocket Transport", link: "/advanced/websocket" },
            { text: "Custom Storage", link: "/advanced/custom-storage" },
            { text: "Multi-Client", link: "/advanced/multi-client" },
            { text: "Raw RPC & Invoke", link: "/advanced/raw-rpc" },
            { text: "WebApp Validation", link: "/advanced/webapp-validation" },
            { text: "Error Handling", link: "/advanced/error-handling" },
          ],
        },
      ],
      "/examples/": [
        {
          text: "Examples",
          items: [
            { text: "Echo Bot", link: "/examples/" },
            { text: "Command Handler", link: "/examples/command-handler" },
            { text: "Inline Mode", link: "/examples/inline-mode" },
            { text: "File Upload", link: "/examples/file-upload" },
            { text: "Userbot", link: "/examples/userbot" },
            { text: "Conversation Bot", link: "/examples/conversation-bot" },
            { text: "Rate-Limited Bot", link: "/examples/rate-limited-bot" },
            { text: "Keyboard & Callback", link: "/examples/keyboard-bot" },
            { text: "Handler Groups", link: "/examples/handler-groups" },
            { text: "Middleware Bot", link: "/examples/middleware-bot" },
            { text: "WebApp Validation", link: "/examples/webapp-bot" },
            { text: "SQLite Storage", link: "/examples/sqlite-storage" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/mtgo-labs/mtgo" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
        },
        link: "https://t.me/mtgo_labs",
      },
    ],
    search: {
      provider: "local",
    },
    outline: {
      level: [2, 3],
      label: "On this page",
    },
    footer: {
      message: "Released under the Apache-2.0 License.",
    },
    editLink,
    lastUpdated: {
      text: "Updated at",
    },
  },
});
