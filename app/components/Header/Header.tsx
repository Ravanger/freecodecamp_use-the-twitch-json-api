import { FILTER_TYPE } from "~/types/filter"
import type { HeaderPropTypes } from "./Header.types"

const Header: React.FC<HeaderPropTypes> = ({ title, filter, setFilter }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <div data-section="controls">
        <button
          data-active={filter === FILTER_TYPE.ALL}
          onClick={() => {
            setFilter(FILTER_TYPE.ALL)
          }}>
          {FILTER_TYPE.ALL}
        </button>
        <button
          data-active={filter === FILTER_TYPE.ONLINE}
          onClick={() => {
            setFilter(FILTER_TYPE.ONLINE)
          }}>
          {FILTER_TYPE.ONLINE}
        </button>
        <button
          data-active={filter === FILTER_TYPE.OFFLINE}
          onClick={() => {
            setFilter(FILTER_TYPE.OFFLINE)
          }}>
          {FILTER_TYPE.OFFLINE}
        </button>
      </div>
    </header>
  )
}

export default Header
