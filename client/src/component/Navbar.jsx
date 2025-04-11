
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useState } from 'react';
// import Home from '../src/pages/Home';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';


const  Navbar = () => {
    const [open , setOpen] = useState(false);
    return (
        <div id='mainbar' className='md:h-20 w-full'>
            {/* Logo */}
            <div id='logo'>
                {/* <IKImage urlEndpoint={import.meta.env.IK_URL_ENDPOINT} path="/logo.png" alt="" /> */}
                <Link to={"/"}><img src="/logo.png" alt="" /></Link>
                <span>AbhiLog</span>
            </div>
            {/* mobileMEnu */}
            <div id='mobileMenu'>
                <div id='menubarMobile' onClick={() => setOpen(!open)}>
                    {open ? "╳": "☰"}
                </div>
                {/* <div id="menuList">
                    menu
                </div> */}
            </div>
            {/* desktopMenu */}
            <div className="" id='desktopMenu'>
                <div id="first">
                <Link to="/">Home</Link>
                <hr />               
                </div>
                <div id="second">
                <a href="/">About</a>
                <hr />
                </div>
                <div id="third">
                <a href="/">Trending🔥</a>
                <hr />
                </div>
                <div id="fourth">
                <a href="/">Most Popular</a>
                <hr />
                </div>
                
                

                <SignedOut>
                <Link to="/login">
                    <button>Login</button>
                </Link>
      </SignedOut>
      <SignedIn >
        <UserButton/>
      </SignedIn>
            </div>

        </div>
    );
};
export default Navbar