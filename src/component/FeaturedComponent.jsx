import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function FeaturedComponent() {
  return (
    <>
    <div id="main-featuredPost">
      {/* first-post */}
      <div id="first-featuredPost">
        {/* image */}
        <img src="./featured1.jpeg" alt="first-post" />
        {/* details */}
        <div id="details-post">
          <h1>01.</h1>
          <Link className='text-indigo-500 font-semibold'>Web Design</Link>
          <span>2 days ago</span>
        </div>
        {/* title */}
        <Link className='md:text-2xl font-semibold lg:text-3xl'>Lorem ipsum dolor sit amet consectetur.</Link>
      </div>
      {/* other-posts */}
      <div id="featured-remaining-three">
        {/* second-post */}
        <div id="second-post">
          <img src="./featured2.jpeg" alt="" />
        <div id="second-post-right">
          <div id="details-post-second">
          <h1>01.</h1>
          <Link>Web Design</Link>
          <span>2 days ago</span>
        </div>
        <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut.</Link>
          </div>
          </div>
        {/* third-post */}
        <div id="second-post">
          <img src="./featured3.jpeg" alt="" />
        <div id="second-post-right">
          <div id="details-post-second">
          <h1>01.</h1>
          <Link>Web Design</Link>
          <span>2 days ago</span>
        </div>
        <Link>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, cumque?</Link>
          </div>
          </div>
        {/* fourth-post */}
        <div id="second-post">
          <img src="./featured4.jpeg" alt="" />
        <div id="second-post-right">
          <div id="details-post-second">
          <h1>01.</h1>
          <Link>Web Design</Link>
          <span>2 days ago</span>
        </div>
        <Link>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, autem!</Link>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default FeaturedComponent