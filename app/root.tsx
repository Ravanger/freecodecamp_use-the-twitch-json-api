import type { MetaFunction, LinksFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div>An error has occurred!</div>
        <pre>{`${error.name}: ${error.message}`}</pre>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
