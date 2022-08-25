import { useEffect, useState } from "react"
import type { LinksFunction } from "@remix-run/node"
import type { StreamerType } from "~/types/streamer"
import type { FilterType } from "~/types/filter"
import Header, { links as headerLinks } from "~/components/Header"
import ScrollToTopButton, {
  links as scrollToTopButtonLinks,
} from "~/components/ScrollToTopButton"
import Wrapper, { links as wrapperLinks } from "~/components/Wrapper"
import { STREAMERS } from "~/data/streamers"
import { TWITCH_STREAM_URL, TWITCH_USER_URL } from "~/data/apiRoutes"
import StreamContainer, {
  links as streamContainerLinks,
} from "~/components/StreamContainer"
import { links as spinnerLinks } from "~/components/Spinner"

export const links: LinksFunction = () => {
  return [
    ...wrapperLinks(),
    ...headerLinks(),
    ...scrollToTopButtonLinks(),
    ...streamContainerLinks(),
    ...spinnerLinks(),
  ]
}

const Index = () => {
  const [streamers, setStreamers] = useState<StreamerType[]>(
    STREAMERS.map((streamer) => ({
      name: streamer,
      isLoading: true,
      logoUrl: "https://i.pravatar.cc/300?img=61",
      stream: undefined,
    }))
  )

  const [filter, setFilter] = useState<FilterType>("ALL")

  useEffect(() => {
    streamers.forEach((streamer) => {
      setTimeout(async () => {
        try {
          const res = await fetch(`${TWITCH_STREAM_URL}/${streamer.name}`)
          const data = await res.json()
          let logoUrl = ""
          if (data.stream) {
            logoUrl = data.stream.channel?.logo
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

          setStreamers((oldStreamers) =>
            oldStreamers.map((oldStreamer) =>
              oldStreamer.name === streamer.name
                ? { ...oldStreamer, ...streamerAttributes }
                : oldStreamer
            )
          )
        } catch (error) {
          console.error(error)
        }
      }, Math.random() * 3000) // Simulate API latency
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!streamers || streamers.length < 1)
    return <div>No streamers available</div>

  return (
    <Wrapper>
      <Header title="Twitch Streamers" filter={filter} setFilter={setFilter} />
      {streamers
        .filter((streamer) => {
          switch (filter) {
            case "ALL":
              return true
            case "ONLINE":
              return !!streamer.stream
            case "OFFLINE":
              return !streamer.isLoading && !streamer.stream
            default:
              return true
          }
        })
        .sort((a, b) => {
          return a.stream ? -1 : 1
        })
        .map((stream) => (
          <StreamContainer streamer={stream} key={stream.name} />
        ))}
      <ScrollToTopButton />
    </Wrapper>
  )
}

export default Index
