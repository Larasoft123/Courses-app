import { NextRequest,NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";


export async function GET(req:NextRequest) {
    
    try {
        const supabase = await createClient()

        const {data,error} = await supabase.from("courses").select("id,created_at,name,slug,price,students,duration,image_url,description, levels(name),categories(name), chapters(count)")
   

        if (error || !data){
            return NextResponse.json({error})
        }
        

        return NextResponse.json(data)
        
    } catch (error) {
        
    }
    
}