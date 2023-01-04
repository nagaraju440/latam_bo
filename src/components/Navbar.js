import React from "react";

// icons

import Menu from "../assests/menu_icon.svg"
import Aol_logo from "../assests/aol_logo.png"
import Search from "../assests/search_icon.svg"
import Vertical_line from "../assests/vertical_line.svg"
import Profile from "../assests/profile_icon.png"
import Bell from "../assests/bell_icon.svg"

const Navbar = () => {
    return (
        <div className="border-b flex fixed w-screen top-0 flex-row items-center px-12 h-20 bg-white">
            <img src={Menu} className="cursor-pointer h-4 w-auto" alt="i am a menu icon" />
            <img src={Aol_logo} alt="art of living brand logo" className="h-13 m-auto w-auto cursor-pointer" />
            <img src={Search} className="cursor-pointer h-5 w-auto mx-3" alt="i am the search icon in the nav bar" />
            <img src={Vertical_line} className="mx-1" alt=" i am the vertical line in between search and bell" />
            <img src={Bell} className="cursor-pointer h-5 w-auto  mx-3" alt=" i am the bell icon in nav" />
            <img src={Vertical_line} className=" mx-1" alt="i am the vertical line in between bell and profile icons" />
            <img src={Profile} className="cursor-pointer h-6 w-auto  ml-3" alt="i am profile icon in the nav " />
        </div>
    );
}

export default Navbar;