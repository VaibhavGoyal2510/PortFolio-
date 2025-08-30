import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { DB_NAME } from '../constants.js';
import Project from '../models/project.model.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({ path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../.env') });

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my work, skills, and contact info. Built with React and Tailwind CSS.',
    techStack: ['React', 'Tailwind', 'Framer Motion'],
    githubLink: 'https://github.com/VaibhavGoyal2510/PortFolio-.git',
    liveLink: '',
    image: '',
  },
  {
    title: 'Learning Management System',
    description: 'Developed a full-stack web-based platform as a practical project to enhance my skills in web development.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
    githubLink: 'https://github.com/VaibhavGoyal2510/LMS.git',
    liveLink: '',
    image: '',
  },
  {
    title: 'Video Streaming Platform Backend',
    description: 'Developed a backend for a video streaming platform using Node.js, Express, and MongoDB.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/VaibhavGoyal2510/Backend.git',
    liveLink: '',
    image: '',
  },
];

async function seed() {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    await Project.deleteMany({});
    await Project.insertMany(projects);
    console.log('Projects seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
}

seed();