// import React from 'react'
import '../main.css'

import { useUser } from '@clerk/clerk-react';
import Register from './Register';
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';

// function write() {
//    const { isLoaded, isSignedIn } = useUser();

//    if(isLoaded && !isSignedIn) {
//     return (<Register/>);
//    }

//    return(
//     <>
//     <div className="write-main-container">
//       hii
//     </div>
   
//     </>
//    )
// }

// export default write

import React, { useState } from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
// import { Cursor } from 'mongoose';

export const BlogUploader = () => {

   const { isLoaded, isSignedIn } = useUser();

   if(isLoaded && !isSignedIn) {
    return (<Register/>);
   }



  const [form, setForm] = useState({
    title: "",
    category: "Web Design",
    shortDesc: "",
    content: "",
    twitter: "",
    instagram: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <div style={styles.container}>
      {/* Left Section */}
      <div style={styles.left}>
        <h2 style={styles.heading}>Create a Blog</h2>

        <input
          type="text"
          placeholder="Title of the blog"
          name="title"
          value={form.title}
          onChange={handleChange}
          style={styles.input}
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          style={styles.select}
        >
          <option>Web Design</option>
          <option>Development</option>
          <option>Databases</option>
          <option>Marketing</option>
          <option>Search Engines</option>
          <option>Others</option>
        </select>

        <input
          type="text"
          placeholder="Short Description"
          name="shortDesc"
          value={form.shortDesc}
          onChange={handleChange}
          style={styles.input}
        />

        <textarea
          name="content"
          placeholder="Write your content here..."
          value={form.content}
          onChange={handleChange}
          rows={6}
          style={styles.textarea}
        />
      </div>

      {/* Right Section */}
      <div style={styles.right}>
        {/* Upload Button */}
        <div style={styles.uploadContainer}>
          <label style={{
            cursor:"pointer",
          }} >
            Upload Image
            <input 
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              style={{ display: "none" }}
            />
          </label>
          
        </div>

        {/* Social Inputs */}
        <div style={styles.socialContainer}>
          <div style={styles.socialInput}>
            <FaTwitter size={20} style={{ marginRight: 8 }} />
            <input
              type="text"
              placeholder="Twitter Link"
              name="twitter"
              value={form.twitter}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.socialInput}>
            <FaInstagram size={20} style={{ marginRight: 8 }} />
            <input
              type="text"
              placeholder="Instagram Link"
              name="instagram"
              value={form.instagram}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <button type='submit'>ADD</button>
        </div>
      </div>
    </div>
  );
};

// Internal CSS
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#0000007b",
    padding: "70px",
    border:"2px solid black",
    borderRadius: "20px",
    color: "white",
    fontFamily: "sans-serif",
    gap: "20px",
  },
  left: {
    flex: 1,
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  right: {
    // flex: 1,
    // minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #444",
    backgroundColor: "#0000007b",
     border:"2px solid black",
    color: "white",
    width: "100%",
  },
  select: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #444",
   backgroundColor: "#0000007b",
     border:"2px solid black",
    color: "white",
    width: "100%",
  },
  textarea: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #444",
    backgroundColor: "#0000007b",
    border:"2px solid black",
    color: "white",
    width: "100%",

  },
  uploadContainer: {
    width:"50%",
    padding: "10px",
    /* text-transform: uppercase; */
    border:"2px solid #1e40af",
    borderRadius: "25px",
    backgroundColor:" #1e40af",
    color: "white",
    cursor:"pointer",
  },
  
  socialContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    color: "white",
  },
  socialInput: {
    // backgroundColor: "#00000012",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    color: "white",
  },
};
