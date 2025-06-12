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
    <div className="write-main-container">
      hii
    </div>
   
    </>
   )
}

export default write