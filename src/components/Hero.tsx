import { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(personalInfo.heroImage);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-[#FFF9EF]">
      {/* Background Decorative Accent Lines */}
      <div className="absolute top-0 right-0 w-[40%] h-full opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#F2B632]" strokeWidth="0.5" fill="none">
          <line x1="10" y1="0" x2="10" y2="100" />
          <line x1="50" y1="0" x2="50" y2="100" />
          <line x1="90" y1="0" x2="90" y2="100" />
          <path d="M0,30 Q50,70 100,30" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column: 60% span on large desktops */}
          <motion.div
            id="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Small Greeting */}
            <motion.p
              id="hero-greeting"
              variants={itemVariants}
              className="text-[18px] font-semibold text-[#F2B632] tracking-wide uppercase flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#F2B632]"></span>
              Hello, I'm {personalInfo.name}
            </motion.p>

            {/* Huge Heading */}
            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="text-[48px] sm:text-[60px] lg:text-[72px] font-extrabold text-[#171717] leading-[1.1] tracking-tight mt-4 mb-6 font-sans"
            >
              Software <br className="hidden sm:inline" />
              <span className="text-[#F2B632]">Developer</span>
            </motion.h1>

            {/* Information Grid Row */}
            <motion.div
              id="hero-info-row"
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-[#171717]/10 text-[18px] text-[#6A6A6A] leading-[1.6]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F2B632]/10 flex items-center justify-center text-[#F2B632] shrink-0">
                  <Mail size={18} />
                </div>
                <div className="truncate">
                  <p className="text-xs text-[#6A6A6A]/60 font-semibold uppercase tracking-wider">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium text-[#171717] hover:text-[#F2B632] transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F2B632]/10 flex items-center justify-center text-[#F2B632] shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#6A6A6A]/60 font-semibold uppercase tracking-wider">Phone</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm font-medium text-[#171717] hover:text-[#F2B632] transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F2B632]/10 flex items-center justify-center text-[#F2B632] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#6A6A6A]/60 font-semibold uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium text-[#171717]">{personalInfo.location}</p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons & Social Section */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 mt-8">
              <a
                id="hero-cta-btn"
                href="#projects"
                className="inline-block text-[16px] font-semibold bg-[#F2B632] text-[#171717] px-8 py-4 rounded-md hover:bg-[#E3A81A] transition-all duration-300 transform hover:scale-[1.03] shadow-md hover:shadow-lg text-center min-w-[160px]"
              >
                View Projects
              </a>
              
              {/* Square White Social Icon Boxes */}
              <div id="hero-social-links" className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white border border-[#171717]/5 rounded-md shadow-sm text-[#171717] hover:bg-[#F2B632] hover:border-[#F2B632] transition-all duration-300 transform hover:scale-[1.05]"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white border border-[#171717]/5 rounded-md shadow-sm text-[#171717] hover:bg-[#F2B632] hover:border-[#F2B632] transition-all duration-300 transform hover:scale-[1.05]"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white border border-[#171717]/5 rounded-md shadow-sm text-[#171717] hover:bg-[#F2B632] hover:border-[#F2B632] transition-all duration-300 transform hover:scale-[1.05]"
                  aria-label="LeetCode Profile"
                  title="LeetCode Profile"
                >
                  <Code size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Column: 40% span */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Mustard Paint Splash behind the hero image */}
            <div id="hero-paint-splash" className="absolute top-[10%] left-[10%] w-[90%] h-[90%] pointer-events-none select-none z-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-[#F2B632] opacity-20 filter blur-xs">
                <path d="M44.7,-76.3C57.6,-68.1,67.6,-55.8,75.4,-42C83.2,-28.1,88.7,-14,89,0.2C89.3,14.3,84.4,28.6,76.5,41.2C68.6,53.8,57.7,64.7,44.7,72.9C31.7,81.1,15.9,86.6,0.1,86.5C-15.6,86.3,-31.2,80.5,-44.6,72.4C-57.9,64.3,-68.9,53.8,-76.3,41.1C-83.6,28.3,-87.3,13.2,-87,-1.8C-86.7,-16.9,-82.3,-31.9,-74.3,-44.1C-66.2,-56.3,-54.5,-65.7,-41.4,-73.8C-28.3,-81.8,-14.1,-88.4,0.6,-89.4C15.3,-90.4,31.7,-84.6,44.7,-76.3Z" transform="translate(100 100)" />
              </svg>
            </div>

            {/* Custom abstract decorative line element */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#F2B632] z-10 hidden sm:block"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#F2B632] z-10 hidden sm:block"></div>

            {/* Golden offset border accent for best suit angle */}
            <div className="absolute top-[8%] left-[8%] w-[84%] h-[84%] rounded-2xl border-2 border-[#F2B632] rotate-[-3deg] pointer-events-none z-0"></div>

            {/* Professional Portrait with a sophisticated tilted angle */}
            <motion.div
              id="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              whileHover={{ scale: 1.04, rotate: 1, zIndex: 20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-transparent to-[#F2B632]/10 w-full max-w-[340px] lg:max-w-none aspect-[3/4] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(242,182,50,0.2)] cursor-pointer"
            >
              {/* Premium Shimmer Skeleton Loader */}
              {!imageLoaded && (
                <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 animate-shimmer" />
                  <div className="w-16 h-16 rounded-full border-4 border-t-[#F2B632] border-[#F2B632]/20 animate-spin z-10" />
                </div>
              )}

              <img
                id="hero-portrait-img"
                src={imgSrc}
                alt={`${personalInfo.name} - Portrait`}
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  console.error("Hero image failed to load.");
                }}
                className={`w-full h-full object-cover object-center scale-[1.35] origin-[center_15%] transition-all duration-700 ease-out ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
