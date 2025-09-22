import { ChapterPage } from "@/components/pages/chapterPage/chapterPage"
import { getCourseAndChaptersByPurchase } from "@/lib/api/get-course-and-chapter-by-purchase"
import { getCourseBySlug } from "@/lib/api/get-course-by-slug"
import { CourseNotPurchase } from "@/components/pages/courses-page/not-purchase"

export default async function ChapterCoursePage({ params }: {
    params: Promise<{ slug: string, chapterId: string }>
}) {


    const { slug, chapterId } = await params
    const course = await getCourseBySlug(slug)
    if (!course) {
        return <div>course not found</div>
    }


    const purchase = await getCourseAndChaptersByPurchase({ courseid: course.id })

    if (!purchase) {
        return <CourseNotPurchase course={course} slug={slug} chapterId={chapterId} />
    }




    return (
        <ChapterPage chapterId={chapterId} slug={slug} purchase={purchase} />
    )
}
