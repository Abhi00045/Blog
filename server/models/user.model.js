import mongoose from "mongoose";
import { Schema } from "mongoose";

 const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unquie:true
        },
        email : {
            type:String,
            required:true,
            unquie:true
        },
        img :{
            type:String
        }
    },{timestamps:true}
);
export default mongoose.model("User",userSchema);