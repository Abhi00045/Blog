import express from 'express';
import Post from '../models/post.model.js';

const router = express.Router();

router.get('/', async(req,res)=>{

    const posts = await Post.find()
    res.send(posts)
})

export default router;