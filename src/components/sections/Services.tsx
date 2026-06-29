import { motion } from 'framer-motion';
import { 
  Store, Building2, Paintbrush, GraduationCap, ShoppingCart, 
  Truck, Briefcase, ClipboardList, Users, ShieldCheck, Laptop, 
  ArrowRight
} from 'lucide-react';
import { ScrollStack, ScrollStackItem } from '../ui/ScrollStack';

const services = [
  { 
    id: 1, 
    title: 'Retail & Franchise Solutions', 
    desc: 'End-to-end business expansion, store planning, and comprehensive retail operations tailored for modern brands.', 
    category: 'Expansion',
    icon: Store,
    img: '/images/Retail.png'
  },
  { 
    id: 2, 
    title: 'Real Estate', 
    desc: 'Expert office setup, commercial consultancy, and property advisory to secure the perfect location for your business.', 
    category: 'Infrastructure',
    icon: Building2,
    img: '/images/Real Estate.png'
  },
  { 
    id: 3, 
    title: 'Interior Designing Services', 
    desc: 'Space optimization and premium commercial interiors that reflect your brand identity and boost productivity.', 
    category: 'Design',
    icon: Paintbrush,
    img: '/images/Interior Designing Services.png'
  },
  { 
    id: 4, 
    title: 'Education & Training Services', 
    desc: 'Professional skill development and workshops designed to upskill your workforce for future challenges.', 
    category: 'Development',
    icon: GraduationCap,
    img: '/images/Education & Training Services.png'
  },
  { 
    id: 5, 
    title: 'E-commerce Services', 
    desc: 'Robust digital storefronts and omnichannel strategies to maximize your online retail presence and sales.', 
    category: 'Digital',
    icon: ShoppingCart,
    img: '/images/E-commerce Services.png'
  },
  { 
    id: 6, 
    title: 'Logistics & Supply Chain Solutions', 
    desc: 'Streamlined logistics, inventory management, and reliable supply chain solutions for efficient operations.', 
    category: 'Operations',
    icon: Truck,
    img: '/images/Logistics & Supply Chain Solutions.png'
  },
  { 
    id: 7, 
    title: 'Corporate Management Services', 
    desc: 'Strategic planning and corporate governance to ensure sustainable growth and operational excellence.', 
    category: 'Strategy',
    icon: Briefcase,
    img: '/images/Manufacturing Services.jpg'
  },
  { 
    id: 8, 
    title: 'Project Management', 
    desc: 'Agile methodologies and expert oversight to deliver complex projects on time and within budget.', 
    category: 'Execution',
    icon: ClipboardList,
    img: '/images/Hero Banner Prompt (Homepage).jpg'
  },
  { 
    id: 9, 
    title: 'Vendor Management', 
    desc: 'Optimized procurement processes and strong supplier relationships for cost-effective resourcing.', 
    category: 'Operations',
    icon: Users,
    img: '/images/Vendor Management.jpg'
  },
  { 
    id: 10, 
    title: 'Compliance Management', 
    desc: 'Rigorous regulatory adherence and risk mitigation to protect your business across all jurisdictions.', 
    category: 'Legal',
    icon: ShieldCheck,
    img: '/images/Compliance Management.jpg'
  },
  { 
    id: 11, 
    title: 'Information Technology (IT) Services', 
    desc: 'Cutting-edge IT infrastructure, cloud solutions, and digital transformation for modern enterprises.', 
    category: 'Technology',
    icon: Laptop,
    img: '/images/(IT) Services.png'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#F8F9FC] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-[800] text-[#163A7D] mb-6">
              Our Services
            </h2>
            <p className="text-[18px] md:text-xl text-[#6B7280]">
              Comprehensive business solutions designed to accelerate your growth.
            </p>
          </motion.div>
        </div>

        <ScrollStack className="max-w-[1400px] w-full mx-auto">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <ScrollStackItem 
                key={svc.id} 
                index={index} 
                totalItems={services.length}
                className="mb-[30px] md:mb-[40px] last:mb-0 w-full flex justify-center"
              >
                <div 
                  className="w-full md:w-[88%] md:h-[450px] lg:h-[480px] rounded-[32px] bg-white border border-black/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col md:flex-row overflow-hidden group hover:-translate-y-1.5 transition-transform duration-500"
                  style={{ padding: '48px' }} // Desktop padding, overridden by classes on mobile if needed
                >
                  
                  {/* Left Side: Content (45%) */}
                  <div className="w-full md:w-[45%] flex flex-col justify-center pr-0 md:pr-12 relative z-10">
                    <div className="flex flex-col items-start h-full justify-between">
                      
                      <div className="w-full">
                        <div className="flex items-center gap-4 mb-6 md:mb-8">
                          <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#ff8452] flex items-center justify-center text-white shadow-[0_8px_20px_rgba(255,132,82,0.4)] group-hover:shadow-[0_12px_24px_rgba(255,132,82,0.6)] transition-all duration-500">
                            <Icon size={28} className="group-hover:rotate-[5deg] transition-transform duration-500" />
                          </div>
                          <div className="px-3 py-1 rounded-full bg-[#ff8452] text-white text-[11px] md:text-[12px] font-bold uppercase tracking-widest">
                            {svc.category}
                          </div>
                        </div>

                        <h3 className="text-3xl md:text-[40px] lg:text-[48px] font-heading font-[800] text-[#163A7D] mb-4 md:mb-6 leading-[1.1]">
                          {svc.title}
                        </h3>
                        
                        <p className="text-[16px] md:text-[18px] text-[#6B7280] leading-[1.7] mb-8 line-clamp-3">
                          {svc.desc}
                        </p>
                      </div>

                      <button className="group/btn inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white border-2 border-[#163A7D] text-[#163A7D] font-medium hover:bg-[#163A7D] hover:text-white transition-colors duration-250 w-max">
                        <span>Learn More</span>
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-250" />
                      </button>
                    </div>
                  </div>

                  {/* Right Side: Image (55%) */}
                  <div className="w-full md:w-[55%] h-[300px] md:h-full mt-10 md:mt-0 rounded-[24px] overflow-hidden shrink-0 relative">
                    <img 
                      src={svc.img} 
                      alt={svc.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>
    </section>
  );
};

export default Services;
