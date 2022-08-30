import type { WrapperPropTypes } from "./Wrapper.types"

const Wrapper: React.FC<WrapperPropTypes> = ({ children }) => {
  return <div className="wrapper">{children}</div>
}

export default Wrapper
