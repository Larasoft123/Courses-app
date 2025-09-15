import TestimonialCard from "./testimonial-card/testimonial-card"


const testimonials = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "AI Engineer at TechCorp",
        content:
            "The AI course completely transformed my career. The hands-on projects and expert mentorship helped me land my dream job in just 6 months.",
        rating: 5,
    },
    {
        id: 2,
        name: "Marcus Rodriguez",
        role: "Blockchain Developer",
        content:
            "Outstanding curriculum and real-world applications. I built my first DApp during the course and now I'm working on revolutionary blockchain projects.",
        rating: 5,
    },
    {
        id: 3,
        name: "Emily Watson",
        role: "Data Scientist",
        content:
            "The instructors are industry leaders who provide invaluable insights. The community support and networking opportunities are incredible.",
        rating: 5,
    },
]

export function TestimonialsSection() {
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
