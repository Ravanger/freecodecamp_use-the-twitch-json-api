import type { MetaFunction, LinksFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

import globalStyles from "~/styles/global.css"

export const meta: MetaFunction = () => {
  const title = "Use the Twitch JSON API"
  const description = "freeCodeCamp: Use the Twitch JSON API"
  return {
    charset: "utf-8",
    title,
    description,
    viewport: "width=device-width,initial-scale=1",
    // OpenGraph
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:type": "website",
    // Twitter
    "twitter:site": "@BRossovsky",
    "twitter:creator": "@BRossovsky",
    "twitter:card": "summary",
  }
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
