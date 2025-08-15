import {Router} from 'express';
import { sendContactEmail } from '../controllers/contactController.js';

const router = Router();

router.route('/').post(sendContactEmail);

export default router;