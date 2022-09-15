import type { StreamerType } from "~/types/streamer"
import { TWITCH_STREAM_URL, TWITCH_USER_URL } from "~/data/apiRoutes"

export const getStreamerData = async (
  streamer: StreamerType
): Promise<StreamerType> => {
  try {
    const res = await fetch(`${TWITCH_STREAM_URL}/${streamer.name}`)
    if (!res.ok) throw Error("Error fetching streamer data")
    const data = await res.json()

    let logoUrl = "https://i.pravatar.cc/300?img=61"
    if (data.stream) {
      logoUrl = data.stream.channel?.logo || logoUrl
    } else {
      const resUser = await fetch(`${TWITCH_USER_URL}/${streamer.name}`)
      if (!resUser.ok) throw Error("Error fetching streamer logo data")
      logoUrl = (await resUser.json()).logo || logoUrl
    }

    return {
      ...streamer,
      stream: data.stream,
      isLoading: false,
      logoUrl,
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
