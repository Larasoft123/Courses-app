
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Book } from "lucide-react"
import { CourseCardProps } from "./course-card.types"
import { formatPrice } from "@/utils/price/format-price"
import Link from "next/link"
export function CourseCard({ course, index }: CourseCardProps) {



    return (
        <Card
            className="group hover:scale-105 transition-transform duration-300 bg-card border-border hover:border-primary/50 animate-slide-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <CardHeader className="pb-4">
                {/* Placeholder for course image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">

                        <p className="text-xs text-muted-foreground">Course Image</p>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        {course.levels.name}
                    </Badge>
                    <span className="text-2xl font-bold text-primary">{formatPrice(course.price)}</span>
                </div>

                <CardTitle className="text-xl group-hover:text-primary transition-colors">{course.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{course.description}</CardDescription>
            </CardHeader>

            <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                    </div>

                    <div className="flex items-center gap-1">
                        <Book className="h-4 w-4" />
                        {course.chapters[0].count}
                    </div>

                    <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students}
                    </div>
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {/* rating */}
                    </div>
                </div>

                <Link href={`/courses/${course.slug}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 group-hover:scale-105">
                        View Details
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}
