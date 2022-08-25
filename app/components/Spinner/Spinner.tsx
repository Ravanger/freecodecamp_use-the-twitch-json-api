import type { LinksFunction } from "@remix-run/node"
import type { SpinnerPropTypes } from "./Spinner.types"
import { AiOutlineLoading } from "react-icons/ai"
import styles from "./Spinner.module.css"

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

const Spinner: React.FC<SpinnerPropTypes> = ({ loading = true }) => {
  return (
    <div className="spinner">{loading && <AiOutlineLoading size="3ch" />}</div>
  )
}

export default Spinner
