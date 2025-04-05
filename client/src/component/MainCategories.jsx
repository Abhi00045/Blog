import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Search from './Search'

function MainCategories() {
  return (
    <>
    <div id="main-categories">
        {/* links */}
        <div id="Link-categories">
            <Link to='/posts'  id='all-posts'>All Posts</Link>
            <Link to='/posts' id='remaining-posts'>Web Design</Link>
            <Link to='/posts' id='remaining-posts'>Development</Link>
            <Link to='/posts' id='remaining-posts'>Databases</Link>
            <Link to='/posts' id='remaining-posts'>Search Engines</Link>
            <Link to='/posts' id='remaining-posts'>Marketing</Link>
        </div>
        <span>|</span>
        {/* search */}
        <Search/>
    </div>
    </>
  )
}

export default MainCategories