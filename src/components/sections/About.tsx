import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              {/* Fallback color/gradient for missing image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary" />
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Corporate Office" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80"
              />
              
              {/* Floating element */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-t-4 border-accent"
              >
                <div className="text-4xl font-heading font-bold text-primary">10+</div>
                <div className="text-text font-medium">Years of Excellence</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">About Rondela</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Redefining the standard of Corporate Services
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Rondela Services Private Limited is a premier business solutions provider. We empower enterprises across India by offering end-to-end services, ranging from retail and real estate to IT and HR, all under one trusted brand.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-xl font-heading font-bold text-primary mb-3">Our Mission</h4>
                  <p className="text-gray-600">To deliver comprehensive, premium solutions that drive tangible growth for businesses.</p>
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-primary mb-3">Our Vision</h4>
                  <p className="text-gray-600">To be the most trusted enterprise partner, setting global benchmarks in service quality.</p>
                </div>
              </div>

              <button className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-secondary transition-all shadow-md hover:shadow-lg">
                Discover Our Story
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
