import z from "zod"


export const formSchema = z.object({
    email: z.email({ message: "invalid email address" }).min(7, {
        message: "email must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "password must be at least 6 characters.",
    }).max(10, {
        message: "password must be at most 10 characters.",
    })
})


export type FormData = z.infer<typeof formSchema>