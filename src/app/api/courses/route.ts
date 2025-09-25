import { NextRequest,NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";


export async function GET(req:NextRequest) {
    const {searchParams} = req.nextUrl
    
    const category = (searchParams.getAll('category').length > 0 ? searchParams.getAll('category') : ['all'])
    const level = (searchParams.get('level') || 'all')
    const search = (searchParams.get('search') || 'all')
    const page = (searchParams.get('page') || 1)
    const rating = Number((searchParams.get('rating')) || 0)
    const limit = Number((searchParams.get('limit')) || 10)

    

    
    
    const offset = (Number(page) - 1) * limit
    
    try {
        const supabase = await createClient()

 
        
        const { data, error } = await supabase.rpc("get_courses",{
            minimum_rating: rating,
            p_categorys: category,
            p_levels: [level],
            p_limit: limit,
            p_offset: offset
        })

        const result = await supabase.rpc("get_courses_total_pages",{
            minimum_rating: rating,
            p_categorys: category,
            p_levels: [level],
        }

        )


      

        
        

        
        
        


  
        
      

        if ((error || !data) || (!result.data || result.error) ){
            return NextResponse.json({error})
        }

        const totalPages = Math.ceil(result.data / limit)
     

        


  
  
        
        

        return NextResponse.json({data, totalPages})
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: "internal server error"})
        
    }
    
}