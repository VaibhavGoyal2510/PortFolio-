import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Express', icon: '🚂' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'HTML5', icon: '🟧' },
  { name: 'CSS3', icon: '🟦' },
  { name: 'Git', icon: '🔧' },
  { name: 'Tailwind CSS', icon: '🌬️' },
  { name: 'Cloud', icon: '☁️' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.35, duration: 0.7 } },
};

export const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-950 text-white px-2 sm:px-4 md:px-8">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-blue-400 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatePresence>
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="bg-gray-800/90 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 group min-h-[120px] sm:min-h-[160px] md:min-h-[200px] min-w-[100px] sm:min-w-[140px] md:min-w-[180px] hover:shadow-blue-400/60 hover:shadow-lg"
              variants={cardVariants}
              whileHover={{ boxShadow: '0 0 32px 0 rgba(52, 144, 220, 0.45)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span className="text-3xl sm:text-5xl md:text-6xl mb-2 sm:mb-4 group-hover:animate-bounce transition-all">{skill.icon}</span>
              <span className="text-base sm:text-xl md:text-2xl font-semibold text-gray-200 group-hover:text-blue-400 transition-colors text-center">{skill.name}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
