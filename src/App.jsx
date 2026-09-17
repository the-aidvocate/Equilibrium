import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Instagram, Facebook, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-50 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="/equilibrium_logo_large_transparent.png" alt="Equilibrium Logo" className="h-12 w-auto object-contain" />
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-brand-800 hover:text-accent transition-colors font-medium text-sm tracking-wider uppercase">About</a>
              <a href="#services" className="text-brand-800 hover:text-accent transition-colors font-medium text-sm tracking-wider uppercase">Services</a>
              <a href="#gallery" className="text-brand-800 hover:text-accent transition-colors font-medium text-sm tracking-wider uppercase">Gallery</a>
              <a href="#contact" className="text-brand-800 hover:text-accent transition-colors font-medium text-sm tracking-wider uppercase">Contact</a>
              <a href="#booking" className="bg-brand-800 text-white px-6 py-2 rounded-full hover:bg-brand-700 transition-colors text-sm uppercase tracking-wider font-medium">Book Now</a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-brand-800">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-brand-50 pt-24 px-4">
          <div className="flex flex-col space-y-6 items-center">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-brand-800">About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-brand-800">Services</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-brand-800">Gallery</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-brand-800">Contact</a>
            <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="bg-brand-800 text-white px-8 py-3 rounded-full mt-4">Book Now</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden clip-path-slant pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-900/40 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src="/vid1.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl text-white font-serif mb-6 leading-tight"
          >
            Find Your <br/><span className="text-accent-light italic">Equilibrium</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-brand-50 mb-10 max-w-2xl mx-auto font-light"
          >
            Bespoke beauty, wellness, and massage therapies crafted to restore your body and rejuvenate your soul.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#booking" className="inline-flex items-center space-x-2 bg-white text-brand-900 px-8 py-4 rounded-full hover:bg-brand-100 transition-colors group">
              <span className="uppercase tracking-wider font-medium text-sm">Discover Treatments</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-accent/30 rounded-t-full rounded-b-xl -z-10"></div>
                <img src="/2.jpeg" alt="Massage Therapy" className="rounded-t-full rounded-b-xl shadow-xl w-full h-[600px] object-cover" />
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="md:w-1/2"
            >
              <h4 className="text-accent uppercase tracking-widest font-semibold text-sm mb-4">The Philosophy</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-6">Restoring balance through touch & care</h2>
              <p className="text-brand-700 mb-6 leading-relaxed text-lg font-light">
                At Equilibrium by Jen, we believe that true beauty radiates from a foundation of deep wellness. Our sanctuary is designed to provide you with a moment of pause in your busy life.
              </p>
              <p className="text-brand-700 mb-8 leading-relaxed text-lg font-light">
                Using premium products and tailored techniques, every treatment is a personalized journey. From tension-melting massages to revitalizing skincare, we are dedicated to bringing you back to your natural state of harmony.
              </p>
              <img src="/equilibrium_logo_large_transparent.png" alt="Signature" className="h-16 opacity-80" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-brand-100 clip-path-slant-reverse mt-12 pb-32">
        <div className="max-w-7xl mx-auto px-4 pt-12">
          <div className="text-center mb-16">
            <h4 className="text-accent uppercase tracking-widest font-semibold text-sm mb-4">Our Offerings</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-900">Curated Treatments</h2>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Holistic Massage', img: '/1.jpeg', desc: 'Melt away tension and restore your physical balance with our signature therapeutic touch.' },
              { title: 'Facial Rejuvenation', img: '/3.jpeg', desc: 'Nourish your skin with premium botanical products tailored to your unique complexion.' },
              { title: 'Body Rituals', img: '/4.jpeg', desc: 'Exfoliating scrubs and hydrating wraps designed to leave your skin glowing and renewed.' }
            ].map((service, index) => (
              <motion.div key={index} variants={fadeIn} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-6 relative">
                  <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-brand-900/10 transition-colors z-10"></div>
                  <img src={service.img} alt={service.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-2xl font-serif text-brand-900 mb-3 text-center">{service.title}</h3>
                <p className="text-brand-700 text-center font-light leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-16">
            <button className="border-2 border-brand-800 text-brand-800 px-8 py-3 rounded-full hover:bg-brand-800 hover:text-white transition-colors uppercase tracking-wider font-medium text-sm">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h4 className="text-accent uppercase tracking-widest font-semibold text-sm mb-4">Atmosphere</h4>
              <h2 className="text-4xl font-serif text-brand-900">The Space</h2>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hidden md:flex items-center space-x-2 text-brand-700 hover:text-accent transition-colors">
              <Instagram size={20} />
              <span className="uppercase tracking-wider text-sm font-medium">Follow Us</span>
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/1.jpeg" className="w-full h-64 object-cover rounded-xl" alt="Gallery 1" />
            <img src="/2.jpeg" className="w-full h-64 object-cover rounded-xl" alt="Gallery 2" />
            <img src="/3.jpeg" className="w-full h-64 object-cover rounded-xl" alt="Gallery 3" />
            <img src="/5.jpeg" className="w-full h-64 object-cover rounded-xl" alt="Gallery 4" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-brand-900 text-brand-100 pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <img src="/equilibrium_logo_large_transparent.png" alt="Equilibrium Logo" className="h-16 mb-6 brightness-0 invert opacity-90" />
            <p className="text-brand-300 font-light leading-relaxed mb-6">
              A premium sanctuary for wellness, beauty, and massage therapies. Restore your natural balance today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-700 flex items-center justify-center hover:bg-brand-800 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-700 flex items-center justify-center hover:bg-brand-800 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-6 text-white">Contact & Visit</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-brand-300">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="font-light">123 Wellness Avenue<br/>Larnaca, Cyprus</span>
              </li>
              <li className="flex items-center space-x-3 text-brand-300">
                <Phone size={20} className="flex-shrink-0" />
                <span className="font-light">+357 99 123 456</span>
              </li>
              <li className="flex items-center space-x-3 text-brand-300">
                <Mail size={20} className="flex-shrink-0" />
                <span className="font-light">hello@equilibriumbyjen.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-6 text-white">Opening Hours</h3>
            <ul className="space-y-3 font-light text-brand-300">
              <li className="flex justify-between border-b border-brand-800 pb-2">
                <span>Monday - Friday</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-brand-800 pb-2">
                <span>Saturday</span>
                <span>10:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-brand-800 pb-2">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-400 font-light">
          <p>&copy; {new Date().getFullYear()} Equilibrium by Jen. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
