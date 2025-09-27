import { CheckboxFilterProps } from "@/components/courses/filters/checkbox-filter/checkbox-filter.types"
import { CheckedState } from "@radix-ui/react-checkbox"
import { useSearchParams,useRouter } from "next/navigation"
import { useEffect, useState } from "react"



export function useCheckboxFilter({ searchParamName, resetSignal }: CheckboxFilterProps) {
     const { replace } = useRouter()
    const searchParams = useSearchParams()

    const [selectedItems, setSelectedItems] = useState(() =>
        searchParams.getAll(searchParamName).length > 0
            ? searchParams.getAll(searchParamName)
            : ['all'])

    // Reset when parent triggers resetSignal change
    useEffect(() => {
        if (typeof resetSignal !== 'undefined') {
            setSelectedItems(['all'])
        }
    }, [resetSignal])



    const handleCheckboxChange = (
        isChecked: CheckedState,
        item: string,
        filter: CheckboxFilterProps["searchParamName"]
    ) => {
        // Reusable handler for both category and level filters.
        const params = new URLSearchParams(searchParams.toString());

        // Helper to write the selected values into the URL params
        const writeParams = (values: string[]) => {
            params.delete(filter);
            values.forEach((v) => params.append(filter, v));
        };

        if (isChecked) {
            // If user checked the "all" option, clear specific params and set state to ['all']
            if (item === 'all') {
                setSelectedItems(['all']);
                params.delete(filter);
            } else {
                const next = [...selectedItems.filter((c) => c !== 'all'), item];
                writeParams(next);
                setSelectedItems(next);
            }
        } else {
            // Unchecking
            if (!(item === 'all')) {
                const next = selectedItems.filter((c) => c !== item);
                if (next.length === 0) {
                    // If nothing remains, fallback to ['all'] behavior
                    setSelectedItems(['all']);
                    params.delete(filter);
                } else {
                    writeParams(next);
                    setSelectedItems(next);
                }
            }
        }

        replace(`/courses?${params.toString()}`);
    }

    return {handleCheckboxChange,selectedItems}

    
}