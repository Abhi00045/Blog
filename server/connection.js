import "dotenv/config";
import mongoose from "mongoose";


export const Connection = async()=>{
    const db = process.env.MONGO;
    try{
       await mongoose.connect(db)
        console.log("database connected");
        
    }catch(err){
        console.log(err);  
    }
}