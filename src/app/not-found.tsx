import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function NotFound() {
    return (
        <div className="min-h-screen grid place-content-center">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-6xl font-bold text-center">404 <br /> Not found</h1>

                <Link href={"/"}>
                    <Button >Go Home</Button>
                </Link>
            </div>
        </div>
    )
}
