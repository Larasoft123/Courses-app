import { Database } from "@/types/types";


export type Course  =
     Database["public"]["Tables"]["courses"]["Row"] & {
        levels: Database["public"]["Tables"]["levels"]["Row"];
        categories: Database["public"]["Tables"]["categories"]["Row"];
        chapters: [ Database["public"]["Tables"]["chapters"]["Row"] & { count: number}]
    }
