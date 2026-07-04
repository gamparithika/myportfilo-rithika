import { Service, Project, TimelineItem, Testimonial, BlogPost, Certification } from './types';

export const personalInfo = {
  name: 'Gampa Rithika',
  role: 'Software Engineer & Full Stack Developer',
  experienceYears: 'B.Tech CSE',
  email: 'gamparithika1@gmail.com',
  phone: '+91-6302431243',
  location: 'Warangal, Telangana, India',
  bio: 'Gampa Rithika is a Computer Science Engineering student with a strong foundation in software development, data structures, algorithms, and artificial intelligence. She has hands-on experience building full-stack web applications, AI-powered solutions, and machine learning projects using Java, Python, JavaScript, React, Node.js, MongoDB, and REST APIs. She has solved 300+ LeetCode problems, demonstrating strong analytical, problem-solving, and software development skills.',
  socials: {
    github: 'https://github.com/gamparithika',
    linkedin: 'https://www.linkedin.com/in/gampa-rithika-a291152a7/',
    leetcode: 'https://leetcode.com/u/Gampa_Rithika/'
  },
  heroImage: 'https://lh3.googleusercontent.com/d/1HoUHu3o44CSSxWtLknCXayxXeymJOFGb=s800',
  aboutImage: 'https://lh3.googleusercontent.com/d/1HoUHu3o44CSSxWtLknCXayxXeymJOFGb=s800'
};

export const services: Service[] = [
  {
    id: 's1',
    title: 'Full-Stack Web Development',
    description: 'Engineering responsive, modern web frontends coupled with secure database architectures, applying modular principles for maximum maintainability.',
    icon: 'Grid'
  },
  {
    id: 's2',
    title: 'RESTful API Engineering',
    description: 'Designing highly robust, scalable backend microservices using Java, Spring Boot, Hibernate, JDBC, and object-oriented paradigms.',
    icon: 'Layers'
  },
  {
    id: 's3',
    title: 'AI & Machine Learning Solutions',
    description: 'Developing highly accurate predictive models, data processing pipelines, and feature engineering suites using Python and Scikit-learn.',
    icon: 'Figma'
  }
];

export const projects: Project[] = [
  {
    id: 'p0',
    title: 'Smart Compiler with AI Error Correction',
    category: 'AI Web Application',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
    description: 'The Smart Compiler with AI Error Correction is an AI-powered web application designed to help programmers identify, understand, and automatically fix coding errors in real time. Built using React, Vite, JavaScript, Supabase, and Large Language Models, it integrates Groq AI and OpenRouter APIs to provide intelligent debugging suggestions and code corrections. The platform features syntax highlighting, secure user authentication, and an interactive code editor to enhance the programming experience. Developed following modern software engineering practices, it delivers a scalable and user-friendly solution for learning, debugging, and improving code quality.',
    link: 'https://github.com/gampashashank30/smart-compiler'
  },
  {
    id: 'p4',
    title: 'Smart Leftover Food Sharing Platform',
    category: 'Full-Stack Application',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800',
    description: 'Developed a full-stack MERN application designed to reduce food waste by connecting food donors with individuals and organizations in need. It enables users to securely register, donate food, browse available donations, and request food through a responsive and user-friendly interface. The platform uses MongoDB, Express.js, Node.js, HTML, CSS, and JavaScript with RESTful APIs, secure authentication, and CRUD operations for efficient data management. Built following modern software engineering practices, it provides a scalable solution for food donation and community support.',
    link: 'https://github.com/gamparithika/Smart-Leftover-Food-Sharing-Platform'
  },
  {
    id: 'p1',
    title: 'AI-Based Crop Recommendation and Yield Prediction',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=800',
    description: 'Developed an intelligent crop recommendation system using Python, Scikit-learn, and XGBoost with a 98.64% prediction accuracy rate. Performed data preprocessing, feature engineering, and exploratory data analysis to improve model performance. Evaluated the model using classification metrics and visualized feature importance using Matplotlib.',
    link: 'https://github.com/gamparithika/Crop_Recommendation-Yield_Prediction'
  },
  {
    id: 'p2',
    title: 'College Event Management System',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    description: 'Developed a responsive web application using HTML, CSS, and JavaScript for managing college events. Implemented event scheduling, registration, and user-friendly interfaces to improve accessibility. Applied modular design principles and debugging techniques to ensure maintainable and efficient code.',
    link: 'https://github.com/gamparithika/College_Event_Management_System'
  },
  {
    id: 'p3',
    title: 'Emergency Health Assistance System',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
    description: 'Developed a web-based healthcare assistance platform using HTML, CSS, and JavaScript. Implemented emergency support features and organized medical information for quick accessibility. Designed responsive interfaces and optimized workflows to improve user experience across devices.',
    link: 'https://github.com/gamparithika/Emergency_Health_Assistant'
  }
];


