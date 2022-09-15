import type { SpinnerPropTypes } from "./Spinner.types"
import { AiOutlineLoading } from "react-icons/ai"

const Spinner: React.FC<SpinnerPropTypes> = ({ loading = true }) => {
  if (!loading) return null

  return <div className="spinner">{<AiOutlineLoading size="3ch" />}</div>
}

export default Spinner
