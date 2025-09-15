import { Course } from "@/types/course-card.types"
import { CourseCard } from "../card/course-card"
export function CourseList({ courses }: { courses: Course[] }) {

    return (
        <ul>
            {
                courses.map((course, index) => (
                    <li key={course.id}>
                        <CourseCard course={course} index={index} />
                    </li>
                ))
            }
        </ul>
    )
}
