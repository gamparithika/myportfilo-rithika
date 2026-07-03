import { Github, Linkedin, ArrowUp, Code } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#FFF9EF] pt-16 pb-12 border-t border-[#171717]/10 relative">
      {/* Scroll To Top Round Button */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-[#F2B632] text-[#171717] hover:bg-[#E3A81A] transition-colors duration-300 shadow-md flex items-center justify-center group focus:outline-none"
          aria-label="Scroll to top of the page"
        >
          <ArrowUp size={20} className="transform group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Brand Name Logo */}
        <a href="#home" className="text-2xl font-bold tracking-tight text-[#171717] hover:opacity-80 transition-opacity mb-6">
          Rithika<span className="text-[#F2B632]">.</span>
        </a>

        {/* Minimal Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-8 text-sm font-semibold text-[#6A6A6A]">
          <a href="#home" className="hover:text-[#F2B632] transition-colors">Home</a>
          <a href="#education" className="hover:text-[#F2B632] transition-colors">Education</a>
          <a href="#technical-skills" className="hover:text-[#F2B632] transition-colors">Technical Skills</a>
          <a href="#internship" className="hover:text-[#F2B632] transition-colors">Internship</a>
          <a href="#projects" className="hover:text-[#F2B632] transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-[#F2B632] transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-[#F2B632] transition-colors">Contact</a>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-md bg-white border border-[#171717]/5 flex items-center justify-center text-[#171717] hover:bg-[#F2B632] hover:border-[#F2B632] shadow-sm transition-all duration-300 transform hover:scale-105"
            aria-label="GitHub Link"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-md bg-white border border-[#171717]/5 flex items-center justify-center text-[#171717] hover:bg-[#F2B632] hover:border-[#F2B632] shadow-sm transition-all duration-300 transform hover:scale-105"
            aria-label="LinkedIn Link"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={personalInfo.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-md bg-white border border-[#171717]/5 flex items-center justify-center text-[#171717] hover:bg-[#F2B632] hover:border-[#F2B632] shadow-sm transition-all duration-300 transform hover:scale-105"
            aria-label="LeetCode Link"
            title="LeetCode Profile"
          >
            <Code size={18} />
          </a>
        </div>

        {/* Copyright notice */}
        <div className="text-center text-xs font-semibold text-[#6A6A6A]/80 tracking-wide uppercase">
          &copy; {currentYear} Gampa Rithika. All rights reserved. <br className="sm:hidden" />
          <span className="hidden sm:inline">|</span> Designed with premium luxury aesthetics.
        </div>

      </div>
    </footer>
  );
}
