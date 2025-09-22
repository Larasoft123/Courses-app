import { NextRequest,NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";


export async function GET(req:NextRequest) {
    
    try {
        const supabase = await createClient()

 
        
        const { data, error } = await supabase
        .rpc('get_courses')


        if (error || !data){
            return NextResponse.json({error})
        }


  
  
        
        

        return NextResponse.json(data)
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: "internal server error"})
        
    }
    
}