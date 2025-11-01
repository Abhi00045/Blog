import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import PostListpage from './pages/PostListpage.jsx'
import Register from './pages/Register.jsx'
import  CreateBlog from './pages/write.jsx'
import Mainlayout from './layout/Mainlayout.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import SinglePostPage from './component/SinglePostPage.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

 
const router = createBrowserRouter([
  {
    element:<Mainlayout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/posts",
        element: <PostListpage/>,
      },
      {
        path: "/signup",
        element: <Register/>,
      },
      {
        path: "/update",
        element: <CreateBlog/>,
      }, 
      {
        path : '/singlepost',
        element: <SinglePostPage/>
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
