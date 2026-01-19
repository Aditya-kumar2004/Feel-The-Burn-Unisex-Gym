import { motion } from "framer-motion";
import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Athlete in gym with dramatic red lighting" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-gym relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-block font-body text-primary uppercase tracking-[0.3em] text-sm mb-6">
            Unisex Gym / Fitness Center
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="section-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] mb-6 text-white">
            Burn Calories. <br />
            Build Strength. <br />
            <span className="text-primary">Feel the Burn.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="section-subtitle text-lg md:text-xl mb-10 text-zinc-300">
            Join the best gym in Ranchi. Experience modern equipment, supportive trainers, and a
            positive atmosphere. Your transformation starts here.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="btn-primary text-center">
              Join Now
            </a>
            <a href="#services" className="btn-outline text-center">
              Our Facilities
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }} className="flex flex-wrap gap-8 md:gap-16 mt-16 pt-8 border-t border-border/30">
            {[
              { value: "4.9", label: "Rating (388+ Reviews)" },
              { value: "Unisex", label: "Men & Women" },
              { value: "05:15", label: "Opens Daily" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-zinc-400 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
