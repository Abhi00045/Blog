"use client";
import { useState } from "react";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");

  return (
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Create a Blog</h1>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white border border-none rounded-lg transition">
            Publish
          </button>
        </div>

        {/* Upload Image */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Upload Cover Image
          </label>
          <input
            type="file"
            className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-600
            hover:file:bg-blue-100"
          />
        </div>

        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title of your blog..."
          className="w-full text-3xl font-semibold mb-4 border-0 border-b border-gray-200 focus:ring-0 focus:border-gray-400 bg-transparent outline-none placeholder-gray-400"
        />

        {/* Short Description */}
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Short description..."
          rows={2}
          className="w-full resize-none text-lg mb-6 border-0 border-b border-gray-200 focus:ring-0 focus:border-gray-400 bg-transparent outline-none placeholder-gray-400"
        />

        {/* Blog Content */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing your content here..."
          rows={12}
          className="w-full resize-none text-base leading-relaxed border-0 focus:ring-0 outline-none bg-transparent placeholder-gray-400"
        />

        {/* Social Links (optional) */}
        <div className="mt-8 flex gap-4">
          <input
            type="text"
            placeholder="Twitter Link"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Instagram Link"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
  );
}
