import { Schema } from "mongoose";
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
//    each comment belong tyo the specific author / user id
user:{
    type: Schema.Types.ObjectId,
    ref: "User",
},
// each comment requires a specific post id
post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
},
// comment kah Schema
    comment: {
        type: String,
        required: true,
    },    
},{timestamps: true},);

export default commentSchema;