"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { CheckboxFilterProps } from "./checkbox-filter.types"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { CheckedState } from "@radix-ui/react-checkbox"
import { useEffect } from "react"

export function CheckboxFilter({ filterItems, filterTitle, searchParamName, resetSignal }: CheckboxFilterProps) {
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

    return (
        <div className="space-y-3">
            <Label className="text-sm font-medium">{filterTitle} </Label>

            <div className="flex flex-col gap-y-2">

                <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                    <Checkbox
                        value={'all'}
                        onCheckedChange={(e) => handleCheckboxChange(e, 'all', searchParamName)}
                        aria-checked={selectedItems.includes('all')}
                        checked={selectedItems.includes('all')}
                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                    />
                    <div className="grid gap-1.5 font-normal">
                        <p className="text-sm leading-none font-medium">
                            All
                        </p>

                    </div>
                </Label>

                {
                    filterItems.map((filterCategory) => (
                        <Label key={filterCategory.id} className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                            <Checkbox
                                onCheckedChange={(e) => handleCheckboxChange(e, filterCategory.name, searchParamName)}
                                checked={selectedItems.includes(filterCategory.name)}
                                value={filterCategory.name}
                                aria-checked={selectedItems.includes(filterCategory.name)}
                                className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                            />
                            <div className="grid gap-1.5 font-normal">
                                <p className="text-sm leading-none font-medium">
                                    {filterCategory.name}
                                </p>

                            </div>
                        </Label>
                    ))
                }
            </div>

        </div>

    )
}
