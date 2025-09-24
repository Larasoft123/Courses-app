"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SelectTrigger, SelectContent, SelectItem, Select, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { Database } from "@/types/types"
import { Checkbox } from "@/components/ui/checkbox"
import React, { useState } from "react"
import { CheckedState } from "@radix-ui/react-checkbox"


type category = Database["public"]["Tables"]["categories"]["Row"]

interface FiltersProps {
    categories: category[]
    levels: Database["public"]["Tables"]["levels"]["Row"][]
}

export function Filters({ categories, levels }: FiltersProps) {
    const { replace } = useRouter()
    const searchParams = useSearchParams()
    const [selectedCategories, setSelectedCategories] = useState(() =>
        searchParams.getAll("category").length > 0
            ? searchParams.getAll("category")
            : ['all'])

    const [selectedLevels, setSelectedLevels] = useState(() =>
        searchParams.getAll("level").length > 0
            ? searchParams.getAll("level")
            : ['all'])



    const handleCheckboxChange = (
        isChecked: CheckedState,
        item: string,
        filter: 'category' | 'level'
    ) => {
        // Reusable handler for both category and level filters.
        const params = new URLSearchParams(searchParams.toString());


        // Select the right state/setter based on filter
        const currentSelected = filter === 'category' ? selectedCategories : selectedLevels;
        const setCurrentSelected = filter === 'category' ? setSelectedCategories : setSelectedLevels;

        // Helper to write the selected values into the URL params
        const writeParams = (values: string[]) => {
            params.delete(filter);
            values.forEach((v) => params.append(filter, v));
        };

        if (isChecked) {
            // If user checked the "all" option, clear specific params and set state to ['all']
            if (item === 'all') {
                setCurrentSelected(['all']);
                params.delete(filter);
            } else {
                const next = [...currentSelected.filter((c) => c !== 'all'), item];
                writeParams(next);
                setCurrentSelected(next);
            }
        } else {
            // Unchecking
            if (!(item === 'all')) {
                const next = currentSelected.filter((c) => c !== item);
                if (next.length === 0) {
                    // If nothing remains, fallback to ['all'] behavior
                    setCurrentSelected(['all']);
                    params.delete(filter);
                } else {
                    writeParams(next);
                    setCurrentSelected(next);
                }
            }
        }

        replace(`/courses?${params.toString()}`);
    }



    const setSearchTerm = useDebouncedCallback((searchTerm: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (searchTerm) {
            params.set('search', searchTerm)
        } else {
            params.delete('search')
        }
        replace(`/courses?${params.toString()}`)

    }, 500)

    const handleFilterChange = (filter: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (value === 'all') {
            params.delete(filter)
        } else {
            params.set(filter, value)
        }
        replace(`/courses?${params.toString()}`)
    }


    return (
        <div className="space-y-6 p-1">
            {/* Search */}
            <div className="space-y-3">
                <Label htmlFor="search" className="text-sm font-medium">Search Courses</Label>

                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        id="search"
                        placeholder="Search by course name..."
                        value={searchParams.get('search') || ''}
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                        className="pl-10 h-11"
                    />
                </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
                <Label className="text-sm font-medium">categorias</Label>

                <div className="flex flex-col gap-y-2">
                    <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                        <Checkbox
                            value={'all'}
                            onCheckedChange={(e) => handleCheckboxChange(e, 'all', 'category')}
                            aria-checked={selectedCategories.includes('all')}
                            checked={selectedCategories.includes('all')}
                            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                        />
                        <div className="grid gap-1.5 font-normal">
                            <p className="text-sm leading-none font-medium">
                                All
                            </p>

                        </div>
                    </Label>

                    {
                        categories.map((category) => (
                            <Label key={category.id} className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                <Checkbox
                                    onCheckedChange={(e) => handleCheckboxChange(e, category.name, 'category')}
                                    checked={selectedCategories.includes(category.name)}
                                    value={category.name}
                                    aria-checked={selectedCategories.includes(category.name)}
                                    className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                />
                                <div className="grid gap-1.5 font-normal">
                                    <p className="text-sm leading-none font-medium">
                                        {category.name}
                                    </p>

                                </div>
                            </Label>
                        ))
                    }
                </div>

            </div>

            {/* Level Filter */}
            <div className="space-y-3">
                <Label className="text-sm font-medium">Niveles</Label>


                <div className="flex flex-col gap-y-2">

                    <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                        <Checkbox
                            value={'all'}
                            onCheckedChange={(e) => handleCheckboxChange(e, 'all', 'level')}
                            aria-checked={selectedLevels.includes('all')}
                            checked={selectedLevels.includes('all')}
                            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                        />
                        <div className="grid gap-1.5 font-normal">
                            <p className="text-sm leading-none font-medium">
                                All
                            </p>

                        </div>
                    </Label>

                    {levels.map(level => (
                        <Label key={level.id} className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                            <Checkbox
                                onCheckedChange={(e) => handleCheckboxChange(e, level.name, 'level')}
                                checked={selectedLevels.includes(level.name)}
                                value={level.name}
                                aria-checked={selectedLevels.includes(level.name)}
                                className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                            />
                            <div className="grid gap-1.5 font-normal">
                                <p className="text-sm leading-none font-medium">
                                    {level.name}
                                </p>

                            </div>
                        </Label>

                    ))}




                </div>
            </div>

            {/* Rating Filter */}
            <div className="space-y-3">
                <Label className="text-sm font-medium">Minimum Rating</Label>
                <Select
                    value={searchParams.get('rating') || 'all'}
                    onValueChange={(value) => {
                        handleFilterChange("rating", value)
                    }}
                >
                    <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Ratings</SelectItem>
                        <SelectItem value="4.5">4.5+ Stars</SelectItem>
                        <SelectItem value="4.0">4.0+ Stars</SelectItem>
                        <SelectItem value="3.5">3.5+ Stars</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Clear Filters */}
            <Button variant="outline" className="w-full h-11 mt-6 bg-transparent">
                <X className="h-4 w-4 mr-2" />
                Clear Filters
            </Button>
        </div>
    )
}
