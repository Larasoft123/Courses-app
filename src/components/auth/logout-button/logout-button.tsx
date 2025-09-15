"use client"

import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"
export function LogoutButton() {
    const supabase = createClient()

    const router = useRouter()
    const handleLogout = () => {
        supabase.auth.signOut()
        router.refresh()
    }
    return (
        <Button onClick={handleLogout} variant={"outline"}>
            Logout
        </Button>
    )
}
