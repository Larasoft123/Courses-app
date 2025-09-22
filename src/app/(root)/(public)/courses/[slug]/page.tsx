import { Clock, GraduationCap, UsersRound } from "lucide-react"
import { Card, CardContent, } from "@/components/ui/card"
import { getCourseBySlug } from "@/lib/api/get-course-by-slug"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CourseGrid, CourseGridBigContainer, Video, CourseGridFooter, CourserGridLaterl } from "@/components/shared"
import { Breadcumb } from "@/components/shared"

export default async function CoursePage({ params }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const course = await getCourseBySlug(slug)

    if (!course) {
        return <div>curso no existe</div>

    }
    const { name, introduction_video_url, chapters, duration, description, levels, categories, image_url, students, price, } = course







    return (
        <CourseGrid>

            <div className="row-span-1 flex w-full items-end lg:col-span-4">
                <Card className="w-full">
                    <CardContent className="flex justify-between items-center">
                        <Breadcumb slug={slug} chapterTitle={undefined} />



                        <div className="flex items-center justify-end flex-wrap gap-3">
                            <Badge className="px-4.5 inline-flex gap-2 items-center py-2.5 rounded-full" variant={"secondary"}>
                                <Clock className="w-4 h-4" />
                                {duration} Hours
                            </Badge>
                            <Badge className="px-4.5 inline-flex gap-2 items-center py-2.5 rounded-full" variant={"secondary"}>
                                <GraduationCap className="w-4 h-4" />
                                {levels.name}
                            </Badge>


                            <Badge className="px-4.5 inline-flex gap-2 items-center py-2.5 rounded-full" variant={"secondary"}>
                                <UsersRound className="w-4 h-4" />
                                {students}
                            </Badge>


                            <Badge className="px-4.5 inline-flex gap-2 items-center py-2.5 rounded-full" variant={"secondary"}>
                                <GraduationCap className="w-4 h-4" />
                                {categories.name}
                            </Badge>








                        </div>
                    </CardContent>
                </Card>
            </div>


            <CourserGridLaterl title="Capitulos">
                <ul className="flex flex-col gap-4">
                    {chapters.map((chapter, idx) => (
                        <Link href={`/courses/${slug}/${chapter.id}`} key={chapter.id}>
                            <li className="p-4 hover:bg-slate-900 text-slate-200 hover:text-cyan-300 transition-colors duration-300 rounded-lg px-2 py-1 cursor-pointer">
                                <span className="text-lg text-balance leading-3 tracking-wider "> {idx + 1}. {chapter.title}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </CourserGridLaterl>


            <CourseGridBigContainer>
                <Video src={introduction_video_url} />
            </CourseGridBigContainer>


            <CourseGridFooter src={image_url} title={name} price={price} description={description} >
                <Button className="text-xl w-full">
                    Enroll Now
                </Button>
            </CourseGridFooter>








        </CourseGrid>
    )
}
