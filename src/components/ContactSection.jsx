import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SuccessModal from "./SuccessModal";
import BASE_URL from "@/config/api";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Lower Chutia Samlong, Namkum", "Ranchi, Jharkhand – 834010"],
    href: "https://www.google.com/maps/search/?api=1&query=Feel+The+Burn+unisex+gym+Lower+Chutia+Samlong+Namkum+Ranchi+Jharkhand+834010",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 081026 66661"],
    href: "tel:+918102666661",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["Contact at Gym Reception"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon-Sat: 5:15 AM – 10:00 PM", "Sunday: Open"],
  },
];
const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccessModal(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to connect to the server.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (<section id="contact" className="section-padding bg-secondary/30">
    <div className="container-gym">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="font-body text-primary uppercase tracking-[0.3em] text-sm">
            Get In Touch
          </span>
          <h2 className="section-title mt-4">
            Start Your <span className="text-primary">Journey</span>
          </h2>
          <p className="section-subtitle mt-4 mb-10">
            Ready to transform your life? Contact us today for a free consultation
            and tour of our facility.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => {
              const CardContent = (
                <>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                  {item.details.map((detail) => (<p key={detail} className="text-sm text-muted-foreground">
                    {detail}
                  </p>))}
                </>
              );

              if (item.href) {
                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors duration-300 block cursor-pointer"
                  >
                    {CardContent}
                  </motion.a>
                );
              }

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  {CardContent}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="font-heading text-2xl font-bold mb-6">
              Send Us a Message
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">
                  Full Name
                </label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Enter your name" />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    Email
                  </label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    Phone
                  </label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Enter your phone number" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">
                  Message
                </label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your fitness goals..." />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Google Map Embedding */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 rounded-2xl overflow-hidden border border-border shadow-lg h-[400px] w-full"
      >
        <iframe
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Feel+The+Burn+unisex+gym+Lower+Chutia+Samlong,+Namkum,+Ranchi,+Jharkhand+834010&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="yes"
          marginHeight="0"
          marginWidth="0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Feel The Burn Gym Location"
          className="transition-all duration-500"
        ></iframe>
      </motion.div>
    </div>
    <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
  </section>);
};
export default ContactSection;