export const timelineItems: TimelineItem[] = [
  {
    id: 't1',
    role: 'Java Full Stack Intern',
    company: 'EduSkills Academy',
    period: 'Jan 2026 - Mar 2026',
    description: 'Completed a rigorous 10-week full stack internship. Designed custom RESTful APIs, integrated structured relational databases using Spring Boot and Hibernate, and gained hands-on expertise in debugging, unit testing, and version control.',
    type: 'experience'
  },
  {
    id: 't2',
    role: 'Lead Developer & Academic Researcher',
    company: 'SR University CSE',
    period: '2023 - Present',
    description: 'Engineered multiple full-stack platforms and AI/ML recommendation models. Led team development cycles, formulated maintainable object-oriented code, and evaluated metrics using Matplotlib and Scikit-learn.',
    type: 'experience'
  },
  {
    id: 't3',
    role: 'National Hackathon Finalist',
    company: 'Smart India Hackathon (SIH)',
    period: '2024',
    description: 'Represented university on a national stage. Pitched innovative software automation products, collaborated under tight time bounds, and built responsive, user-accessible application workflows.',
    type: 'experience'
  },
  {
    id: 't4',
    role: 'B.Tech in Computer Science Engineering',
    company: 'SR University',
    period: '2023 - 2027',
    description: 'Deepening foundational core algorithms, software engineering principles, OOP systems, and computer networks. Maintaining a stellar CGPA of 9.2/10.0.',
    type: 'education'
  },
  {
    id: 't5',
    role: 'Intermediate (M.P.C)',
    company: 'SR Junior College',
    period: '2021 - 2023',
    description: 'Successfully completed pre-university education with a GPA of 8.8/10.0, specializing in Mathematics, Physics, and Chemistry.',
    type: 'education'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'tm1',
    name: 'Prof. Rajesh Kumar',
    role: 'HOD, CSE Dept',
    company: 'SR University',
    content: 'Rithika is an outstanding student who displays profound analytical clarity. Her work on the AI crop recommendation model with 98.64% prediction accuracy showcased high-caliber engineering and meticulous attention to data feature design.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 'tm2',
    name: 'Dr. Neha Sharma',
    role: 'Internship Supervisor',
    company: 'EduSkills Academy',
    content: 'During her Java Full Stack Internship, Rithika excelled at building secure RESTful APIs. She demonstrated high-fidelity code quality, robust understanding of Hibernate mapping, and a thorough mastery of OOP best practices.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 'tm3',
    name: 'Vijay Verma',
    role: 'Hackathon Coordinator',
    company: 'SIH Innovation Hub',
    content: 'Rithika possesses amazing problem-solving velocity. Solving 300+ LeetCode DSA problems gives her a massive advantage, which was extremely evident in the speed and precision with which she debugged our live event management system.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Precision Crop Recommendation Using XGBoost',
    category: 'Machine Learning',
    date: 'May 12, 2026',
    readTime: '5 min read',
    excerpt: 'How I achieved 98.64% model accuracy utilizing feature engineering, data preprocessing, and classification matrix visualization using Python and Matplotlib.',
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b2',
    title: 'Building Scalable APIs with Spring Boot & Hibernate',
    category: 'Backend Dev',
    date: 'Apr 18, 2026',
    readTime: '8 min read',
    excerpt: 'Key architectural insights from my 10-week EduSkills internship, focusing on REST controller design, JPA relationship models, and clean testing.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b3',
    title: 'My Journey Solving 300+ DSA LeetCode Challenges',
    category: 'Data Structures',
    date: 'Mar 05, 2026',
    readTime: '6 min read',
    excerpt: 'Detailed roadmap covering fundamental pattern strategies—sliding windows, fast & slow pointers, and dynamic programming—that boost problem-solving speed.',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800'
  }
];

export const certifications: Certification[] = [
  {
    id: 'c1',
    title: 'Java Full Stack Internship',
    issuer: 'EduSkills Academy (AICTE Approved)',
    date: 'March 2026',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    credentialId: 'EDU-JFS-2026-8921',
    link: '#certifications'
  },
  {
    id: 'c2',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: 'December 2025',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    credentialId: 'CSCO-NET-55102',
    link: '#certifications'
  },
  {
    id: 'c3',
    title: 'Software Engineering Virtual Experience',
    issuer: 'Infosys Springboard',
    date: 'October 2025',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    credentialId: 'INF-SWE-9833',
    link: '#certifications'
  },
  {
    id: 'c4',
    title: 'Python (Basic) Certification',
    issuer: 'HackerRank',
    date: 'August 2025',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    credentialId: 'HR-PY-B8820',
    link: '#certifications'
  },
  {
    id: 'c5',
    title: 'Data Analytics with Generative AI',
    issuer: 'Simplilearn',
    date: 'June 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    credentialId: 'SL-DA-GENAI-104',
    link: '#certifications'
  }
];
