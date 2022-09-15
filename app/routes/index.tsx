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
import StreamContainer from "~/components/StreamContainer"
import styles from "~/styles/routes/index.css"
import { useQueries } from "@tanstack/react-query"
import { getStreamerData } from "~/util/streamers"

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

  return json(streamers)
}

const Index = () => {
  const streamers: StreamerType[] = useLoaderData<typeof loader>()
  const [filter, setFilter] = useState<FilterType>("ALL")
  const streamerQueries = useQueries({
    queries: streamers.map((streamer) => {
      return {
        queryKey: ["streamer", `streamer-${streamer.name}`],
        queryFn: () => getStreamerData(streamer),
        placeholderData: streamer,
      }
    }),
  })

  if (!streamers || streamers.length < 1)
    return <div>No streamers available</div>

  return (
    <Wrapper>
      <Header title="Twitch Streamers" filter={filter} setFilter={setFilter} />
      {streamerQueries
        .sort((streamer) => {
          return streamer.data?.stream ? -1 : 1
        })
        .map((streamer, index) => (
          <StreamContainer
            key={`${streamer.data?.name}${index}`}
            streamer={streamer.data}
            filter={filter}
            isLoading={streamer.isLoading || streamer.isFetching}
          />
        ))}
      <ScrollToTopButton />
    </Wrapper>
  )
}

export default Index
