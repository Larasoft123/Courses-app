import { Card } from "@/components/ui/card"
export function CourseGridBigContainer({ children }: { children: React.ReactNode }) {
    return (

        <div className="lg:col-span-4 row-span-6 order-1 lg:row-span-5  lg:row-start-2">
            <Card className="h-full p-0 flex justify-center items-center">
                {children}
            </Card>
        </div>

    )
}
