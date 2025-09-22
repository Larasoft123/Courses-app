import { MyCourses } from "./components/my-courses/my-courses"

export function Dashboard() {
    return (
        <div className="w-full p-4 h-full flex flex-col">
            <div className="grid xl:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1">
                <MyCourses />
            </div>



        </div>
    )
}
