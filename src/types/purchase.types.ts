import { Database } from "./types"

export type Purchase = Database["public"]["Tables"]["purchases"]["Row"] & {
    course:  Database["public"]["Tables"]["courses"]["Row"] & {
        chapters: Database["public"]["Tables"]["chapters"]["Row"][]
    
    }
}