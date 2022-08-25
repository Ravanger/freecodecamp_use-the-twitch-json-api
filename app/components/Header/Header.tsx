import type { LinksFunction } from "@remix-run/node"
import type { HeaderPropTypes } from "./Header.types"
import styles from "./Header.module.css"

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

const Header: React.FC<HeaderPropTypes> = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  )
}

export default Header
