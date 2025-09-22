import { config } from "@/config";


export class MyCoursesModel {


    
    static async getMyCourses() {
   
        
        
        const response = await fetch(`${config.ENV.BASE_URL}/api/my-courses`);
        const data = await response.json();
        return data;
    }

}

