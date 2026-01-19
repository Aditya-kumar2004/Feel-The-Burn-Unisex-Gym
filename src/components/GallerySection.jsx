import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import gymInterior from "@/assets/gym-interior-1.jpg";
import gymClass from "@/assets/gym-class.jpg";
import cardioZone from "@/assets/cardio-zone.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import personalTraining from "@/assets/personal-training.jpg";
const images = [
    { src: gymInterior, alt: "Premium gym equipment" },
    { src: gymClass, alt: "Group fitness class" },
    { src: cardioZone, alt: "Cardio training zone" },
    { src: gallery1, alt: "Weight training equipment" },
    { src: gallery2, alt: "Boxing and MMA area" },
    { src: personalTraining, alt: "Personal training session" },
];
const GallerySection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedImage, setSelectedImage] = useState(null);
    return (<section id="gallery" className="section-padding">
      <div className="container-gym">
        {/* Section Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-primary uppercase tracking-[0.3em] text-sm">
            Our Facility
          </span>
          <h2 className="section-title mt-4">
            Take A <span className="text-primary">Tour</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Experience our world-class facility designed to inspire your best performance.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (<motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} onClick={() => setSelectedImage(image.src)} className={`relative overflow-hidden rounded-xl cursor-pointer group ${index === 0 ? "md:row-span-2 md:col-span-2" : ""}`}>
              <img src={image.src} alt={image.alt} className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${index === 0 ? "h-full min-h-[300px] md:min-h-[500px]" : "h-[200px] md:h-[240px]"}`}/>
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300"/>
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary rounded-xl transition-all duration-500"/>
            </motion.div>))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)} className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4 cursor-pointer">
          <motion.img initial={{ scale: 0.8 }} animate={{ scale: 1 }} src={selectedImage} alt="Gallery preview" className="max-w-full max-h-[90vh] object-contain rounded-lg"/>
        </motion.div>)}
    </section>);
};
export default GallerySection;
