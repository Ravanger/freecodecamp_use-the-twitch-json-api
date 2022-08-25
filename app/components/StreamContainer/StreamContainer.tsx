import type { LinksFunction } from "@remix-run/node"
import type { StreamContainerPropTypes } from "./StreamContainer.types"
import styles from "./StreamContainer.module.css"
import Spinner from "../Spinner"

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

const StreamContainer: React.FC<StreamContainerPropTypes> = ({ streamer }) => {
  return (
    <div
      className={`streamRow ${
        streamer.isLoading ? "greyBg" : streamer.stream ? "online" : "offline"
      }`}>
      <img src={streamer.logoUrl} className="profilePicture" alt="" />
      <div className="streamerName">
        <a
          href={`https://www.twitch.tv/${streamer.name}`}
          target="_blank"
          rel="noreferrer">
          <span>{streamer.name}</span>
        </a>
      </div>
      <div className="description">
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
