import type { LinksFunction } from "@remix-run/node"
import type { WrapperPropTypes } from "./Wrapper.types"
import styles from "./Wrapper.module.css"

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

const Wrapper: React.FC<WrapperPropTypes> = ({ children }) => {
  return <div className="wrapper">{children}</div>
}

export default Wrapper
