export const SPACER_TYPES = Object.freeze({
  VERTICAL: "VERTICAL",
  HORIZONTAL: "HORIZONTAL",
})

export type SpacerPropTypes = {
  size?: string
  axis?: typeof SPACER_TYPES.VERTICAL | typeof SPACER_TYPES.HORIZONTAL
  className?: string
}
