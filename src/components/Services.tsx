import { Code2, Cpu, Cloud, Terminal, Database, GitBranch, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
}

export default function Services() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Java', 'Python', 'C', 'JavaScript'],
    },
    {
      title: 'Backend Development',
      icon: Cpu,
      skills: ['Spring Boot', 'Hibernate', 'JDBC', 'REST APIs', 'JSON'],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'SQL', 'PostgreSQL (Basics)'],
    },
    {
      title: 'Cloud Technologies',
      icon: Cloud,
      skills: ['Docker (Basics)', 'Kubernetes (Basics)', 'AWS (Basics)'],
    },
    {
      title: 'Operating Systems',
      icon: Terminal,
      skills: ['Linux/Unix Basics', 'Shell Commands'],
    },
    {
      title: 'Software Engineering',
      icon: GitBranch,
      skills: ['SDLC', 'Agile Methodologies', 'Debugging', 'Testing', 'Version Control'],
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
    },
  ];

  return (
    <section id="technical-skills" className="py-24 bg-[#FFF9EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-[18px] font-semibold text-[#F2B632] uppercase tracking-wider mb-2"
          >
            TECHNICAL SKILLS
          </motion.p>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#171717] tracking-tight leading-[1.2]"
          >
            Core Competencies & Frameworks <br />
            <span className="text-[#6A6A6A] font-medium">Engineered for Performance</span>
          </motion.h2>
        </div>

        {/* Skills Bento/Grid */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                id={`skill-card-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: 'easeInOut', delay: index * 0.08 }}
                className="bg-white p-8 rounded-xl border border-[#171717]/5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                {/* Header Row */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#F2B632]/10 text-[#F2B632] group-hover:bg-[#F2B632] group-hover:text-[#171717] flex items-center justify-center transition-colors duration-300">
                    <IconComponent size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-[#171717] group-hover:text-[#F2B632] transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2.5 mt-2 flex-grow">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-md bg-[#FFF9EF]/80 text-[#171717] text-xs font-semibold tracking-wide border border-[#171717]/5 hover:border-[#F2B632]/30 hover:bg-white transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

