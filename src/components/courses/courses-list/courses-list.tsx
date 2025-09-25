import { Course } from "@/types/course-card.types"
import { CourseCard } from "../card/course-card"
export function CourseList({ courses, className }: { courses: Course[], className?: string }) {

    return (
        <ul className={className} >
            {
                courses.map((course, index) => {


                    return (
                        <li key={course.course_id}>
                            <CourseCard course={course} index={index} />
                        </li>)
                })
            }
        </ul>
    )
}
