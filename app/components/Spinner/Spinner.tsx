import type { SpinnerPropTypes } from "./Spinner.types"
import { AiOutlineLoading } from "react-icons/ai"

const Spinner: React.FC<SpinnerPropTypes> = ({ loading = true }) => {
  return (
    <div className="spinner">{loading && <AiOutlineLoading size="3ch" />}</div>
  )
}

export default Spinner
