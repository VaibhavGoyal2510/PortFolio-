import React from 'react';
import { motion as MOTION } from 'framer-motion';
import { useState, useEffect } from 'react';

const nameToType = "Vaibhav Goyal";

function useTypingEffect(text, speed = 120, pause = 1200) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!deleting && index < text.length) {
      timeout = setTimeout(() => setIndex(index + 1), speed);
    } else if (!deleting && index === text.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && index > 0) {
      timeout = setTimeout(() => setIndex(index - 1), speed / 2);
    } else if (deleting && index === 0) {
      setDeleting(false);
    }
    setDisplayed(text.slice(0, index));
    return () => clearTimeout(timeout);
  }, [index, deleting, text, speed, pause]);

  return displayed;
}

export default function Hero() {
  const typedName = useTypingEffect(nameToType);
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden px-2 sm:px-4 md:px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-60 sm:w-96 h-60 sm:h-96 bg-blue-900/30 rounded-full blur-3xl absolute -top-20 sm:-top-32 -left-20 sm:-left-32 animate-pulse" />
        <div className="w-48 sm:w-80 h-48 sm:h-80 bg-purple-900/20 rounded-full blur-2xl absolute bottom-0 right-0 animate-pulse" />
      </div>
      <MOTION.img
        src="https://avatars.githubusercontent.com/u/99100992?v=4"
        alt="Vaibhav Goyal"
        className="w-24 sm:w-32 h-24 sm:h-32 rounded-full border-4 border-blue-500 shadow-lg mb-4 sm:mb-6 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <MOTION.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-tight z-10 h-16 sm:h-20 flex items-center justify-center"
      >
        Hi, I'm <span className="text-blue-400 ml-2 sm:ml-3">{typedName}<span className="animate-pulse">|</span></span>
      </MOTION.h1>
      <MOTION.p
        className="mt-2 sm:mt-4 text-base sm:text-lg md:text-2xl text-gray-300 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Full Stack Developer | MERN | Cloud Enthusiast
      </MOTION.p>
      <MOTION.a
        href="#projects"
        className="mt-6 sm:mt-8 inline-block bg-blue-500 px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 transition z-10 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        View My Work
      </MOTION.a>
    </section>
  );
}
