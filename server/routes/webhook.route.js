import express from 'express';
import { clerkController } from '../controllers/webhook.controller.js';

const router = express.Router();

router.post("/webhook",clerkController);

export default router;