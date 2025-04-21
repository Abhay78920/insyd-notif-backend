import express from 'express';
import { createActivity } from '../controllers/activity.controller.js';

const router = express.Router();

router.post('/', createActivity);

export default router;