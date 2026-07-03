import { motion } from 'motion/react';
import { Briefcase, Trophy, Target, Award, Code, GraduationCap } from 'lucide-react';

export default function Resume() {
  const internshipBullets = [
    'Completed a 10-week internship in Java Full Stack Development using Java, Spring Boot, Hibernate, and MySQL.',
    'Developed RESTful APIs and integrated relational databases while applying OOP principles and software engineering practices.',
    'Used Git for version control and gained hands-on experience in debugging, testing, and backend application development.'
  ];

  const achievements = [
    {
      title: '300+ Solved LeetCode Challenges',
      description: 'Mastered dynamic programming, sliding window, and graph structures, achieving robust analytical problem-solving agility.',
      icon: Code
    },
    {
      title: 'Smart India Hackathon Finalist',
      description: 'Selected for national-level innovation pitch, collaborating under extreme time constraints to deliver automated software prototypes.',
      icon: Trophy
    },
    {
      title: 'Stellar academic 9.2 CGPA',
      description: 'Consistent excellence throughout B.Tech CSE coursework, specializing in OOP, algorithms, and database systems.',
      icon: GraduationCap
    },
    {
      title: 'AI/ML Applied Projects',
      description: 'Built high-accuracy predictive ML engines using Python, Scikit-learn, and XGBoost with real-world applications.',
      icon: Target
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="internship" className="py-24 bg-[#FFF9EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[18px] font-semibold text-[#F2B632] uppercase tracking-wider mb-2">
            INTERNSHIP & ACHIEVEMENTS
          </p>
          <h2 id="resume-heading" className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#171717] tracking-tight leading-[1.2]">
            Professional Internship <br />
            <span className="text-[#6A6A6A] font-medium">& Track Record</span>
          </h2>
        </div>

        {/* 2-Column Grid: Internship (Left) & Achievements (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Internship (Left Column) - 7 cols equivalent */}
          <motion.div
            id="internship-details-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#171717]/5 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-[#171717]/10 pb-6 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#F2B632]/10 text-[#F2B632] flex items-center justify-center">
                <Briefcase size={24} />
              </div>
              <div>
                <span className="text-xs font-bold font-mono tracking-widest uppercase text-[#F2B632] block">JAN 2026 – MAR 2026</span>
                <h3 className="text-2xl font-bold text-[#171717] tracking-tight">Java Full Stack Intern</h3>
                <p className="text-sm font-semibold text-[#6A6A6A]">EduSkills Academy</p>
              </div>
            </div>

            <div className="space-y-4">
              {internshipBullets.map((bullet, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#F2B632]/10 text-[#F2B632] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">{idx + 1}</span>
                  </div>
                  <p className="text-[#6A6A6A] text-[16px] leading-[1.6]">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#171717]/5 mt-6 flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'Hibernate', 'RESTful APIs', 'MySQL', 'Git'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 rounded bg-[#FFF9EF] border border-[#171717]/5 text-xs font-bold text-[#171717]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Achievements (Right Column) - 5 cols equivalent */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-6 bg-[#F2B632] rounded"></div>
              <h3 className="text-2xl font-bold text-[#171717] tracking-tight">Achievements & Metrics</h3>
            </div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {achievements.map((ach, idx) => {
                const AchIcon = ach.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="p-5 rounded-xl bg-white border border-[#171717]/5 hover:border-[#F2B632]/30 transition-all duration-300 flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#F2B632]/10 text-[#F2B632] flex items-center justify-center shrink-0">
                      <AchIcon size={20} />
                    </div>
                    <div>
                      <h4 className="text-md font-bold text-[#171717] tracking-tight">{ach.title}</h4>
                      <p className="text-xs text-[#6A6A6A] leading-relaxed mt-1">{ach.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

