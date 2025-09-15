import { NextRequest,NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import {Roles} from "@/types/types"



export async function GET(req: NextRequest){
    
    
    try {
        const supabase = await createClient()
        const {data,error} = await supabase.auth.getUser()
        const {user} = data
        
      
        
      
        
    
        
        
    
    
        if (error || !user) {
            return NextResponse.json({message: "Unauthorized"}, {status: 401})
        }



        const courses =  await supabase
        .rpc('get_courses_for_user', {
            user_id_param: user.id
        })
  

    

    
        return NextResponse.json(courses)
        
        
    } catch (error) {
        return NextResponse.json({message: "internal server error", status: 500})
        
    }

    

}