import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Dynamically compute unique categories from data
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading & Filter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[18px] font-semibold text-[#F2B632] uppercase tracking-wider mb-2">
              PROJECTS
            </p>
            <h2 id="portfolio-heading" className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#171717] tracking-tight leading-[1.2]">
              Showcasing Innovative <br />
              <span className="text-[#6A6A6A] font-medium">Software & Systems</span>
            </h2>
          </div>

          {/* Clean, minimalist filter controls */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-[#F2B632] text-[#171717] shadow-sm'
                    : 'bg-[#FFF9EF] text-[#6A6A6A] hover:bg-[#F2B632]/10 hover:text-[#171717]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Responsive Grid */}
        <motion.div 
          id="portfolio-grid" 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="group bg-white rounded-xl overflow-hidden border border-[#171717]/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Card Content underneath */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  {/* Category Indicator */}
                  <div className="mb-4">
                    <span className="bg-[#171717]/5 text-[#6A6A6A] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <a 
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : undefined}
                    rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block hover:underline"
                  >
                    <h3 className="text-xl font-extrabold text-[#171717] tracking-tight mb-3 group-hover:text-[#F2B632] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </a>

                  {/* Description */}
                  <p className="text-[#6A6A6A] text-sm leading-[1.6] mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Explore Details CTA */}
                  <a
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : undefined}
                    rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#171717] uppercase tracking-wider group-hover:text-[#F2B632] transition-colors duration-300 pt-4 border-t border-[#171717]/5 cursor-pointer hover:underline"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
