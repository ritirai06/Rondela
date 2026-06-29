import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import { 
  Store, HeartPulse, Factory, BookOpen, 
  Briefcase, Monitor, Building2, Truck, 
  Landmark, Utensils
} from 'lucide-react';

const industries = [
  { icon: <Store size={32} />, name: 'Retail' },
  { icon: <HeartPulse size={32} />, name: 'Healthcare' },
  { icon: <Factory size={32} />, name: 'Manufacturing' },
  { icon: <BookOpen size={32} />, name: 'Education' },
  { icon: <Briefcase size={32} />, name: 'Corporate' },
  { icon: <Monitor size={32} />, name: 'Technology' },
  { icon: <Building2 size={32} />, name: 'Real Estate' },
  { icon: <Truck size={32} />, name: 'Logistics' },
  { icon: <Landmark size={32} />, name: 'Finance' },
  { icon: <Utensils size={32} />, name: 'Hospitality' },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Expertise Across Domains</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Industries We Serve
          </h3>
        </motion.div>
      </div>

      <div className="w-full relative">
        {/* Gradient fades for carousel edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="mySwiper px-6 !transition-linear"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 6, spaceBetween: 40 },
          }}
        >
          {industries.map((ind, idx) => (
            <SwiperSlide key={idx} className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-2 hover:border-blue-100 transition-all cursor-grab active:cursor-grabbing group">
              <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
                {ind.icon}
              </div>
              <span className="font-heading font-medium text-text group-hover:text-primary transition-colors">{ind.name}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Industries;
