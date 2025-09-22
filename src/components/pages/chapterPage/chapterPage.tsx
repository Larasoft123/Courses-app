import { Eye } from "lucide-react"
import { Card, CardContent, } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CourseGrid, CourseGridBigContainer, Video, CourseGridFooter, CourserGridLaterl } from "@/components/shared"
import { Purchase } from "@/types/purchase.types"
import { Breadcumb } from "@/components/shared"




export async function ChapterPage({ slug, purchase, chapterId }: { slug: string, chapterId: string, purchase: Purchase }) {






    const { course: { chapters } } = purchase
    const currentChapter = chapters.find(chapter => chapter.id == +chapterId)

    if (!currentChapter) {
        return <div>chapter not found</div>
    }

    const { title, description, video_url } = currentChapter


    return (
        <CourseGrid>
            <div className="row-span-1 flex w-full items-end lg:col-span-4">
                <Card className="w-full">
                    <CardContent className="flex justify-between items-center">
                        <Breadcumb slug={slug} chapterTitle={currentChapter.title} />



                        <div className="flex items-center justify-end flex-wrap gap-3">

                        </div>
                    </CardContent>
                </Card>
            </div>


            <CourserGridLaterl title="Capitulos">
                <ul className="flex flex-col gap-4">
                    {chapters.map((chapter, idx) => (
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
                <Video src={video_url} />
            </CourseGridBigContainer>


            <CourseGridFooter src={null} title={title} description={description} >
                <Button className="text-xl flex  items-center justify-center gap-2 w-full">
                    Marcar como visto <Eye className="" />
                </Button>
            </CourseGridFooter>








        </CourseGrid>
    )
}
