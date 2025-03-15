import React from 'react'
import PostList from '../component/PostList'
import SideMenu from '../component/sideMenu'
import '../main.css'

function PostListpage() {
  return (
    <>
    <h1 className='text-xl md:text-xl lg:text-2xl font-bold mx-2 p-4'>Developemnt Blogs</h1>
    <div id="main-postList">
      <div id="blogs-posts">
        <PostList/>
      </div>
      <div id="sideMenu">
       <SideMenu/>
      </div>
    </div>
    </>
  )
}

export default PostListpage