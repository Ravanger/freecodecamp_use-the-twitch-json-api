export enum SPACER_TYPES {
  VERTICAL = "Vertical",
  HORIZONTAL = "Horizontal",
}

export type SpacerPropTypes = {
  size?: string
  axis?: SPACER_TYPES
  className?: string
}
