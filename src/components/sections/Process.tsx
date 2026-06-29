import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Rocket, CheckCircle, HeadphonesIcon } from 'lucide-react';

const steps = [
  { id: 1, title: 'Consultation', icon: <Lightbulb size={24} />, desc: 'Understanding your unique business needs.' },
  { id: 2, title: 'Planning', icon: <PenTool size={24} />, desc: 'Designing a tailored strategic roadmap.' },
  { id: 3, title: 'Execution', icon: <Rocket size={24} />, desc: 'Implementing the solutions with precision.' },
  { id: 4, title: 'Delivery', icon: <CheckCircle size={24} />, desc: 'Handing over the completed project.' },
  { id: 5, title: 'Support', icon: <HeadphonesIcon size={24} />, desc: 'Ongoing maintenance and optimization.' },
];

const Process = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Our Methodology</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary">
              How We Work
            </h3>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-100 via-primary/30 to-blue-100 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-white border-4 border-gray-50 text-primary rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 relative">
                  {step.icon}
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:animate-ping -z-10" />
                </div>
                
                <h4 className="text-xl font-heading font-bold text-primary mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-500">
                  {step.desc}
                </p>
                
                {/* Mobile Connector */}
                {idx !== steps.length - 1 && (
                  <div className="md:hidden w-1 h-8 bg-blue-100 my-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
