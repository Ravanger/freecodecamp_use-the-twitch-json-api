import type { StreamContainerPropTypes } from "./StreamContainer.types"
import Spinner from "../Spinner"
import classNames from "classnames"

const StreamContainer: React.FC<StreamContainerPropTypes> = ({
  streamer: streamerData,
  filter,
  isLoading,
}) => {
  const status = classNames({
    LOADING: isLoading,
    ONLINE: !isLoading && streamerData?.stream,
    OFFLINE: !isLoading && !streamerData?.stream,
  })

  const hideStreamer = filter !== "ALL" && status !== filter

  return (
    <div className="streamer" data-status={status} data-hidden={hideStreamer}>
      <img
        src={streamerData?.logoUrl}
        data-section="picture"
        alt={streamerData?.name}
      />
      <div data-section="name">
        <a
          href={`https://www.twitch.tv/${streamerData?.name}`}
          target="_blank"
          rel="noreferrer">
          <span>{streamerData?.name}</span>
        </a>
      </div>
      <div data-section="description">
        {isLoading ? (
          <Spinner />
        ) : streamerData?.stream ? (
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

export default StreamContainer
