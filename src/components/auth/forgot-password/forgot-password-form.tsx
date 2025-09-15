'use client'


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema, FormData } from "@/components/auth/forgot-password/forgot-password-form-schema"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

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
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState } from 'react'

export function ForgotPasswordForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    const [error, setError] = useState<string | null>(null)


    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })


    const handleForgotPassword = async ({ email }: FormData) => {

        const supabase = createClient()

        setError(null)
        try {
            // The url which will be included in the email. This URL needs to be configured in your redirect URLs in the Supabase dashboard at https://supabase.com/dashboard/project/_/auth/url-configuration
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/auth/update-password`,
            })
            if (error) throw error

        } catch (error: unknown) {
            setError(error instanceof Error ? error.message : 'An error occurred')
        }
    }

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            {form.formState.isSubmitted ? (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Check Your Email</CardTitle>
                        <CardDescription>Password reset instructions sent</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            If you registered using your email and password, you will receive a password reset
                            email.
                        </p>
                    </CardContent>
                </Card>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Reset Your Password</CardTitle>
                        <CardDescription>
                            Type in your email and we&apos;ll send you a link to reset your password
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleForgotPassword)}>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-2">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>email</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="....@gmail.com" {...field} />
                                                    </FormControl>
                                                    <FormDescription>
                                                        the email
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    {error && <p className="text-sm text-red-500">{error}</p>}
                                    <Button type="submit" className="w-full" disabled={form.formState.isLoading}>
                                        {form.formState.isLoading ? 'Sending...' : 'Send reset email'}
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
            )}
        </div>
    )
}