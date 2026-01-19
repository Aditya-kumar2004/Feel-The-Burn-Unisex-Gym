import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
const testimonials = [
  {
    name: "Rahul Kumar",
    role: "Gym Member",
    image: "RK",
    rating: 5,
    text: "One of the best gyms in Ranchi. The atmosphere feels like home, and every trainer is very helpful and supportive.",
  },
  {
    name: "Neha Singh",
    role: "Gym Member",
    image: "NS",
    rating: 5,
    text: "Very clean and hygienic gym with a positive vibe. The steam bath facility is great, and the pricing is very reasonable.",
  },
  {
    name: "Amit Verma",
    role: "Gym Member",
    image: "AV",
    rating: 5,
    text: "Disciplined environment with modern equipment. Good parking space and energetic workouts. Highly recommended!",
  },
];
const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (<section className="section-padding bg-secondary/30">
    <div className="container-gym">
      {/* Section Header */}
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-body text-primary uppercase tracking-[0.3em] text-sm">
          Success Stories
        </span>
        <h2 className="section-title mt-4">
          What Our <span className="text-primary">Members</span> Say
        </h2>
        <p className="section-subtitle mx-auto mt-4">
          Real stories from real people who transformed their lives with us.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (<motion.div key={testimonial.name} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.15 }} className="bg-card rounded-2xl p-8 border border-border relative group hover:border-primary/50 transition-colors duration-300">
          {/* Quote Icon */}
          <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

          {/* Rating */}
          <div className="flex gap-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-primary text-primary" />))}
          </div>

          {/* Text */}
          <p className="text-muted-foreground leading-relaxed mb-8">
            "{testimonial.text}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="font-heading text-lg font-bold text-primary">
                {testimonial.image}
              </span>
            </div>
            <div>
              <h4 className="font-heading font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>))}
      </div>
    </div>
  </section>);
};
export default TestimonialsSection;
