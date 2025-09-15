import z from "zod"



export const formSchema = z.object({
    full_name: z.string().min(6,{message:"full name must be at least 6 characters"}),
    email: z.string().email({ message: "invalid email address" }),
    password: z.string().min(6, {
        message: "password must be at least 6 characters.",
    }).max(10, {
        message: "password must be at most 10 characters.",
    }),
    repeatPassword: z.string().min(6, {
        message: "password must be at least 6 characters.",
    }).max(10, {
        message: "password must be at most 10 characters.",
    })
})


export type FormData = z.infer<typeof formSchema>