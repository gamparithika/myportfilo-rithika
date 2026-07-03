import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Technical Skills', href: '#technical-skills' },
    { name: 'Internship', href: '#internship' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FFF9EF]/90 backdrop-blur-md py-4 shadow-sm border-b border-[#F2B632]/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a id="nav-logo" href="#home" className="text-2xl font-bold tracking-tight text-[#171717] hover:opacity-80 transition-opacity">
          Rithika<span className="text-[#F2B632]">.</span>
        </a>

        {/* Desktop Links */}
        <div id="desktop-menu" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-link-${link.name.toLowerCase()}`}
              href={link.href}
              className="text-[16px] font-medium text-[#171717] hover:text-[#F2B632] transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#F2B632] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Hire Me Button */}
        <div className="hidden lg:block">
          <a
            id="nav-hire-btn"
            href="#contact"
            className="inline-block text-[16px] font-semibold bg-[#F2B632] text-[#171717] px-8 py-3 rounded-md hover:bg-[#E3A81A] transition-all duration-300 transform hover:scale-[1.03] shadow-sm hover:shadow-md"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#171717] hover:text-[#F2B632] p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#FFF9EF] border-b border-[#F2B632]/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#171717] hover:text-[#F2B632] transition-colors py-2 border-b border-[#F2B632]/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                id="mobile-hire-btn"
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 block text-center text-base font-semibold bg-[#F2B632] text-[#171717] py-3 rounded-md hover:bg-[#E3A81A] transition-colors"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
