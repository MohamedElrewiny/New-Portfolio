import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');
  
  const education = [
    {
      id: 1,
      title: "Bachelor's Degree in Information Technologies",
      institution: "Kafr-Elsheikh University / Faculty of Computers and Information",
      year: " Sept 2018 -  Jun 2022",
      description: "Specialized in Information Technologies (IT)."
    },
    {
      id: 2,
      title: "Cyber Security Training",
      institution: "Information Technology Institute (ITI)",
      year: "Jul 2021 - Sept 2021",
      description: "Training program in cyber-security."
    },
        {
      id: 3,
      title: "Full Stack Development Internship",
      institution: "RMS",
      year: "Aug 2020 - Jul 2021",
      description: "I learned html, css, bootstrap, js, jquery, php, mysql and laravel.."
    }
  ];
  
  const experience = [
    {
      id: 1,
      title: "Senior Front-End Developer (Next.JS) - On site",
      company: "Al-musanid Tech",
      year: "Mar 2025 - Present",
      description: "Developed and maintained company websites and web applications with Next.js."
    },
    {
      id: 2,
      title: "Senior Front-End Developer - Remote",
      company: "Ultra-Progress",
      year: " Mar 2025 - Present",
      description: "Building responsive web applications with React || JS vanilla."
    },
    {
      id: 3,
      title: "Senior Front-End Developer - Remote",
      company: "IT.RENADMADI",
      year: " Jun 2024 - Present",
      description: "Building responsive web applications with React || JS vanilla."
    },
    {
      id: 4,
      title: "Junior Front-End Developer - Remote",
      company: "Ultra-Progress",
      year: " Mar 2024 - Jun 2024",
      description: "Building responsive web applications with React || JS vanilla."
    }
  ];

  return (
    <section id="qualification" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4 text-[#143D95]">My Qualification</h2>
        <p className="text-lg max-w-2xl mx-auto">
          My education and professional path that led me to where I am today
        </p>
      </motion.div>
      
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-md transition-colors cursor-pointer ${
                activeTab === 'education' 
                  ? ' text-gray-700 bg-gray-100' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2 rounded-md cursor-pointer transition-colors ${
                activeTab === 'experience' 
                  ? 'text-gray-700 bg-gray-100' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Experience
            </button>
          </div>
        </div>
        
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {activeTab === 'education' ? (
            <>
              {education.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ x: 10 }}
                  className="relative pl-12 pb-8 border-l-2 border-[#143D95]"
                >
                  <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <FaGraduationCap />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 mb-2">{item.institution} • {item.year}</p>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </>
          ) : (
            <>
              {experience.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ x: 10 }}
                  className="relative pl-12 pb-8 border-l-2 border-[#143D95]"
                >
                  <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <FaBriefcase />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 mb-2">{item.company} • {item.year}</p>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Qualification;