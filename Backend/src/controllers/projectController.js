import Project from '../models/project.model.js';

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ _id: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects.' });
  }
};