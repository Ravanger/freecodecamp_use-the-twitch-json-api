import { useState } from "react"
import type { LinksFunction } from "@remix-run/node"
import type { StreamerType } from "~/types/streamer"
import type { FilterType } from "~/types/filter"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import Header from "~/components/Header"
import ScrollToTopButton from "~/components/ScrollToTopButton"
import Wrapper from "~/components/Wrapper"
import { STREAMERS } from "~/data/streamers"
import { TWITCH_STREAM_URL, TWITCH_USER_URL } from "~/data/apiRoutes"
import StreamContainer from "~/components/StreamContainer"
import styles from "~/styles/routes/index.css"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
}

export const loader = async () => {
  const streamers: StreamerType[] = STREAMERS.map((streamer) => ({
    name: streamer,
    isLoading: true,
    logoUrl: "https://i.pravatar.cc/300?img=61",
    stream: undefined,
  }))

  const streamerStatus = streamers.map(async (streamer) => {
    try {
      const res = await fetch(`${TWITCH_STREAM_URL}/${streamer.name}`)
      const data = await res.json()
      let logoUrl = ""
      if (data.stream) {
        logoUrl = data.stream.channel?.logo || ""
      } else {
        const resUser = await fetch(`${TWITCH_USER_URL}/${streamer.name}`)
        const dataUser = await resUser.json()
        logoUrl = dataUser.logo
      }

      const streamerAttributes = {
        stream: data.stream,
        isLoading: false,
        logoUrl,
      }

      return { ...streamer, ...streamerAttributes }
    } catch (error) {
      console.error(error)
      throw new Response("Server error", { status: 500 })
    }
  })

  return json(
    (await Promise.all(streamerStatus)).sort((a) => {
      return a.stream ? -1 : 1
    })
  )
}

const Index = () => {
  const streamers: StreamerType[] = useLoaderData<typeof loader>()

  const [filter, setFilter] = useState<FilterType>("ALL")

  if (!streamers || streamers.length < 1)
    return <div>No streamers available</div>

  return (
    <Wrapper>
      <Header title="Twitch Streamers" filter={filter} setFilter={setFilter} />
      {streamers.map((stream) => (
        <StreamContainer streamer={stream} filter={filter} key={stream.name} />
      ))}
      <ScrollToTopButton />
    </Wrapper>
  )
}

export default Index
