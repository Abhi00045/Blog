 import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
 
 function PostList() {
   return (
    <>
    <div id="main-postList-card">
        {/* left-Image-part-postList */}
        <div id="left-postList-card">
            <img src="./asset01.webp" alt="" />
            </div>
            {/* right-Content-part-postList */}
            <div id="right-postList-card">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, repellat. Sit, officia.</h1>
                <div id="authors-title-time">
                    <p>Written by 
                    <span>Jhon Doe</span> </p>
                    <p> on <span>Web design</span> </p>
                    <p>2 days ago</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo distinctio quia inventore optio laborum? Placeat ipsa quam iusto vel dicta! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas a, voluptate eos maiores aperiam esse, alias tempore nostrum libero neque sapiente explicabo quidem blanditiis</p>
                <Link to="/singlepost" className='underline text-white-900'>Read More</Link>
            </div>
    </div>
    </>
   )
 }
 
 export default PostList