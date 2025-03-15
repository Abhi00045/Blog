import React from 'react'
import './Navbar.css'

function SinglePostPage() {
  return (
    <>
    <div id="single-top-page">
      {/* heading */}
      <div id="head-top-page">
        <h1 className='md:text-3xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</h1>
        <div id="authors-title-time" className='md:text-lg'>
                    <p>Written by 
                    <span>Jhon Doe</span> </p>
                    <p> on <span>Web design</span> </p>
                    <p>2 days ago</p>
                </div>
      <p className='md:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique illum nulla delectus hic vero!</p>
      </div>
      {/* image-heading */}
      <div id="image-top-page">
        <img src="./postImg.jpeg" alt="" />
      </div>
    </div>
    </>
  )
}

export default SinglePostPage