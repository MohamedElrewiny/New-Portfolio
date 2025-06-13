import { motion } from "framer-motion";
import { skills } from "../constants/skills";

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          My Skills
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Here are the technologies I've been working with recently
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 max-w-7xl mx-auto"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center h-[170px] p-6 rounded-2xl relative bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
          >
            <div className="text-5xl h-[50px] mb-4 text-primary transform hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <h3 className="font-semibold text-center text-lg mb-4 text-gray-200">
              {skill.name}
            </h3>
            <div className="w-full relative">
              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-blue-500"
                />
              </div>
              <div className="absolute -top-6 right-0  bg-gray-800  rounded-lg shadow-md">
                <span className="text-sm font-medium text-gray-300">
                  {skill.level}%
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
