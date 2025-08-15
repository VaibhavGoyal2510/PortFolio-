import { Router } from 'express';
import { getAllProjects } from '../controllers/projectController.js';

const router = Router();

router.get('/', getAllProjects);

export default router;