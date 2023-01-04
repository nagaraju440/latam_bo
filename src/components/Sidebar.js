import React from "react";
import Instructor_icon from "../assests/Instructor_icon.svg";
import Activities_icon from "../assests/activities_icon.svg";
import Allumnos_icon from "../assests/Allumni.svg";
import Star_icon from "../assests/search_icon.svg";
import Blog_icon from "../assests/bell_icon.svg";
import Reports_icon from "../assests/reports_icon.svg";
import Legal_icon from "../assests/legals_icon.svg";
import Administrator_icon from "../assests/hand_icon.svg";
import Config_icon from "../assests/Configuration_icon.svg";
import Down_Arrow from "../assests/down_arrow_icon.svg";

export default function Sidebar() {
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
        <div className="border w-1/5  flex-grow">
            <div className="border px-2 py-4">
                <div className="border flex justify-between px-2 py-3 ">
                    <div className="flex gap-x-4">
                        <img src={Instructor_icon} alt="i am instructor icon" />
                        <p>INSTRUCTOR</p>
                    </div>
                    <img src={Down_Arrow} alt="i am drop down arrow " />
                </div>
            </div>
            <div>
                {sideNavItems.map((items, key) => {
                    return (
                        <div className=" px-4 py-2">
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <div className="w-8">
                                    <img
                                        src={items.icon}
                                        alt="I am activitios icon in side bar"
                                        
                                    />
                                    </div>
                                    <p className="text-sm">{items.text}</p>
                                </div>
                                <img
                                    src={Down_Arrow}
                                    alt="i am down arrow in side bar"
                                    className=""
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
