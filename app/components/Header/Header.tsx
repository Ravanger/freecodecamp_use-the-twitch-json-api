import type { HeaderPropTypes } from "./Header.types"
import classNames from "classnames"

const Header: React.FC<HeaderPropTypes> = ({ title, filter, setFilter }) => {
  return (
    <header className="header streamRow greyBg">
      <h1>{title}</h1>
      <div className="controls">
        <button
          className={classNames(filter === "ALL" && "active")}
          onClick={() => {
            setFilter("ALL")
          }}>
          ALL
        </button>
        <button
          className={classNames(filter === "ONLINE" && "active")}
          onClick={() => {
            setFilter("ONLINE")
          }}>
          ONLINE
        </button>
        <button
          className={classNames(filter === "OFFLINE" && "active")}
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
