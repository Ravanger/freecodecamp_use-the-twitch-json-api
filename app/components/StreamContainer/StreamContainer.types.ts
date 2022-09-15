import type { FilterType } from "~/types/filter"
import type { StreamerType } from "~/types/streamer"

export type StreamContainerPropTypes = {
  streamer: StreamerType | undefined
  filter: FilterType
  isLoading: boolean
}
