import type { StreamContainerPropTypes } from "./StreamContainer.types"
import Spinner from "../Spinner"
import classNames from "classnames"

const StreamContainer: React.FC<StreamContainerPropTypes> = ({
  streamer,
  filter,
}) => {
  const status = classNames({
    loading: streamer.isLoading,
    online: !streamer.isLoading && streamer.stream,
    offline: !streamer.isLoading && !streamer.stream,
  })

  return (
    <div
      className={classNames("streamer", "row")}
      data-status={status}
      data-hidden={
        filter !== "ALL" &&
        (status.toUpperCase() !== filter.toUpperCase() || streamer.isLoading)
      }>
      <img
        src={streamer.logoUrl}
        className="streamer"
        data-section="picture"
        alt={streamer.name}
      />
      <div className="streamer" data-section="name">
        <a
          href={`https://www.twitch.tv/${streamer.name}`}
          target="_blank"
          rel="noreferrer">
          <span>{streamer.name}</span>
        </a>
      </div>
      <div className="streamer" data-section="description">
        {streamer.isLoading ? (
          <Spinner />
        ) : streamer.stream ? (
          <>
            <span className="bold italic">{streamer.stream.game}</span> -{" "}
            <span>{streamer.stream.channel.status}</span>
          </>
        ) : (
          "Offline"
        )}
      </div>
    </div>
  )
}

export default StreamContainer
