
import { Card, CardHeader, CardContent } from "@/components/ui/card"
export function CourserGridLaterl({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="lg:row-span-full order-2 lg:col-start-5">
            <Card className="w-full h-full">
                <CardHeader>
                    <h2 className="text-xl text-balance">{title}</h2>

                </CardHeader>
                <CardContent>

                    {children}

                </CardContent>
            </Card>
        </div>
    )
}
