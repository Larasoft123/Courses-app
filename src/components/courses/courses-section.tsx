import { getCourses } from "@/lib/api/get-courses"
import { CourseList } from "./courses-list/courses-list"

const category: string[] = []
const levels: string[] = []
const page: number = 1




export async function CoursesSection() {



    const { courses } = await getCourses({ category, levels, page })






    return (
        <section id="courses" className="py-20 ">


            <div className="container z-10 mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        Featured Courses
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover cutting-edge courses designed by industry experts to prepare you for the future of technology.
                    </p>
                </div>

                <div>
                    <CourseList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8" courses={courses} />
                </div>
            </div>
        </section>
    )
}
