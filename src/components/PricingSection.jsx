import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "2 Months",
    price: "₹2,000",
    period: "/ 2 months",
    description: "Perfect for getting started.",
    features: [
      "Gym Access",
      "General Training",
      "Cardio Zone",
      "Locker Access",
      "Change Rooms",
    ],
    popular: false,
  },
  {
    name: "4 Months",
    price: "₹3,000",
    period: "/ 4 months",
    description: "Commit to seeing results.",
    features: [
      "All Standard Benefits",
      "Steam Bath Access*",
      "Diet Support",
      "Measurement Tracking",
      "Great Value",
    ],
    popular: true,
  },
  {
    name: "1 Year",
    price: "₹10,000",
    period: "/ year",
    description: "Best value for long-term fitness.",
    features: [
      "All 4-Month Benefits",
      "Priority Support",
      "Maximum Savings",
      "Full Gym Access",
      "Steam Bath Included",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding">
      <div className="container-gym">
        {/* Section Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-primary uppercase tracking-[0.3em] text-sm">
            Membership Plans
          </span>
          <h2 className="section-title mt-4">
            Budget-Friendly <span className="text-primary">Plans</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Flexible pricing designed to fit your pocket and fitness goals.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.15 }} className={`relative rounded-2xl p-8 transition-all duration-500 ${plan.popular
              ? "bg-card border-2 border-primary glow-effect scale-[1.02]"
              : "bg-card border border-border hover:border-primary/50"}`}>
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full font-body text-xs uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="font-heading text-2xl font-bold uppercase">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>

              {/* Price */}
              <div className="mt-6 mb-8">
                <span className="font-heading text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a href="#contact" className={`block text-center w-full py-4 rounded-lg font-heading font-semibold uppercase tracking-wider transition-all duration-300 ${plan.popular
                ? "btn-primary"
                : "btn-outline hover:bg-primary hover:text-primary-foreground hover:border-primary"}`}>
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="text-center text-muted-foreground text-sm mt-8">
          * Terms and conditions apply. Contact us for latest offers.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
