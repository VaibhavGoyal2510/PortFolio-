import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.35, duration: 0.7 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const About = () => {
  const cards = [
    {
      icon: '🎓',
      title: 'Education',
      desc: 'B.Tech in Computer Science, with a focus on web technologies'
    },
    {
      icon: '🌐',
      title: 'Interests',
      desc: 'Backend, Cloud, playing chess, and I try to learn new things.'
    }
  ];

  return (
    <motion.section
      id="about"
      className="w-full min-h-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-2 sm:px-4 md:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-blue-400 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
      >
        I’m a dedicated Full Stack Developer who thrives on crafting fast, elegant, and user-friendly web applications. With expertise in the MERN stack, I focus on delivering solutions that are both visually engaging and technically good. My aim is to build digital experiences that truly resonate with users and address real-world challenges.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AnimatePresence>
          {cards.map((card) => (
            <motion.div
              key={card.title}
              className="bg-gray-800/80 rounded-xl shadow-lg p-5 sm:p-6 w-full sm:w-64 flex flex-col items-center cursor-pointer transition-transform duration-300 group hover:shadow-blue-400/60 hover:shadow-lg"
              variants={cardVariants}
              whileHover={{ boxShadow: '0 0 32px 0 rgba(52, 144, 220, 0.45)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span className="text-3xl sm:text-4xl mb-2 group-hover:animate-bounce transition-all">{card.icon}</span>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 text-blue-300 group-hover:text-blue-400 transition-colors text-center">{card.title}</h3>
              <p className="text-gray-400 text-center text-sm sm:text-base">{card.desc}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};
