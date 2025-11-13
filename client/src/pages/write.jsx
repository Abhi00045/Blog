"use client";
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
// import axios from "axios";
import axios from 'axios'
import Register from "./Register";

export default function CreateBlog() {
  const { isLoaded, isSignedIn, user } = useUser();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Development");
  const [coverImage, setCoverImage] = useState(null);
  const [twitterLink, setTwitterLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [loading, setLoading] = useState(false);

  if (isLoaded && !isSignedIn) {
    return <Register />;
  }

  const handleSubmit = async(e)=>{
     e.preventDefault();
     setLoading(true)


     const formData = new FormData();
     formData.append("title",title);
      formData.append("description", desc);
      formData.append("content", content);
      formData.append("category", category);
      if(twitterLink) formData.append("twitterLink", twitterLink);
      if(instagramLink) formData.append("instagramLink", instagramLink);
      formData.append("author", user?.id || "guest");
      if (coverImage) formData.append("coverImage", coverImage);

      try{
      const res = await axios.post("localhost:3010/create/post", formData, {
      })
      
      if(res.status == 200){
        console.log(res.data.message || "published Sucessfully");  
      }else console.log( res.data.message ||"Something went Wrong asshole");
      
      
      }catch(error){
        console.log(error || "fetch error asshole")
      }


  }
  return (
      <form
        // onSubmit={}
        onSubmit={handleSubmit}
        className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8"
      >
        {/* LEFT PANEL */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Title */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title of your blog..."
            className="w-full text-2xl md:text-3xl font-semibold border-b border-gray-300 focus:border-blue-500 bg-transparent outline-none pb-2 placeholder-gray-400"
            required
          />

          {/* Short Description */}
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Short description..."
            rows={2}
            className="w-full text-lg border-b border-gray-300 focus:border-blue-500 bg-transparent outline-none placeholder-gray-400 resize-none pb-2"
            required
          />

          {/* Blog Content */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your content here..."
            rows={10}
            className="w-full text-base leading-relaxed border border-gray-200 focus:border-blue-400 outline-none rounded-lg p-3 placeholder-gray-400 resize-y"
            required
          />
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Development">Development</option>
              <option value="Databases">Databases</option>
              <option value="Search Engines">Search Engines</option>
              <option value="Design">Design</option>
              <option value="AI">AI</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          {/* Upload Cover Image */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload Cover Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setCoverImage(e.target.files[0])}
              className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-600
              hover:file:bg-blue-100"
            />
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={twitterLink}
              onChange={(e) => setTwitterLink(e.target.value)}
              placeholder="Twitter Link"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              value={instagramLink}
              onChange={(e) => setInstagramLink(e.target.value)}
              placeholder="Instagram Link"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Publishing..." : "Publish Blog"}
            </button>
          </div>
        </div>
      </form>
  );
}
