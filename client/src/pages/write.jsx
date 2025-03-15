import React from 'react'
import '../main.css'

import { useUser } from '@clerk/clerk-react';
import Register from './Register';
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';

function write() {
   const { isLoaded, isSignedIn } = useUser();

   if(isLoaded && !isSignedIn) {
    return (<Register/>);
   }

   return(
    <>
   <div id="write-main-box">
   <div id="Adding-post-component">
      <h1>Write a Blog</h1>
      <div id="adding-title">
        <input type="text" placeholder='Title' />
      </div>
      <div id="description-add">
        <input type="text" placeholder='Description' />
      </div>
      <div id="side-by-side-components">
      <div id="choosing-label">
        <label htmlFor="">Choose a category :</label>
        <select name="category" id="category">
          <option value="General">General</option>
          <option value="Web Design"> Web Design</option>
          <option value="Development">Development</option>
          <option value="Databases">Databases</option>
          <option value="Search Engines">Search Engines</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>
      <button id='upload-image'>Upload Image</button>
      </div>
      <div id="new-one">
      <textarea name="" id="" cols="30" rows="10" placeholder='Write your blog here.....'></textarea>
      <button>Post</button>
      </div>
    </div>
    <div id="write-side-box">
      img
    </div>
   </div>
    </>
   )
}

export default write