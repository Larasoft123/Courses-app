
import { Card, CardContent, } from "@/components/ui/card"
import Link from "next/link"
import { Breadcumb } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { CourseGrid, CourseGridBigContainer, Video, CourseGridFooter, CourserGridLaterl } from "@/components/shared"
import { FullCourse } from "@/types/course-card.types"


export function CourseNotPurchase({ course, slug, chapterId }: { course: FullCourse, slug: string, chapterId: string }) {

    const currentChapter = course.chapters.find(chapter => chapter.id == +chapterId)

    return (
        <CourseGrid>

            <div className="row-span-1 flex w-full items-end lg:col-span-4">
                <Card className="w-full">
                    <CardContent className="flex justify-between items-center">

                        <Breadcumb slug={slug} chapterTitle={currentChapter?.title} />


                    </CardContent>
                </Card>
            </div>


            <CourserGridLaterl title="Capitulos">
                <ul className="flex flex-col gap-4">
                    {course.chapters.map((chapter, idx) => (
                        <Link href={`/courses/${slug}/${chapter.id}`} key={chapter.id}>
                            <li className={`p-4  
                                 transition-colors duration-300 
                                rounded-lg px-2 py-1 cursor-pointer
                                ${chapter.id == +chapterId ? "bg-slate-900 text-cyan-300" : 'hover:bg-slate-900 hover:text-cyan-300 text-slate-200 '}
                                `
                            }
                            >
                                <span className="text-lg text-balance leading-3 tracking-wider "> {idx + 1}. {chapter.title}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </CourserGridLaterl>






            <CourseGridBigContainer>
                Not purchase
                <Video src={null} />
            </CourseGridBigContainer>


            <CourseGridFooter src={null} title={currentChapter?.title as string} price={course.price} description={currentChapter?.description as string} >
                <Button className="text-xl w-full">
                    Enroll Now
                </Button>
            </CourseGridFooter>


        </CourseGrid>
    )
}
