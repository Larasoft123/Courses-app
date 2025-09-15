import { config } from "@/config"
import { Course } from "@/types/course-card.types"
export async function getCourses({}): Promise<Course[]> {
    try {
        const response = await fetch(`${config.ENV.BASE_URL}/api/courses`)
        const data = (await response.json() as Course[] )
        
        
        
        return data
    } catch (error) {
        console.log(error );
        
        return  []
        
    }
    
}