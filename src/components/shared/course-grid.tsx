
export function CourseGrid({ children }: { children: React.ReactNode }) {
    return (
        <section className="h-full relative container mx-auto w-full min-h-screen px-6 py-28 grid lg:grid-cols-5  lg:grid-rows-8 gap-4 grid-cols-1">
            {children}
        </section>
    )
}
