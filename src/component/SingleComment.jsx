import React from 'react'
import './Navbar.css'


function SingleComment () {
  return (
   <>
   <div id="comment-box">
    <div id="title-author-box">
        <img src="./userImg.jpeg" alt="" />
        <span>Abhishek</span>
        <p>2 days ago</p>
    </div>
    <div id="comment">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo distinctio quia inventore optio laborum? Placeat ipsa quam iusto vel dicta!</p>
    </div>
   </div>
   </>
  )
}

export default SingleComment