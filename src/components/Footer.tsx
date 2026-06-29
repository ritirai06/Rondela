

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="mb-6">
            <div className="bg-white/90 p-3 rounded-2xl shadow-lg inline-flex">
              <img src="/images/Rondela.png" alt="Rondela Logo" className="w-[140px] h-auto object-contain" />
            </div>
          </div>
          <p className="text-gray-400">
            Building Businesses. Delivering Excellence across multiple industries with premium services.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Our Services</a></li>
            <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-6">Services</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Retail Solutions</a></li>
            <li><a href="#" className="hover:text-white transition">Real Estate</a></li>
            <li><a href="#" className="hover:text-white transition">IT Services</a></li>
            <li><a href="#" className="hover:text-white transition">HR & Recruitment</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-6">Newsletter</h4>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/10 px-4 py-2 rounded-l-md focus:outline-none w-full"
            />
            <button className="bg-accent px-4 py-2 rounded-r-md hover:bg-red-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Rondela Services Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
