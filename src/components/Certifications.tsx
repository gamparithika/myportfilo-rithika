import { Award, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { certifications } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#FFF9EF] relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F2B632]/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[18px] font-semibold text-[#F2B632] uppercase tracking-wider mb-2">
            CREDENTIALS
          </p>
          <h2 id="certifications-heading" className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#171717] tracking-tight leading-[1.2]">
            Professional Certifications <br />
            <span className="text-[#6A6A6A] font-medium">Verified Expertise & Badges</span>
          </h2>
        </div>

        {/* Grid Layout for Certifications (3 columns, responsive) */}
        <div id="certifications-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-[#171717]/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group"
            >
              {/* Header Image */}
              <div className="h-44 w-full overflow-hidden relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-700 ease-out filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 to-transparent opacity-60"></div>
                
                {/* Award Icon Badge */}
                <span className="absolute bottom-4 left-4 bg-[#F2B632] text-[#171717] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded flex items-center gap-1 shadow-sm">
                  <Award size={12} />
                  <span>VERIFIED</span>
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Issuer */}
                <span className="text-xs font-bold text-[#F2B632] uppercase tracking-widest mb-2 block">
                  {cert.issuer}
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#171717] tracking-tight mb-3 group-hover:text-[#F2B632] transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Date & ID */}
                <div className="mt-auto space-y-2 border-t border-[#171717]/5 pt-4 text-xs font-semibold text-[#6A6A6A]">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#F2B632]" />
                    <span>Issued: {cert.date}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#6A6A6A]/80">
                      <CheckCircle size={13} className="text-[#F2B632]" />
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
