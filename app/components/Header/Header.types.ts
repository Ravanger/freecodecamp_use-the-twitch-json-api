import type { FilterType } from "~/types/filter"

export type HeaderPropTypes = {
  title: string
  filter: FilterType
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>
}
