
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { TestimonialCardProps } from "./testimonial-card.types"

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
    return (
        <Card
            key={testimonial.id}
            className="bg-card border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 animate-slide-in-up"
            style={{ animationDelay: `${index * 0.2}s` }}
        >
            <CardContent className="p-6">
                <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary/20 text-primary">
                            {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
