import { Clock } from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { getCourseBySlug } from "@/lib/api/get-course-by-slug"


export default async function CoursePage({ params }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const course = await getCourseBySlug(slug)

    if (!course) {
        return <div>curso no existe</div>

    }
    const { } = course




    return (
        <section className="h-full relative container mx-auto w-full min-h-screen py-28 grid md:grid-cols-5  md:grid-rows-8 gap-4 grid-cols-1">

            <div className="col-span-4">
                <Card className="">
                    <CardContent className="flex justify-between items-center">
                        <h1 className="text-4xl font-bebas">{slug}</h1>
                        <span className="bg-accent inline-flex justify-center items-center rounded-full px-4 py-2 gap-4 text-sm font-medium text-white">
                            <Clock className="w-4 h-4" />
                            1h
                        </span>
                    </CardContent>
                </Card>
            </div>
            <div className="row-span-full col-start-5">
                <Card className="w-full h-full">
                    <CardHeader>dsafd</CardHeader>
                </Card>
            </div>

            <div className="col-span-4 row-span-4 row-start-2">
                <Card className="h-full">



                </Card>
            </div>


            <div className="col-span-4 row-span-3">
                <Card className="h-full"></Card>
            </div>



        </section>
    )
}
