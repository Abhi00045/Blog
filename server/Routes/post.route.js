import express from 'express'
const router = express.Router();
// import postModel from '../model/post.model.js'
import { createPost, getPosts } from '../controllers/post.controllers.js';

router.get("/", getPosts);
router.get("/:slug", getPosts);
router.post("/create", createPost);


export default router