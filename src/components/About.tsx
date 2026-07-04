import { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { personalInfo } from '../data';

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(personalInfo.aboutImage);

  const educationItems = [
    {
      institution: 'SR University',
      period: '2023 – 2027',
      degree: 'B.Tech in Computer Science Engineering',
      metricLabel: 'CGPA',
      metricValue: '9.2/10.0',
      description: 'Deepening foundational core algorithms, software engineering principles, OOP systems, and computer networks. Maintaining stellar academic standing and actively leading full-stack & AI/ML project cycles.'
    },
    {
      institution: 'SR Junior College',
      period: '2021 – 2023',
      degree: 'Intermediate (M.P.C)',
      metricLabel: 'GPA',
      metricValue: '8.8/10.0',
      description: 'Completed pre-university education with a strong focus on Mathematics, Physics, and Chemistry, laying a robust analytical foundation.'
    }
  ];

  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Line Grid */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full border-x border-[#171717]/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Image (40-45% width equivalent) */}
          <motion.div
            id="about-image-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Outline Decorative Frame */}
            <div className="absolute -bottom-5 -left-5 w-full h-full border-2 border-[#F2B632] rounded-xl pointer-events-none z-0 rotate-[-2deg]"></div>

            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border border-[#171717]/5 aspect-[3/4] bg-gradient-to-b from-transparent to-[#F2B632]/10">
              {/* Premium Shimmer Skeleton Loader */}
              {!imageLoaded && (
                <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 animate-shimmer" />
                  <div className="w-16 h-16 rounded-full border-4 border-t-[#F2B632] border-[#F2B632]/20 animate-spin z-10" />
                </div>
              )}

              <img
                id="about-portrait-img"
                src={imgSrc}
                alt={`About ${personalInfo.name}`}
                referrerPolicy="no-referrer"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  console.error("About image failed to load.");
                }}
                className={`w-full h-full object-cover object-center scale-[1.35] origin-[center_15%] transition-all duration-700 ease-out ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
            
            {/* Visual badge */}
            <div className="absolute -bottom-3 -right-3 bg-[#F2B632] text-[#171717] px-6 py-4 rounded-lg shadow-md z-20 text-center font-sans">
              <span className="block text-3xl font-extrabold tracking-tight">9.2</span>
              <span className="text-xs uppercase font-bold tracking-wider opacity-90">CGPA Score</span>
            </div>
          </motion.div>

          {/* Right Side: Content Column (55-60% width equivalent) */}
          <motion.div
            id="about-content-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="text-[18px] font-semibold text-[#F2B632] uppercase tracking-wider mb-2">
              EDUCATION
            </p>
            
            <h2 id="about-heading" className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#171717] leading-[1.2] tracking-tight mb-6">
              Academic Journey <br className="hidden sm:inline" />
              <span className="text-[#6A6A6A] font-medium">& Foundations</span>
            </h2>

            <div className="space-y-6 text-[18px] text-[#6A6A6A] leading-[1.6] mb-8">
              <p>
                {personalInfo.bio}
              </p>
            </div>

            {/* Structured Education Cards */}
            <div className="space-y-6">
              {educationItems.map((edu, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-xl bg-[#FFF9EF] border border-[#171717]/5 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:border-[#F2B632]/30 transition-all duration-300"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="text-[#F2B632]" size={20} />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#6A6A6A]">{edu.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#171717]">{edu.institution}</h3>
                    <p className="text-sm font-semibold text-[#6A6A6A]">{edu.degree}</p>
                    <p className="text-sm text-[#6A6A6A]/90 leading-relaxed mt-2">{edu.description}</p>
                  </div>

                  <div className="bg-white px-4 py-2.5 rounded-lg border border-[#171717]/5 text-center min-w-[100px] self-start sm:self-center">
                    <span className="block text-xs font-bold text-[#6A6A6A] uppercase tracking-wider">{edu.metricLabel}</span>
                    <span className="block text-lg font-extrabold text-[#F2B632] mt-0.5">{edu.metricValue}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA in About */}
            <div className="mt-10">
              <a
                id="about-cv-btn"
                href="#technical-skills"
                className="inline-flex items-center gap-2 text-[16px] font-semibold bg-[#F2B632] text-[#171717] px-8 py-4 rounded-md hover:bg-[#E3A81A] transition-all duration-300 transform hover:scale-[1.03] shadow-md"
              >
                Explore Technical Skills
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

