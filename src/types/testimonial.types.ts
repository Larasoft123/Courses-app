import { Database } from "@/types/types";

export type Testimonial =  Database["public"]["Tables"]["testimonials"]["Row"] & Database["public"]["Tables"]["profiles"] ["Row"];