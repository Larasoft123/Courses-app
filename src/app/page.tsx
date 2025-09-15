
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/hero-sections/hero-section";
import { CoursesSection } from "@/components/courses/courses-section";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";

export default function Home() {



  return (
    <>
      <Header />
      <HeroSection />
      <CoursesSection />
      <TestimonialsSection />
      <Footer />

    </>
  );
}
