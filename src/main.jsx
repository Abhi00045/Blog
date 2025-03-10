import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import PostListpage from './pages/PostListpage.jsx'
import Register from './pages/Register.jsx'
import Write from './pages/write.jsx'
import Mainlayout from './layout/Mainlayout.jsx'

 
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
        element: <Write/>,
      }, 
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    {/* <App /> */}
    <RouterProvider router={router} />
    {/* </BrowserRouter> */}
  </StrictMode>,
)
