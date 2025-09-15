'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema, FormData } from "@/components/auth/update-password/update-password-form-schema"
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
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


export function UpdatePasswordForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    const [error, setError] = useState<string | null>(null)


    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: ""
        },
    })
    const router = useRouter()

    const handleForgotPassword = async ({ password }: FormData) => {
        const supabase = createClient()
        setError(null)
        try {
            const { error } = await supabase.auth.updateUser({ password })
            if (error) throw error
            // Update this route to redirect to an authenticated route. The user already has an active session.
            router.push('/dashboard')
        } catch (error: unknown) {
            setError(error instanceof Error ? error.message : 'An error occurred')
        }
    }

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Reset Your Password</CardTitle>
                    <CardDescription>Please enter your new password below.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(handleForgotPassword)}>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="....@gmail.com" {...field} />
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
                                    {form.formState.isLoading ? 'Saving...' : 'Save new password'}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}