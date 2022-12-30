import React from "react";
import Menu from "../assests/menu_icon.svg"
import Aol_logo from "../assests/aol_logo.png"
import Search from "../assests/search_icon.svg"
import Vertical_line from "../assests/vertical_line.svg"
import Profile from "../assests/profile_icon.png"
import Bell from "../assests/bell_icon.svg"

export default function Navbar() {
    return (
        <div>
            <img src={Menu} alt="i am a menu icon" />
            <img src={Aol_logo} alt="art of living brand logo" />
            <div>
                <img src={Search} alt="" />
                <img src={Vertical_line} alt="" />
                <img src={Bell} alt="" />
                <img src={Vertical_line} alt="" />
                <img src={Profile} alt="" />
            </div>
        </div>
    );
}
