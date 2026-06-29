import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, ShieldCheck, Award, ThumbsUp, ArrowRight } from 'lucide-react';

const cards = [
  {
    id: 1,
    icon: Users,
    label: 'Expertise',
    title: 'Experienced Professionals',
    desc: 'Our team comprises industry veterans dedicated to your long-term success and growth.',
    // Deep Navy
    cardClass: 'col-span-1 md:col-span-2 md:row-span-2 bg-[#163A7D] text-white',
    iconClass: 'bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]',
    labelClass: 'text-[#ff8452]',
    titleClass: 'text-white text-3xl md:text-5xl',
    descClass: 'text-white/80',
    buttonClass: 'bg-white/10 hover:bg-white text-white hover:text-[#163A7D]',
    watermark: Users,
  },
  {
    id: 2,
    icon: Target,
    label: 'Complete',
    title: 'End-to-End Solutions',
    desc: 'Comprehensive services that cover every aspect of your business operations.',
    // Orange Gradient
    cardClass: 'col-span-1 md:col-span-1 md:row-span-2',
    style: { background: 'linear-gradient(135deg, #ff8452, #ff6a3d)' },
    iconClass: 'bg-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]',
    labelClass: 'text-white/90',
    titleClass: 'text-white text-3xl md:text-4xl',
    descClass: 'text-white/90',
    buttonClass: 'bg-white/20 hover:bg-white text-white hover:text-[#ff6a3d]',
    watermark: Target,
  },
  {
    id: 3,
    icon: TrendingUp,
    label: 'Value',
    title: 'Cost Effective',
    desc: 'Premium quality services optimized for maximum ROI.',
    // Glass Card
    cardClass: 'col-span-1 bg-white/75 backdrop-blur-[20px] border border-white/50 text-[#163A7D]',
    iconClass: 'bg-[#ff8452]/10 text-[#ff8452] shadow-[0_0_20px_rgba(255,132,82,0.1)]',
    labelClass: 'text-[#ff8452]',
    titleClass: 'text-[#163A7D] text-2xl md:text-3xl',
    descClass: 'text-[#6B7280]',
    buttonClass: 'bg-[#163A7D]/5 hover:bg-[#163A7D] text-[#163A7D] hover:text-white',
    watermark: TrendingUp,
  },
  {
    id: 4,
    icon: ShieldCheck,
    label: 'Reliability',
    title: 'Trusted Partnerships',
    desc: 'We build relationships based on mutual trust.',
    // Light Card
    cardClass: 'col-span-1 bg-white border border-black/[0.06] text-[#163A7D]',
    iconClass: 'bg-[#163A7D]/10 text-[#163A7D] shadow-[0_0_20px_rgba(22,58,125,0.1)]',
    labelClass: 'text-[#ff8452]',
    titleClass: 'text-[#163A7D] text-2xl md:text-3xl',
    descClass: 'text-[#6B7280]',
    buttonClass: 'bg-gray-50 hover:bg-[#163A7D] text-[#163A7D] hover:text-white',
    watermark: ShieldCheck,
  },
  {
    id: 5,
    icon: Award,
    label: 'Excellence',
    title: 'Quality Driven',
    desc: 'Uncompromising standards in every project.',
    // Light Card
    cardClass: 'col-span-1 bg-white border border-black/[0.06] text-[#163A7D]',
    iconClass: 'bg-[#163A7D]/10 text-[#163A7D] shadow-[0_0_20px_rgba(22,58,125,0.1)]',
    labelClass: 'text-[#ff8452]',
    titleClass: 'text-[#163A7D] text-2xl md:text-3xl',
    descClass: 'text-[#6B7280]',
    buttonClass: 'bg-gray-50 hover:bg-[#163A7D] text-[#163A7D] hover:text-white',
    watermark: Award,
  },
  {
    id: 6,
    icon: ThumbsUp,
    label: 'Focus',
    title: 'Customer First',
    desc: 'Your vision and goals are the core focus of our strategies.',
    // Deep Navy (Wide)
    cardClass: 'col-span-1 md:col-span-2 bg-[#163A7D] text-white',
    iconClass: 'bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]',
    labelClass: 'text-[#ff8452]',
    titleClass: 'text-white text-3xl md:text-4xl',
    descClass: 'text-white/80',
    buttonClass: 'bg-white/10 hover:bg-white text-white hover:text-[#163A7D]',
    watermark: ThumbsUp,
  },
];

const WhyChooseUs = () => {
  return (
    <section 
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF3F9 100%)'
      }}
    >
      {/* Subtle radial gradients behind the cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold text-[#ff8452] tracking-[0.2em] uppercase mb-4">
              The Rondela Advantage
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#163A7D] mb-6">
              Why Choose Us?
            </h3>
            <p className="text-lg md:text-xl text-[#6B7280]">
              Delivering reliable, scalable, and innovative business solutions that help organizations grow with confidence.
            </p>
          </motion.div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const Watermark = card.watermark;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-[32px] p-8 md:p-10 shadow-sm hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between min-h-[320px] ${card.cardClass}`}
                style={card.style || {}}
              >
                {/* Decorative Watermark */}
                <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-6">
                  <Watermark size={240} />
                </div>
                
                {/* Card Header: Icon & Label */}
                <div className="relative z-10 flex flex-col items-start mb-6 md:mb-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-[6deg] group-hover:scale-110 ${card.iconClass}`}>
                    <Icon size={32} />
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-[0.15em] mb-3 ${card.labelClass}`}>
                    {card.label}
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 mt-auto">
                  <h4 className={`font-heading font-[800] leading-[1.1] mb-4 ${card.titleClass}`}>
                    {card.title}
                  </h4>
                  <p className={`text-[17px] md:text-[18px] leading-[1.6] mb-8 max-w-sm ${card.descClass}`}>
                    {card.desc}
                  </p>
                  
                  {/* Arrow Button */}
                  <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${card.buttonClass}`}>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
