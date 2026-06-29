import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeHref, setActiveHref] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Background blur transition
      setIsScrolled(window.scrollY > 20);

      // Active state tracking
      const sections = ['home', 'about', 'services', 'industries', 'contact'];
      let current = '#home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = `#${section}`;
        }
      }
      setActiveHref(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4 backdrop-blur-md bg-white/70 shadow-sm border-b border-white/50' : 'py-6 bg-transparent'
        }`}
      >
        <div className="mx-auto px-6 md:px-10 max-w-[1400px] flex justify-between items-center">
          
          {/* Left Side: Logo */}
          <a href="#home" className="flex-shrink-0 z-50 bg-white/80 backdrop-blur-md rounded-full px-5 py-2.5 md:px-6 md:py-3 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-white/60 flex items-center justify-center transition-transform hover:scale-105">
            <img 
              src="/images/Rondela.png" 
              alt="Rondela Logo" 
              className="w-[120px] md:w-[150px] lg:w-[160px] h-auto object-contain" 
            />
          </a>

          {/* Right Side: Desktop Navigation Pill */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center bg-white/80 backdrop-blur-md rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-white/60 p-1.5 px-3 h-[64px] gap-2">
              
              {navItems.map((item) => {
                const isActive = activeHref === item.href;
                const isHovered = hoveredHref === item.href;
                
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHoveredHref(item.href)}
                    onMouseLeave={() => setHoveredHref(null)}
                    className="relative px-5 py-2.5 rounded-full text-[15px] font-medium transition-colors duration-300 flex items-center justify-center"
                    style={{
                      color: isActive ? '#ffffff' : '#1F2937',
                    }}
                  >
                    {/* Hover Background */}
                    {isHovered && !isActive && (
                      <motion.div
                        layoutId="nav-hover"
                        className="absolute inset-0 bg-white rounded-full shadow-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                    
                    {/* Active Background */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-[#163A7D] rounded-full shadow-md"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      >
                        {/* Animated indicator dot underneath */}
                        <motion.div 
                          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#163A7D] rounded-full"
                          layoutId="nav-indicator"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      </motion.div>
                    )}

                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}

              {/* Separator */}
              <div className="w-[1px] h-8 bg-gray-200 mx-1" />

              {/* Get a Quote Button */}
              <a 
                href="#contact"
                className="ml-1 px-7 py-3 rounded-full font-medium text-white shadow-[0_4px_14px_rgba(255,132,82,0.4)] hover:shadow-[0_6px_20px_rgba(255,132,82,0.6)] transition-all duration-300 hover:scale-105 flex items-center justify-center relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #ff8452 0%, #ff6b2b 100%)'
                }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
                <span className="relative z-10">Get a Quote</span>
              </a>

            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-[#1F2937] hover:bg-black/5 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 md:hidden flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center gap-6 w-full max-w-sm">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: "easeOut" }}
                  className={`w-full py-4 rounded-2xl text-center text-xl font-medium transition-colors ${
                    activeHref === item.href 
                      ? 'bg-[#163A7D] text-white shadow-lg' 
                      : 'bg-gray-50 text-[#1F2937] hover:bg-gray-100'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 + navItems.length * 0.05, duration: 0.4, ease: "easeOut" }}
                className="w-full mt-4 py-4 rounded-2xl text-center text-xl font-medium text-white shadow-[0_8px_20px_rgba(255,132,82,0.4)]"
                style={{
                  background: 'linear-gradient(135deg, #ff8452 0%, #ff6b2b 100%)'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
