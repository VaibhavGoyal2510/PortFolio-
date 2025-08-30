import React, { useEffect, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

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

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.35, duration: 0.7 } },
};

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        console.log(data)
        if (res.ok) {
          setProjects(data);
        } else {
          setError(data.error || 'Failed to fetch projects.');
        }
      } catch (err) {
        setError('Failed to fetch projects.');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="w-full min-h-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 to-black text-white px-2 sm:px-4 md:px-8">
      <Motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-blue-400 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Projects
      </Motion.h2>
      {loading ? (
        <div className="text-lg text-gray-400">Loading projects...</div>
      ) : error ? (
        <div className="text-lg text-red-400">{error}</div>
      ) : (
        <Motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence>
            {projects.map((project) => (
              <Motion.div
                key={project._id}
                className="bg-gray-800/90 rounded-2xl shadow-xl p-5 sm:p-7 md:p-8 flex flex-col items-start justify-between cursor-pointer transition-transform duration-300 group min-h-[220px] sm:min-h-[240px] md:min-h-[260px] hover:shadow-blue-400/60 hover:shadow-lg"
                variants={cardVariants}
                whileHover={{ boxShadow: '0 0 32px 0 rgba(52, 144, 220, 0.45)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-blue-300 group-hover:text-blue-400 transition-colors text-left w-full break-words">{project.title}</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base md:text-base w-full break-words">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.techStack && project.techStack.map((tech) => (
                    <span key={tech} className="bg-blue-900/60 text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-xs md:text-sm font-semibold">{tech}</span>
                  ))}
                </div>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-blue-400 hover:underline hover:text-blue-300 font-semibold transition-colors text-sm sm:text-base"
                  >
                    View Code ↗
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-green-400 hover:underline hover:text-green-300 font-semibold transition-colors text-sm sm:text-base"
                  >
                    Live Demo ↗
                  </a>
                )}
              </Motion.div>
            ))}
          </AnimatePresence>
        </Motion.div>
      )}
    </section>
  );
};
