import type { StreamContainerPropTypes } from "./StreamContainer.types"
import Spinner from "../Spinner"
import classNames from "classnames"
import { useStreamerStatus } from "~/hooks/useStreamerStatus"
import { memo } from "react"

const StreamContainer: React.FC<StreamContainerPropTypes> = ({
  streamer,
  filter,
}) => {
  const streamerData = useStreamerStatus(streamer)
  const status = classNames({
    loading: streamerData.isLoading,
    online: !streamerData.isLoading && streamerData.stream,
    offline: !streamerData.isLoading && !streamerData.stream,
  })

  const hideStreamer =
    filter !== "ALL" &&
    (status.toUpperCase() !== filter.toUpperCase() || streamerData.isLoading)

  return (
    <div className="streamer" data-status={status} data-hidden={hideStreamer}>
      <img
        src={streamerData.logoUrl}
        data-section="picture"
        alt={streamerData.name}
      />
      <div data-section="name">
        <a
          href={`https://www.twitch.tv/${streamerData.name}`}
          target="_blank"
          rel="noreferrer">
          <span>{streamerData.name}</span>
        </a>
      </div>
      <div data-section="description">
        {streamerData.isLoading ? (
          <Spinner />
        ) : streamerData.stream ? (
          <>
            <span className="bold italic">{streamerData.stream.game}</span> -{" "}
            <span>{streamerData.stream.channel.status}</span>
          </>
        ) : (
          "Offline"
        )}
      </div>
    </div>
  )
}

export default memo(StreamContainer)
