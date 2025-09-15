import { Card, CardHeader, CardTitle, CardContent, } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MyCoursesModel } from "@/lib/api/get-my-courses"

export async function MyCourses() {
    const courses = await MyCoursesModel.getMyCourses()
    console.log(courses);



    return (
        <Card>
            <CardHeader>
                <CardTitle>My Courses</CardTitle>
            </CardHeader>

            <CardContent>
                <ul className="flex flex-col">
                    <li className="flex w-full items-center gap-2">
                        <Link className="w-full" href="/courses/1">
                            <Button variant={"outline"} className="w-full"></Button>
                        </Link>
                    </li>

                </ul>

            </CardContent>

        </Card>
    )
}
