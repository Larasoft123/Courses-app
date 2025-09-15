import { createClient } from "@/utils/supabase/server";

export async function getCourseBySlug(slug: string) {
    try {
        const supabase = await createClient()
        const course = await supabase.from("courses").select("*,chapters(*),levels(name),categories(name)").eq("slug", slug).single()
        
        
        return course
    } catch (error) {
        return null
        
    }
    
}