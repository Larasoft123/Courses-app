import {createClient} from "@/utils/supabase/server";

export async function getLevels() {

    try {
        const supabase = await createClient()
        const { data, error } = await supabase.from("levels").select("*").order("name")
  
        
        if (error || !data){
            return []
        }

        return data
        
    } catch (error) {
        return []
        
    }
    
}