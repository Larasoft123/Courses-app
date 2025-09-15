import z from "zod"


export const formSchema = z.object({
    email: z.email({ message: "invalid email address" }).min(7, {
        message: "email must be at least 2 characters.",
    }),
  
})


export type FormData = z.infer<typeof formSchema>