import type { StreamContainerPropTypes } from "./StreamContainer.types"
import Spinner from "../Spinner"
import classNames from "classnames"

const StreamContainer: React.FC<StreamContainerPropTypes> = ({ streamer }) => {
  return (
    <div
      className={classNames("row", {
        greyBg: streamer.isLoading && !streamer.stream,
        "streamer--online": !streamer.isLoading && streamer.stream,
        "streamer--offline": !streamer.isLoading && !streamer.stream,
      })}>
      <img
        src={streamer.logoUrl}
        className="streamer--picture"
        alt={streamer.name}
      />
      <div className="streamer--name">
        <a
          href={`https://www.twitch.tv/${streamer.name}`}
          target="_blank"
          rel="noreferrer">
          <span>{streamer.name}</span>
        </a>
      </div>
      <div className="streamer--description">
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
