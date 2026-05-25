<p align="center">
  <a href="https://mtgo-labs.github.io/website/">
    <img src="https://raw.githubusercontent.com/mtgo-labs/website/main/public/mtgo-web.png" alt="MTGo" width="120">
  </a>
</p>

<h1 align="center">MTGo Website</h1>

Documentation website for [MTGo](https://github.com/mtgo-labs/mtgo), a fast and idiomatic Go client library for the Telegram MTProto API.

The site is built with [VitePress](https://vitepress.dev/) and deployed to GitHub Pages at:

https://mtgo-labs.github.io/website/

## Contents

- Guides for installation, authentication, handlers, filters, middleware, and storage.
- API documentation for clients, configuration, messages, media, users, and generated types.
- CLI, plugin, advanced transport, and example pages.
- Generated Telegram TL constructor and method reference pages.

## Development

Install dependencies:

```sh
npm ci
```

Run the local docs server:

```sh
npm run dev
```

Build the static site:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## TL Reference Generation

The generated TL documentation is produced from the MTGo source tree:

```sh
npm run tlgen
```

> [!NOTE]
> `npm run tlgen` expects the main MTGo repository to exist at `../mtgo` relative to this website directory.

## Deployment

Deployments are handled by GitHub Actions in `.github/workflows/deploy.yml`.

Every push to `main` builds the VitePress site and publishes `.vitepress/dist` through GitHub Pages.
