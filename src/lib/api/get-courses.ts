import { config } from "@/config"
import { Course } from "@/types/course-card.types"
import { CoursesFilters } from "@/types/courses-url-filters.types"





export async function getCourses({levels,page,category}: CoursesFilters): Promise<{ totalPages: number, courses: Course[] }> {
    try {
        const seachParams = new URLSearchParams()
        
        if (Array.isArray(category) ) {
            category.forEach(c=> seachParams.append('category', c))
        }else{
            seachParams.append('category', category)
        }


        levels.forEach(l=> seachParams.append('level', l))
        seachParams.set('page', page.toString())

        


      
        
        const response = await fetch(`${config.ENV.BASE_URL}/api/courses?${seachParams.toString()}`)
        const data = (await response.json())
        
        
        
        

        
        return {totalPages: data.totalPages, courses: data.data}
    } catch (error) {
        console.log(error );
        
        return  {
            courses: [],
            totalPages: 0
        }
        
    }
    
}