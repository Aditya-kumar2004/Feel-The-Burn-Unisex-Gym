import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Users, Clock, Award } from "lucide-react";
import gymInterior from "@/assets/gym-interior-1.jpg";

const features = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description: "Well-maintained gym machines and free weights for all training styles.",
  },
  {
    icon: Users,
    title: "Supportive Trainers",
    description: "Friendly, certified coaches to guide your fitness journey.",
  },
  {
    icon: Clock,
    title: "Steam Bath",
    description: "Relax and recover with our premium steam bath facility.",
  },
  {
    icon: Award,
    title: "Hygienic Space",
    description: "Clean, spacious, and disciplined workout environment.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-50" />

      <div className="container-gym relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img src={gymInterior} alt="Premium gym interior with modern equipment" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl border border-border shadow-2xl">
              <div className="font-heading text-4xl font-bold text-primary">4.9</div>
              <div className="font-body text-sm text-muted-foreground">Google Rating</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="font-body text-primary uppercase tracking-[0.3em] text-sm">
              About Us
            </span>
            <h2 className="section-title mt-4">
              Welcome to <br />
              <span className="text-primary">Feel The Burn</span>
            </h2>
            <p className="section-subtitle mt-6">
              Located in Lower Chutia Samlong, Namkum, Ranchi, we are a premier unisex gym dedicated to your fitness.
              We provide a disciplined, safe, and energetic environment for both men and women.
            </p>
            <p className="text-muted-foreground mt-4">
              With spacious workout areas, good parking space, and budget-friendly plans,
              we ensure you have the best facilities to achieve your health goals.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
