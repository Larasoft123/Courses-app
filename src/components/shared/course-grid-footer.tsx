import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { formatPrice } from "@/utils/price/format-price"
import { Button } from "@/components/ui/button"


interface CourseGridFooterProps {
    title: string
    price?: number
    src: string | null | undefined
    description: string
    children?: React.ReactNode
}

export function CourseGridFooter({ title, price, src, description, children, }: CourseGridFooterProps) {
    return (
        <div className="lg:col-span-4 order-3 lg:row-span-2">
            <Card className="h-full">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{title} </CardTitle>
                        {price && (
                            <div>
                                <h1 className="font-semibold text-xl text-balance text-emerald-500">{formatPrice(price)}</h1>
                            </div>
                        )}

                    </div>
                </CardHeader>
                <CardContent>

                    {
                        src && (
                            <div>
                                <img src={src} alt="course image" className="w-full h-full object-cover" />
                            </div>
                        )
                    }

                    <CardDescription className="text-sm tracking-wider">
                        {description}
                    </CardDescription>

                </CardContent>

                {children && (
                    <CardFooter >
                        <CardAction className="w-full">
                            {children}
                        </CardAction>
                    </CardFooter>
                )
                }
            </Card>
        </div >

    )
}
