import { Schema } from "mongoose";
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // each single post requires a specific slug which defines the post url
    slug:{
        type: String,
        required: true,
        unique: true,
    },

    category: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
},{timestamps: true},);

const Post = mongoose.model('Post', postSchema);

export default Post;