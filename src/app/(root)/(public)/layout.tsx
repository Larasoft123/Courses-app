import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { GradientBackground } from "@/components/shared";
export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <div className="min-h-dvh w-full relative md:p-10">
                <GradientBackground />
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}
