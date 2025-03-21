import express from 'express'
const router = express.Router();
import postModel from '../model/post.model.js'
import mongoose from 'mongoose';

router.get("/",async (req, res) => {
    const posts = await postModel.find()
    res.send(posts)
})
router.get("/:slug",async (req, res) => {
    const post = await postModel.findOne({slug: req.params.slug})
    res.send(post)
})


export default router