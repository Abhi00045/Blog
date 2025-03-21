import { Schema } from "mongoose"
import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {    
        type: String,
        required: true,
        unique: true,
    },
    img:{
        type: String,
    },
    savedPosts:{
        type: Schema.Types.ObjectId,
        default: [],
    },    
},{timestamps: true},);

export default userSchema;