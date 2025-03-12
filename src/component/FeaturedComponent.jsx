import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function FeaturedComponent() {
  return (
    <>
    <div id="main-featuredComponents">
 <div id="left-featuredComponent">
            
                <img src="./featured1.jpeg"alt="" />
                <div id="left-post-one">
                    <div id="left-post-one-top">
                      <p>01</p>
                      <h1>Web design</h1>
                      <span>2 days ago</span>
                      </div>
                      <h1 id='main'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                </div>
            
        </div>       
        <div id="right-featuredComponent"> 
           
        <img src="./featured1.jpeg"alt=""  />
                <div id="left-post-one">
                    <div id="left-post-one-top">
                      <p>01</p>
                      <h1>Web design</h1>
                      <span>2 days ago</span>
                      </div>
                      <h1 id='main'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>     
                </div>
                </div>
    </div>
    </>
  )
}

export default FeaturedComponent