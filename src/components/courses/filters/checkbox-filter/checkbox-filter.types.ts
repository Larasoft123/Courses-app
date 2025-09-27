import { category } from "@/types/types"

export interface CheckboxFilterProps {
    filterTitle: string
    filterItems: category[]
    searchParamName: string
    // signal number that changes when parent requests a reset
    resetSignal?: number

}

