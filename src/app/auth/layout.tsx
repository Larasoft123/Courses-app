import { GradientBackground } from '@/components/shared'


export default function AuthLayout({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className="flex min-h-dvh w-full relative items-center justify-center p-6 md:p-10">
            <GradientBackground />

            {children}

        </div>
    )
}
