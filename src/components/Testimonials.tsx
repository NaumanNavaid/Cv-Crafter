import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Marketing Manager",
    content: "CV Crafter helped me land my dream job at a top tech company. The resume they created perfectly highlighted my skills and experience in the best possible way.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ali Raza",
    role: "Software Developer",
    content: "Professional, quick service, and attention to detail. They understood exactly what I needed and delivered a resume that made me stand out from other candidates.",
    rating: 5,
  },
  {
    id: 3,
    name: "Fatima Ahmed",
    role: "HR Professional",
    content: "Outstanding service! The resume was ATS-friendly and looked amazing. I got multiple interview calls within a week of applying with the new resume.",
    rating: 5,
  },
  {
    id: 4,
    name: "Omar Sheikh",
    role: "Financial Analyst",
    content: "I was struggling to get responses from employers. After CV Crafter redesigned my resume, I started getting interview requests regularly. Highly recommended!",
    rating: 5,
  },
  {
    id: 5,
    name: "Hira Mansoor",
    role: "Project Manager",
    content: "The team was very responsive and made all the revisions I requested. The final resume was exactly what I wanted - professional and tailored to my industry.",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--professional-primary))] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Don't just take our word for it - hear from professionals who transformed their careers with our resume services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel 
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <div className="relative">
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div className="card p-6 rounded-xl shadow-professional hover:shadow-lg transition-shadow duration-300 h-full">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-[hsl(var(--professional-accent))] fill-current' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                        <p className="text-[hsl(var(--muted-foreground))] mb-4 italic">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <p className="font-semibold text-[hsl(var(--professional-dark))]">{testimonial.name}</p>
                          <p className="text-sm text-[hsl(var(--muted-foreground))]">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
            </div>
          </Carousel>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 md:gap-8 card rounded-full px-6 py-4 shadow-professional">
            <div className="text-center min-w-[120px]">
              <p className="text-2xl md:text-3xl font-bold text-[hsl(var(--professional-primary))]">250+</p>
              <p className="text-xs md:text-sm text-[hsl(var(--muted-foreground))]">Resumes Created</p>
            </div>
            <div className="text-center min-w-[120px]">
              <p className="text-2xl md:text-3xl font-bold text-[hsl(var(--professional-primary))]">4.9/5</p>
              <p className="text-xs md:text-sm text-[hsl(var(--muted-foreground))]">Average Rating</p>
            </div>
            <div className="text-center min-w-[120px]">
              <p className="text-2xl md:text-3xl font-bold text-[hsl(var(--professional-primary))]">95%</p>
              <p className="text-xs md:text-sm text-[hsl(var(--muted-foreground))]">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}