import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  {
    name: "Marcus Chen",
    role: "Strength & Conditioning",
    experience: "12 years experience",
    image: trainer1,
    specialties: ["Powerlifting", "Olympic Lifting", "Athletic Performance"],
  },
  {
    name: "Sarah Rodriguez",
    role: "HIIT & Functional Training",
    experience: "8 years experience",
    image: trainer2,
    specialties: ["HIIT", "Bootcamp", "Weight Loss"],
  },
  {
    name: "David Miller",
    role: "Personal Training",
    experience: "10 years experience",
    image: trainer3,
    specialties: ["Bodybuilding", "Nutrition", "Contest Prep"],
  },
];

const TrainersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trainers" className="section-padding bg-muted/40 dark:bg-secondary/20">
      <div className="container-gym">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-body text-primary uppercase tracking-[0.3em] text-sm">
            Our Team
          </span>
          <h2 className="section-title mt-4">
            Expert <span className="text-primary">Trainers</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Friendly, supportive, and certified professionals dedicated to your success.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-[350px] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient removed for cleaner look in light mode */}

                {/* Social Icons - Positioned on top of image at bottom right */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-zinc-900 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-zinc-900 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-primary font-body uppercase tracking-wider text-xs font-semibold">
                  {trainer.role}
                </p>
                <p className="text-muted-foreground text-sm mt-1 mb-4">
                  {trainer.experience}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {trainer.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
