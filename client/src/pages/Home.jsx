import React from 'react'
import { Link } from 'react-router-dom'
import '../main.css'
import MainCategories from '../component/MainCategories'
import FeaturedComponent from '../component/FeaturedComponent'
import PostList from '../component/PostList'

function Home() {
  return (
    <>
    <div id='top-home'>
      {/* Main-Breadcrumb */}
      <div id="first-top">
         <p>Home</p>
         <span>.</span>
         <span id="Blogs">
          Blogs and Articles
         </span>
      </div>

      {/* Introduction */}
      <div id="Introduction-home">
       <div id="Introduction-left">
       <h1>Thoughts Unfolded
        <br />Stories, Ideas & Inspirations ✨</h1>
        <p>A space where ideas come to life, stories find their voice, and inspiration knows no bounds.</p>
       </div>
       <div id="Introduction-right"  className="hidden md:block px-2">
       <Link to="update" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="120"
            height="120"
            className="text-lg tracking-widest animate-spin animatedButton"
            // className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath id='test-text' href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath id='test-text' href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-14 h-14  rounded-full flex items-center justify-center" id='button-animate'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
       </div>
      </div>

      {/* Maincategories */}
      <MainCategories/>
      {/* featuredPosts */}
      <FeaturedComponent/>
      
      <p className='px-2 m-3 underline uppercase'>Recent Posts</p>
      
      <PostList/>
    </div>
    </>
  )
}

export default Home