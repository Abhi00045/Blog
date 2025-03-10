
import '../component/Navbar.css'
import { useState } from 'react';


const  Navbar = () => {
    const [open , setOpen] = useState(false);
    return (
        <div id='mainbar' className='md:h-20 w-full'>
            {/* Logo */}
            <div id='logo'>
                {/* <IKImage urlEndpoint={import.meta.env.IK_URL_ENDPOINT} path="/logo.png" alt="" /> */}
                <img src="/logo.png" alt="" />
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
                <a href="/">Home</a>
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
                
                <a href="">
                    <button>Login</button>
                </a>
            </div>

        </div>
    );
};
export default Navbar