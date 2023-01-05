import React from "react";
import Activities_icon from "../assests/activities_icon.svg";
import Instructor_icon from "../assests/Instructor_icon.svg";
import Allumnos_icon from "../assests/Allumni.svg";
import Star_icon from "../assests/search_icon.svg";
import Blog_icon from "../assests/blog_icon.svg";
import Reports_icon from "../assests/reports_icon.svg";
import Legal_icon from "../assests/legals_icon.svg";
import Administrator_icon from "../assests/hand_icon.svg";
import Config_icon from "../assests/Configuration_icon.svg";
import Down_Arrow from "../assests/down_arrow_icon.svg";

export default function Sidebar() {
    const userType = [
        "Participante",
        "Administración",
        "Coord. de País",
        "Marketing,",
    ];
    const sideNavItems = [
        {
            icon: Activities_icon,
            text: "ACTIVIDADES",
        },
        {
            icon: Allumnos_icon,
            text: "ALUMNOS",
        },
        {
            icon: Star_icon,
            text: "MI PÁGINA",
        },
        {
            icon: Blog_icon,
            text: "BLOG",
        },
        {
            icon: Reports_icon,
            text: "REPORTES",
        },
        {
            icon: Legal_icon,
            text: "LEGALES",
        },
        {
            icon: Administrator_icon,
            text: "ADMINISTRACION",
        },
        {
            icon: Config_icon,
            text: "CONFIGURACIÓN",
        },
    ];
    return (
        // <div
        //     style={{ borderRight: "1px solid #d7d7d7" }}
        //     className="w-1/5 h-full top-20 fixed flex flex-column bg-sidebar"
        // ></div>
        <div
            style={{ borderRight: "1px solid #d7d7d7" }}
            className="w-1/5 h-full top-20 fixed flex flex-col bg-[#F8F5EF]"
        >
            <div class="px-6 w-full h-[88px] border-b dropdown relative">
                <div
                    class="
                        dropdown-toggle
                        cursor-pointer
                        w-full border rounded-lg mt-4 w-auto h-[51px] flex flex-row items-center gap-4 pl-6 pr-5  
                        px-6
                        leading-tight
                        uppercase
                        transition
                        duration-150
                        ease-in-out
                        flex
                        items-center
                        whitespace-nowrap
                        "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img src={Instructor_icon} alt="" className="w-7" />
                    <p className="text-[16px ] text-[#7677F4] font-[600]">
                        Dropdown button
                    </p>
                    <img
                        src={Down_Arrow}
                        alt="i am down arrow in side bar"
                        className="h-3 ml-auto"
                    />
                </div>
                <ul
                    class="
                            dropdown-menu
                            min-w-max
                            absolute
                            hidden
                            bg-white
                            text-[20px]
                            font-[400]
                            z-50
                            float-left
                            p-5
                            list-none
                            text-left
                            rounded-lg
                            shadow-lg
                            mt-1
                            hidden
                            m-0
                            bg-clip-padding
                            border-none
                            "
                    aria-labelledby="dropdownMenuButton1"
                >
                    {userType.map((item, key) => {
                        return (
                            <a
                                className="text-[16px ] text-[#59595B] font-[400] dropdown-item py-2
                        px-4
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100"
                                href="#"
                            >
                                {item}
                            </a>
                        );
                    })}
                </ul>
            </div>

            <div className="h-full px-6 py-4 overflow-y-scroll scrollbar">
                {sideNavItems.map((item, key) => {
                    return (
                        <div className="h[51px] pl-6 pr-5 py-4 flex flex-row items-center gap-4">
                            <img
                                src={item.icon}
                                alt="I am activitios icon in side bar"
                                className="w-7"
                            />
                            <p className="text-[16px] font-[600] ">
                                {item.text}
                            </p>
                            <img
                                src={Down_Arrow}
                                alt="i am down arrow in side bar"
                                className="h-3 ml-auto"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
