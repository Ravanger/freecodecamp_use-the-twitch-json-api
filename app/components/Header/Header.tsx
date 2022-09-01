import type { HeaderPropTypes } from "./Header.types"

const Header: React.FC<HeaderPropTypes> = ({ title, filter, setFilter }) => {
  return (
    <header className="header row greyBg">
      <h1>{title}</h1>
      <div data-section="controls">
        <button
          data-active={filter === "ALL"}
          onClick={() => {
            setFilter("ALL")
          }}>
          ALL
        </button>
        <button
          data-active={filter === "ONLINE"}
          onClick={() => {
            setFilter("ONLINE")
          }}>
          ONLINE
        </button>
        <button
          data-active={filter === "OFFLINE"}
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
