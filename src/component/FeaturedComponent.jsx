import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function FeaturedComponent() {
  return (
    <>
    <div id="main-featuredComponents">
 <div id="left-featuredComponent">

{/* 1st one */}
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

{/* 2nd one */}
          <div id="right-second">
          <img src="./featured1.jpeg"alt=""  />
                <div id="left-post-one">
                    <div id="left-post-one-top">
                      <p>02</p>
                      <h1>Web design</h1>
                      <span>2 days ago</span>
                      </div>
                      <h1 id='main'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>     
                </div>
          </div>

{/* 3rd one */}
          <div id="right-second">
          <img src="./featured1.jpeg"alt=""  />
                <div id="left-post-one">
                    <div id="left-post-one-top">
                      <p>03</p>
                      <h1>Web design</h1>
                      <span>2 days ago</span>
                      </div>
                      <h1 id='main'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>     
                </div>
          </div>

{/* 4th one */}
          <div id="right-second">
          <img src="./featured1.jpeg"alt=""  />
                <div id="left-post-one">
                    <div id="left-post-one-top">
                      <p>04</p>
                      <h1>Web design</h1>
                      <span>2 days ago</span>
                      </div>
                      <h1 id='main'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>     
                </div>
          </div>
        </div>
                
    </div>
    </>
  )
}

export default FeaturedComponent