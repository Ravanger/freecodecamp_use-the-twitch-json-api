import type { SpacerPropTypes } from "./Spacer.types"
import classNames from "classnames"

const defaultProps: SpacerPropTypes = {
  size: "1rem",
  axis: "VERTICAL",
}

const Spacer: React.FC<SpacerPropTypes> = ({ axis, size, className }) => {
  const width = axis === "VERTICAL" ? null : size
  const height = axis === "HORIZONTAL" ? null : size

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

Spacer.defaultProps = defaultProps

export default Spacer
