import { useEffect, useState } from "react"
import type { StreamerType } from "~/types/streamer"
import { TWITCH_STREAM_URL, TWITCH_USER_URL } from "~/data/apiRoutes"

export const useStreamerStatus = (streamer: StreamerType) => {
  const [streamerData, setStreamerData] = useState(streamer)

  useEffect(() => {
    const getStreamerStatus = async () => {
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

        const updatedStreamerData = { ...streamer, ...streamerAttributes }
        setStreamerData(updatedStreamerData)
      } catch (error) {
        console.error(error)
        throw error
      }
    }

    if (!streamer.isLoading) return
    getStreamerStatus()
  }, [streamer])

  return streamerData
}
