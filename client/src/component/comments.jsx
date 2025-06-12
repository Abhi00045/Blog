import React from 'react'
import './Navbar.css'

function comments() {
  return (
    <>
    <h2 className="m-2 px-2  text-xl lg:text-2xl md:text-xl underline font-bold text-neutral-600">Comments</h2>
    <div id="comment-input" className='px-2 m-2 my-2 ' >
      <input type="text" placeholder='Write a comment..'  />
      <button>Send</button>
    </div>
    </>
  )
}

export default comments