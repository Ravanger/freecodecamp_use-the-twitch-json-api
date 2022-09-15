export const FILTER_TYPE = Object.freeze({
  ALL: "ALL",
  ONLINE: "ONLINE",
  OFFLINE: "OFFLINE",
})

export type FilterType =
  | typeof FILTER_TYPE.ONLINE
  | typeof FILTER_TYPE.OFFLINE
  | typeof FILTER_TYPE.ALL
