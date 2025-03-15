import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import './Navbar.css'

function SideMenu() {
  return (
    <div id="main-menu">
        <div id="search-four">
        <h2>Search</h2>
        <Search/>
        </div>
        <div id="filters">
            <h2>Filters</h2>
            <div id="one">
            <input type="checkbox" />
            <label htmlFor="Newest">Newest</label>
            </div>

            <div id="one">
            <input type="checkbox" />
            <label htmlFor="Oldest">Oldest</label>
            </div>

            <div id="one">
            <input type="checkbox" />
            <label htmlFor="Trending">Trending</label>
            </div>

            <div id="one">
            <input type="checkbox" />
            <label htmlFor="Most popular">Most popular</label>
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
    </div>
  )
}

export default SideMenu