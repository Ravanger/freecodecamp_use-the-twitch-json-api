import type { SpacerPropTypes } from "./Spacer.types"
import { SPACER_TYPES } from "./Spacer.types"
import classNames from "classnames"

const Spacer: React.FC<SpacerPropTypes> = ({
  axis = SPACER_TYPES.VERTICAL,
  size = "1rem",
  className,
}) => {
  const width = axis === SPACER_TYPES.VERTICAL ? null : size
  const height = axis === SPACER_TYPES.HORIZONTAL ? null : size

  return (
    <span
      className={classNames("spacer", className)}
      style={{
        ...(width && { width: width }),
        ...(height && { height: height }),
      }}
    />
  )
}

export default Spacer
