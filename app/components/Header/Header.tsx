import type { HeaderPropTypes } from "./Header.types"
import classNames from "classnames"

const Header: React.FC<HeaderPropTypes> = ({ title, filter, setFilter }) => {
  return (
    <header className="header row greyBg">
      <h1>{title}</h1>
      <div className="header--controls">
        <button
          className={classNames(filter === "ALL" && "header--active")}
          onClick={() => {
            setFilter("ALL")
          }}>
          ALL
        </button>
        <button
          className={classNames(filter === "ONLINE" && "header--active")}
          onClick={() => {
            setFilter("ONLINE")
          }}>
          ONLINE
        </button>
        <button
          className={classNames(filter === "OFFLINE" && "header--active")}
          onClick={() => {
            setFilter("OFFLINE")
          }}>
          OFFLINE
        </button>
      </div>
    </header>
  )
}

export default Header
