import React from "react";
import Menu from "../assests/menu_icon.svg"
import Aol_logo from "../assests/aol_logo.png"
import Search from "../assests/search_icon.svg"
import Vertical_line from "../assests/vertical_line.svg"
import Profile from "../assests/profile_icon.png"
import Bell from "../assests/bell_icon.svg"

export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-16 py-3 h-20">
            <img src={Menu} alt="i am a menu icon" />
            <img src={Aol_logo} alt="art of living brand logo" className="h-14 w-36" />
            <div className="flex justify-between items-center gap-3">
                <img src={Search} alt="i am the search icon in the nav bar" />
                <img src={Vertical_line} alt=" i am the vertical line in between search and bell" />
                <img src={Bell} alt=" i am the bell icon in nav" />
                <img src={Vertical_line} alt="i am the vertical line in between bell and profile icons" />
                <img src={Profile} alt="i am profile icon in the nav " />
            </div>
        </div>
    );
}
