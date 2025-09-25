import { CoursesPage } from "@/components/pages/courses-page/courses-page"
import { CoursesFilters } from "@/types/courses-url-filters.types"


export default async function Page({ searchParams }: {
    searchParams: Promise<CoursesFilters>
}) {


    return (
        <>
            <CoursesPage params={searchParams} />
        </>
    )
}
