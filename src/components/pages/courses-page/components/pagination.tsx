"use client"
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSearchParams, useRouter } from 'next/navigation'



export function Pagination({ currentPage, totalPages }: { currentPage: number, totalPages: number }) {
    const { replace } = useRouter()
    const searchParams = useSearchParams()


    const setCurrentPage = (page: number) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', page.toString())
        replace(`?${params.toString()}`)
    }

    return (
        <div className="flex items-center justify-center gap-2 flex-wrap">
            <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-10"
            >
                <ChevronLeft className="h-4 w-4" />
                Previous
            </Button>

            <div className="flex items-center gap-2.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-10 h-10"
                    >
                        {page}
                    </Button>
                ))}
            </div>

            <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-10"
            >
                Next
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}
