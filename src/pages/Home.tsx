import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Services from '../components/sections/Services';
import Stats from '../components/sections/Stats';
import Industries from '../components/sections/Industries';
import Process from '../components/sections/Process';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import Threads from '../components/ui/Threads';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 250]);

  return (
    <div className="w-full">
      {/* PREMIUM CINEMATIC HERO SECTION */}
      <section 
        id="home" 
        className="relative w-full h-[100vh] flex flex-col justify-center overflow-hidden pt-24"
      >
        {/* Parallax Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 25, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
          >
            <img 
              src="/images/Hero Banner Prompt (Homepage).jpg" 
              alt="Hero Background" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </motion.div>

        {/* Dark Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(90deg, rgba(4,16,42,0.85) 0%, rgba(8,28,66,0.75) 35%, rgba(9,31,73,0.40) 65%, rgba(9,31,73,0.15) 100%)'
          }}
        />

        {/* Subtle Threads Animation */}
        <div className="absolute inset-0 z-20 mix-blend-soft-light opacity-50 pointer-events-none">
          <Threads 
            amplitude={0.25}
            distance={0.05}
            enableMouseInteraction={true}
            opacity={0.1}
            color="255,255,255"
          />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-10 max-w-[1400px] w-full relative z-30">
          
          <div className="max-w-[620px] text-left">
            
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 inline-block"
            >
              <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                Rondela Services Private Limited
              </div>
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-[40px] md:text-[54px] lg:text-[64px] font-heading font-[600] text-white leading-[1.1] mb-6 tracking-tight"
            >
              Redefining<br />Corporate Excellence
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-[18px] md:text-[20px] text-white/75 leading-[1.8] mb-10"
            >
              Enterprise solutions for Retail, Real Estate, IT, Interior Design, Logistics, and Corporate Management.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <a 
                href="#contact"
                className="px-8 py-4 rounded-full font-medium text-white shadow-[0_8px_24px_rgba(255,132,82,0.3)] hover:shadow-[0_12px_32px_rgba(255,132,82,0.5)] hover:-translate-y-1 transition-all duration-300 text-center"
                style={{ background: 'linear-gradient(135deg, #ff8452 0%, #ff6b2b 100%)' }}
              >
                Get Started
              </a>
              <a 
                href="#services"
                className="px-8 py-4 rounded-full font-medium text-white border border-white/20 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-center backdrop-blur-sm"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Compact Floating Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { value: '150+', label: 'Projects' },
                { value: '50+', label: 'Clients' },
                { value: '12+', label: 'Industries' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 py-2 flex items-center gap-3"
                >
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="w-1 h-1 rounded-full bg-white/30" />
                  <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      <About />
      <WhyChooseUs />
      <Services />
      <Stats />
      <Industries />
      <Process />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
