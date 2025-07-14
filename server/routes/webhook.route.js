import "dotenv/config";
import express from 'express';

import { clerkController } from '../controllers/webhook.controller.js';
import bodyParser from 'body-parser';


const router = express.Router();

router.post("/webhook", bodyParser.raw({ type: 'application/json' }),clerkController);

export default router; 