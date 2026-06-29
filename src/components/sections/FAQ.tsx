import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { 
    question: 'What industries does Rondela Services specialize in?', 
    answer: 'We provide specialized solutions across multiple sectors including Retail, Real Estate, Information Technology, Healthcare, Manufacturing, and Logistics.' 
  },
  { 
    question: 'How do you ensure the quality of your services?', 
    answer: 'Quality is at the core of everything we do. We employ industry veterans, follow rigorous standard operating procedures, and implement continuous quality checks throughout the project lifecycle.' 
  },
  { 
    question: 'Do you offer customized business solutions?', 
    answer: 'Yes, absolutely. We understand that every business is unique. Our consultation process is designed to tailor our strategies precisely to your specific requirements and goals.' 
  },
  { 
    question: 'How can I get started with Rondela?', 
    answer: 'Getting started is simple. You can reach out to us via our contact form or call us directly. Our team will schedule an initial consultation to understand your needs and propose a roadmap.' 
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Have Questions?</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Frequently Asked Questions
              </h3>
              <p className="text-gray-600 mb-8">
                Find answers to common questions about our services, processes, and how we can partner with your enterprise.
              </p>
              <button className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2">
                Still have questions? Contact us
              </button>
            </motion.div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50"
                >
                  <button
                    className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                    onClick={() => toggleFAQ(idx)}
                  >
                    <span className="font-heading font-bold text-lg text-primary">{faq.question}</span>
                    <ChevronDown 
                      className={`text-accent transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-gray-600 border-t border-gray-200 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
