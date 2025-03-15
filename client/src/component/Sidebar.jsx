import React from 'react'
import Search from './Search'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
   <>
           <div id="bottom-right-menu">
             <div id='one-author'>
                <h3>Author</h3>
               <div id="profile">
               <img src="./userImg.jpeg" alt="" />
               <span>Abhishek</span>
               </div>
               <div id="Bio">
                <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
               </div>
               <div id="Socials">
                <img src="./facebook.svg" alt="" />
                <img src="./instagram.svg" alt="" />
               </div>
             </div>
             <div id='two-Actions'>
                <h3>Actions</h3>
                <div id="action-1">
                    <img src="./bookmark.svg" alt="" />
                    <span>Save this post</span>
                </div>
                <div id="action-2">
                    <img src="./delete.svg" alt="" />
                    <span>Delete this Post</span>
                </div>
             </div>
             <div id='three-categories'>
                <h3>Categories</h3>
                <div id="category">
                    <Link to="/posts"><span>All Posts</span></Link>
                </div>
                <div id="category">
                    <Link to="/posts"><span>Web design</span></Link>
                </div>
                <div id="category">
                    <Link to="/posts"><span>Development</span></Link>
                </div>
                <div id="category">
                    <Link to="/posts"><span>Databases</span></Link>
                </div>
             </div>
             <div id="search-four">
               <h3>Search</h3>
               <Search/>
             </div>
           </div>
   </>
  )
}

export default Sidebar