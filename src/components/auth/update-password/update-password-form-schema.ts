import z from "zod"


export const formSchema = z.object({
    password: z.string().min(6, {
        message: "password must be at least 6 characters.",
    }),
  
})


export type FormData = z.infer<typeof formSchema>