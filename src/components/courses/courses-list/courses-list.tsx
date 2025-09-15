import { Course } from "@/types/course-card.types"
import { CourseCard } from "../card/course-card"
export function CourseList({ courses }: { courses: Course[] }) {

    return (
        <ul>
            {
                courses.map((course, index) => (
                    <li>
                        <CourseCard key={course.id} course={course} index={index} />
                    </li>
                ))
            }
        </ul>
    )
}
