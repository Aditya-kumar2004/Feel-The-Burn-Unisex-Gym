import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gymClass from "@/assets/gym-class.jpg";
import personalTraining from "@/assets/personal-training.jpg";
import cardioZone from "@/assets/cardio-zone.jpg";
import gymInterior from "@/assets/gym-interior-1.jpg";
const services = [
  {
    title: "Modern Equipment",
    description: "Top-quality machines and free weights available for all muscle groups.",
    image: gymInterior,
  },
  {
    title: "Cardio Zone",
    description: "Treadmills, cycling, and cardio machines to boost endurance and burn calories.",
    image: cardioZone,
  },
  {
    title: "Steam Bath",
    description: "Relaxing steam bath facility available at a minimal price to help you recover.",
    image: gymClass,
  },
  {
    title: "Personal Training",
    description: "Expert guidance from friendly trainers to reach your fitness goals faster.",
    image: personalTraining,
  },
];
const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (<section id="services" className="section-padding">
    <div className="container-gym">
      {/* Section Header */}
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-body text-primary uppercase tracking-[0.3em] text-sm">
          What We Offer
        </span>
        <h2 className="section-title mt-4">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="section-subtitle mx-auto mt-4">
          Everything you need to achieve your fitness goals under one roof.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (<motion.div key={service.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="group relative h-[350px] rounded-2xl overflow-hidden cursor-pointer card-hover">
          {/* Background Image */}
          <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-white">
              {service.title}
            </h3>
            <p className="text-zinc-300 mt-2 max-w-sm">
              {service.description}
            </p>
            <div className="flex items-center gap-2 mt-4 text-primary font-body text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
              Learn More <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-500" />
        </motion.div>))}
      </div>
    </div>
  </section>);
};
export default ServicesSection;
