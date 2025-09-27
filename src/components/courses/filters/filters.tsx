"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SelectTrigger, SelectContent, SelectItem, Select, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { CheckboxFilter } from "./checkbox-filter/checkbox-filter"
import { FiltersProps } from "./filters.types"





export function Filters({ categories, levels }: FiltersProps) {
    const { replace } = useRouter()
    const searchParams = useSearchParams()
    const [resetSignal, setResetSignal] = useState<number>(0)




    const clearFilters = () => {
        const params = new URLSearchParams(searchParams.toString())
        params.delete("category")
        params.delete("level")
        params.delete("search")
        params.delete("rating")

        replace(`/courses?${params.toString()}`)
        // bump signal so children reset their internal state
        setResetSignal((n) => n + 1)


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
            <CheckboxFilter filterTitle="Categorias" searchParamName="category" filterItems={categories} resetSignal={resetSignal} />


            {/* Level Filter */}
            <CheckboxFilter filterTitle="Niveles" searchParamName="level" filterItems={levels} resetSignal={resetSignal} />


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
            <Button variant="outline" onClick={clearFilters} className="w-full h-11 mt-6 bg-transparent">
                <X className="h-4 w-4 mr-2" />
                Clear Filters
            </Button>
        </div>
    )
}
