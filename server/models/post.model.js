import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema(
    {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Blog description is required"],
    },
    content: {
      type: String,
      required: [true, "Blog content is required"],
    },
    category: {
      type: String,
      enum: ["Development", "Databases", "Search Engines", "Design", "AI", "Marketing"],
      default: "Development",
    },
    coverImage: {
      type: String, // store Cloudinary/S3/local file URL
      default: "",
    },
    twitterLink: {
      type: String,
      default: "",
    },
    instagramLink: {
      type: String,
      default: "",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // assuming you have a User model or Clerk ID
      required: false, // you can make it true if linking users
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);
export default mongoose.model("Post",postSchema)