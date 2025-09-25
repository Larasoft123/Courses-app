import { NextRequest,NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";


export async function GET(req:NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const limit = Number(searchParams.get("limit")) || 10
    const page = Number(searchParams.get("page")) || 1
    const offset = (page - 1) * limit

    
    try {
        const supabase = await createClient()

        const {data, error} = await supabase.from("testimonials")
        .select("*, profiles(*), courses(*)").order("created_at", {
            ascending: false
        })
        .range(offset, offset + limit - 1)
        


        if (error || !data){
            return NextResponse.json({error})
        }
        

        return NextResponse.json(data)
        
    } catch (error) {
        console.log(error );
        
        return NextResponse.json({message: "internal server error"})
        
    }
    
}