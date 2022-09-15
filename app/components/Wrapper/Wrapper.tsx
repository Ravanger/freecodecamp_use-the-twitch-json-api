import type { WrapperPropTypes } from "./Wrapper.types"

const Wrapper: React.FC<WrapperPropTypes> = ({ children }) => {
  return <main className="wrapper">{children}</main>
}

export default Wrapper
