import TestimonialCard from "./testimonial-card/testimonial-card"
import { Testimonial } from "@/types/testimonial.types"




export function TestimonialsSection() {

    const testimonials: Testimonial[] = []
    return (
        <section id="testimonials" className="py-20 ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                        Student Success Stories
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of students who have transformed their careers with our cutting-edge courses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard testimonial={testimonial} key={index} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
