import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema(
    {
       user :{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
       }, 
        img:{
            type:String
        },
        title:{
            type:String,
            required:true
        },
        slug:{
            type:String,
            required:true,
            unquie : true
        },
        description:{
            type:String,
        },
        content:{
            type:String,
            required:true
        },
        // visits:{
        //     type:Boolean,
        //     default:0
        // }
    },{
        timestamps:true
    }
);
export default mongoose.model("Post",postSchema)