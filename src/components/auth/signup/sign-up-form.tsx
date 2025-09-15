'use client'

import { cn } from '@/lib/utils'
import { createClient } from '@/utils/supabase/client'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormData, formSchema } from "./sign-up-form.types"
import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from '@/components/ui/input'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"



export function SignUpForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            repeatPassword: "",
            full_name: ""
        },
    })

    const handleSignUp = async ({ email, repeatPassword, password, full_name }: FormData) => {
        const supabase = createClient()
        setError(null)

        if (password !== repeatPassword) {
            setError('Passwords do not match')
            return
        }

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name
                    }
                }

            })
            if (error) throw error
            router.push('/auth/sign-up-success')
        } catch (error: unknown) {
            setError(error instanceof Error ? error.message : 'An error occurred')

        }
    }

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Sign up</CardTitle>
                    <CardDescription>Create a new account</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(handleSignUp)}>
                            <div className="flex flex-col gap-6">


                                <div className="grid gap-2">

                                    <FormField
                                        control={form.control}
                                        name="full_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Carla Lopez" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    The name
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>


                                <div className="grid gap-2">

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="ejemplo@gmail.com" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    The email
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>
                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>password</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="misecurepassword" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    password
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>
                                <div className="grid gap-2">


                                    <FormField
                                        control={form.control}
                                        name="repeatPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Repeat Password</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="misecurepassword" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    password
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>

                                {error && <p className="text-sm text-red-500">{error}</p>}
                                <Button type="submit" className="w-full" disabled={form.formState.isLoading}>
                                    {form.formState.isLoading ? 'Creating an account...' : 'Sign up'}
                                </Button>
                            </div>
                            <div className="mt-4 text-center text-sm">
                                Already have an account?{' '}
                                <Link href="/auth/login" className="underline underline-offset-4">
                                    Login
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}