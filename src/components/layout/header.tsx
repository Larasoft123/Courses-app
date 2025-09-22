import { Button } from "@/components/ui/button"
import Link from "next/link"
import { createClient } from '@/utils/supabase/server'
import { LogoutButton } from "@/components/auth"


export async function Header() {
    const supabase = await createClient()
    const { data: user } = await supabase.auth.getUser()



    return (
        <header
            className={`fixed top-0 animation-header-scroll  w-full z-50 transition-all duration-300 `}
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg animate-glow"></div>
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        FutureLearn
                    </span>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/courses" className="text-foreground hover:text-primary transition-colors">
                        Courses
                    </Link>
                    <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="/testimonials" className="text-foreground hover:text-primary transition-colors">
                        Reviews
                    </Link>
                    <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                        Contact
                    </Link>
                </nav>


                {!user.user ? (
                    <Link href={"/auth/login"}>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                            Login
                        </Button>
                    </Link>
                ) : <LogoutButton />}

            </div>
        </header>
    )
}
