import mongoose from "mongoose";
import dotenv from "dotenv";
// import userSchema from "../model/user.model";
dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");


    } catch(error) {
        console.log(error);     
    }
};

export default connectDb;