import{_ as a,o as n,c as e,ag as t}from"./chunks/framework.B3ZMliSr.js";const g=JSON.parse('{"title":"Architecture","description":"Request flow, key design principles, the raw tg layer convention, and project layout.","frontmatter":{"title":"Architecture","description":"Request flow, key design principles, the raw tg layer convention, and project layout."},"headers":[],"relativePath":"bot-api/architecture.md","filePath":"bot-api/architecture.md","lastUpdated":1783313024000}'),i={name:"bot-api/architecture.md"};function p(l,s,o,r,c,d){return n(),e("div",null,[...s[0]||(s[0]=[t(`<h1 id="architecture" tabindex="-1">Architecture <a class="header-anchor" href="#architecture" aria-label="Permalink to &quot;Architecture&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                        HTTP Request                             │</span></span>
<span class="line"><span>│              POST /bot&lt;TOKEN&gt;/&lt;method&gt;                          │</span></span>
<span class="line"><span>└──────────┬──────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>           │</span></span>
<span class="line"><span>           ▼</span></span>
<span class="line"><span>┌──────────────────────┐    parses multipart/form-data + query params</span></span>
<span class="line"><span>│  internal/server     │──────────────────────────────┐</span></span>
<span class="line"><span>│  (net/http, no fwk)  │                               │</span></span>
<span class="line"><span>└──────────┬───────────┘                               ▼</span></span>
<span class="line"><span>           │  routes by bot token         ┌─────────────────────┐</span></span>
<span class="line"><span>           ▼                              │  internal/response  │</span></span>
<span class="line"><span>┌──────────────────────┐                  │  JSON envelope:      │</span></span>
<span class="line"><span>│  internal/manager    │◄─────────────────┤  {ok,result,error}   │</span></span>
<span class="line"><span>│  ClientManager       │                  └─────────────────────┘</span></span>
<span class="line"><span>│  • token routing     │</span></span>
<span class="line"><span>│  • per-bot lifecycle │</span></span>
<span class="line"><span>│  • flood control     │</span></span>
<span class="line"><span>└──────────┬───────────┘</span></span>
<span class="line"><span>           │  creates/reuses one Client per bot</span></span>
<span class="line"><span>           ▼</span></span>
<span class="line"><span>┌──────────────────────┐    raw tg.RPCClient ────► Telegram MTProto</span></span>
<span class="line"><span>│  internal/client     │                  ▲</span></span>
<span class="line"><span>│  Per-bot Client      │    ┌─────────────┴──────────────┐</span></span>
<span class="line"><span>│  • 180 handlers      │    │  tg types ↔ Bot API JSON   │</span></span>
<span class="line"><span>│  • dispatch table    │    └────────────────────────────┘</span></span>
<span class="line"><span>└──┬───────┬───────┬───┘</span></span>
<span class="line"><span>   │       │       │</span></span>
<span class="line"><span>   │       │       └──────────────────────────────────────────┐</span></span>
<span class="line"><span>   │       ▼                                                  ▼</span></span>
<span class="line"><span>   │ ┌────────────────┐                          ┌──────────────────┐</span></span>
<span class="line"><span>   │ │ internal/tqueue│                          │ internal/webhook │</span></span>
<span class="line"><span>   │ │ Update queue   │                          │ Outgoing webhooks│</span></span>
<span class="line"><span>   │ │ (monotonic IDs)│                          │ • SSRF protection│</span></span>
<span class="line"><span>   └───────┬────────┘                            │ • flood gates    │</span></span>
<span class="line"><span>           │                                      │ • retry/Retry-After│</span></span>
<span class="line"><span>           │ persists                             └──────────────────┘</span></span>
<span class="line"><span>           ▼</span></span>
<span class="line"><span>┌──────────────────────┐</span></span>
<span class="line"><span>│  internal/storage    │</span></span>
<span class="line"><span>│  SQLite (pure Go)    │</span></span>
<span class="line"><span>│  • update log        │</span></span>
<span class="line"><span>│  • webhook config    │</span></span>
<span class="line"><span>│  • peer cache        │</span></span>
<span class="line"><span>└──────────────────────┘</span></span></code></pre></div><h2 id="request-flow" tabindex="-1">Request flow <a class="header-anchor" href="#request-flow" aria-label="Permalink to &quot;Request flow&quot;">​</a></h2><ol><li><strong><code>internal/server</code></strong> — a raw <code>net/http</code> server parses <code>multipart/form-data</code> and query params (mirrors the official <code>HttpServer</code>/<code>Query</code>).</li><li><strong><code>internal/manager</code></strong> — <code>ClientManager</code> routes by bot token, manages the per-bot lifecycle, and applies flood control.</li><li><strong><code>internal/client</code></strong> — the per-bot <code>Client</code> runs all 180 Bot API method handlers via a dispatch table.</li><li><strong><code>internal/convert</code></strong> — translates between mtgo <code>tg</code> types and Bot API JSON types in both directions.</li><li><strong><code>internal/response</code></strong> — wraps every result in the <code>{ok, result, error_code, description, parameters}</code> envelope.</li><li><strong><code>internal/tqueue</code></strong> + <strong><code>internal/storage</code></strong> — updates pass through the monotonic queue and are persisted to SQLite.</li><li><strong><code>internal/webhook</code></strong> — delivers updates to registered webhooks with SSRF protection and retry/backoff.</li></ol><h2 id="key-design-principles" tabindex="-1">Key design principles <a class="header-anchor" href="#key-design-principles" aria-label="Permalink to &quot;Key design principles&quot;">​</a></h2><ol><li><p><strong>Raw TL layer, not high-level wrappers.</strong> The per-bot <code>Client</code> constructs <code>tg.*Request</code> structs and invokes them via <code>tg.RPCClient</code> — the exact TL schema (layer 225). No opinionated convenience methods. This mirrors how the official server calls <code>td_api</code> methods directly rather than through wrappers.</p></li><li><p><strong>Per-bot isolation.</strong> Each bot gets its own <code>Client</code>, connection, session, and SQLite database (<code>.mtgo-bot-api/&lt;bot_id&gt;/bot.db</code>). No shared state between bots.</p></li><li><p><strong>Persistent update queue.</strong> Updates survive restarts. The TQueue stores events with monotonic IDs and replays them on <code>getUpdates</code>. The storage callback persists every push to SQLite.</p></li><li><p><strong>Exact error mapping.</strong> MTProto RPC errors are translated to Bot API error messages and HTTP codes exactly as the official <code>Client.cpp</code> does.</p></li></ol><h2 id="the-raw-tg-layer-convention" tabindex="-1">The raw <code>tg</code> layer convention <a class="header-anchor" href="#the-raw-tg-layer-convention" aria-label="Permalink to &quot;The raw \`tg\` layer convention&quot;">​</a></h2><p>mtgo-bot-api talks to MTProto via the <strong>generated <code>tg</code> package</strong> (<code>github.com/mtgo-labs/mtgo/tg</code>), not mtgo&#39;s high-level <code>telegram.Client</code> convenience methods or its <code>Bound*</code> methods.</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// telegram.Client owns only the connection/session/bot auth.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cl, _ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> telegram.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NewClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(apiID, apiHash, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">telegram</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{BotToken: tok})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Take the raw RPC client and invoke generated TL request structs directly:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rpc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RPC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// *tg.RPCClient</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result, err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rpc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MessagesSendMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MessagesSendMessageRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Peer:     inputPeer,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Message:  text,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    RandomID: randID,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Why raw TL?</p><p>The high-level <code>telegram.Client</code> methods add abstractions/opinions that don&#39;t always map cleanly onto Bot API semantics. Generated request structs are the exact TL schema, giving precise 1:1 control over every RPC call — the same way the official server invokes <code>td_api</code> methods directly.</p></div><p>Build a <code>tg.RPCClient</code> once per bot, construct TL request structs in <code>internal/client/</code>, and decode the returned <code>tg.TLObject</code> in <code>internal/convert/</code>. Do <strong>not</strong> import high-level <code>telegram</code> helpers that re-wrap these calls.</p><h2 id="project-layout" tabindex="-1">Project layout <a class="header-anchor" href="#project-layout" aria-label="Permalink to &quot;Project layout&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mtgo-bot-api/</span></span>
<span class="line"><span>├── cmd/</span></span>
<span class="line"><span>│   └── mtgo-bot-api/          # Entry point: CLI flags, bootstrap, graceful shutdown</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── internal/</span></span>
<span class="line"><span>│   ├── server/                # Raw net/http server, multipart/query parsing</span></span>
<span class="line"><span>│   ├── manager/               # ClientManager: multi-bot lifecycle, token routing</span></span>
<span class="line"><span>│   ├── client/                # Per-bot Client: all 180 Bot API method handlers</span></span>
<span class="line"><span>│   ├── tqueue/                # TQueue: monotonic update queue + storage callback</span></span>
<span class="line"><span>│   ├── storage/               # SQLite persistence (pure Go, no CGO)</span></span>
<span class="line"><span>│   ├── webhook/               # Outgoing webhook delivery + SSRF protection</span></span>
<span class="line"><span>│   ├── convert/               # MTProto tg types ↔ Bot API JSON types</span></span>
<span class="line"><span>│   ├── types/                 # Bot API type structs (User, Chat, Message, Update, …)</span></span>
<span class="line"><span>│   ├── fileid/                # file_id / file_unique_id encode/decode (parity with TDLib)</span></span>
<span class="line"><span>│   ├── log/                   # TDLib-compatible stderr logger (verbosity 0–4)</span></span>
<span class="line"><span>│   ├── response/              # JSON response envelope</span></span>
<span class="line"><span>│   ├── stats/                 # Per-bot and global request/update statistics</span></span>
<span class="line"><span>│   └── version/               # Static build version + Bot API spec version</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── examples/                  # Multi-library example bots (Go, TypeScript, Python)</span></span>
<span class="line"><span>├── schema/                    # Scraped Bot API schema + parity certification</span></span>
<span class="line"><span>└── go.mod</span></span></code></pre></div>`,13)])])}const k=a(i,[["render",p]]);export{g as __pageData,k as default};
