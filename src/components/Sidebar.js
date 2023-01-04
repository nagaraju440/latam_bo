import React from "react";
import Instructor_icon from "../../assets/icons/Instructor_icon.svg";
import Activities_icon from "../../assets/icons/activities_icon.svg";
import Allumnos_icon from "../../assets/icons/Allumni.svg";
import Star_icon from "../../assets/icons/search_icon.svg";
import Blog_icon from "../../assets/icons/bell_icon.svg";
import Reports_icon from "../../assets/icons/reports_icon.svg";
import Legal_icon from "../../assets/icons/legals_icon.svg";
import Administrator_icon from "../../assets/icons/hand_icon.svg";
import Config_icon from "../../assets/icons/Configuration_icon.svg";
import Down_Arrow from "../../assets/icons/down_arrow_icon.svg";

export default function Sidebar() {
    const templ = `
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
    `;

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
        {
            icon: Config_icon,
            text: "CONFIGURACIÓN",
        },
        {
            icon: Config_icon,
            text: "CONFIGURACIÓN",
        },
        {
            icon: Config_icon,
            text: "CONFIGURACIÓN",
        },
        {
            icon: Config_icon,
            text: "CONFIGURACIÓN",
        },
        {
            icon: Config_icon,
            text: "CONFIGURACIÓN",
        },
        {
            icon: Config_icon,
            text: "CONFIGURACIÓN",
        },
        {
            icon: Config_icon,
            text: "CONFIGURACIÓN",
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
            className="w-1/5 h-full top-20 fixed flex flex-col bg-sidebar"
        >
            <div className="px-6 w-full h-[88px] border-b ">
                <div className="w-full border rounded-lg mt-4 w-auto h-[51px] flex flex-row items-center gap-4 pl-6 pr-5  ">
                    <img
                        src={Instructor_icon}
                        alt="i am instructor icon"
                        className="w-6"
                    />
                    <p className="text-[16px #7677F4] font-[600] ">
                        INSTRUCTOR
                    </p>
                    <img
                        src={Down_Arrow}
                        alt="i am drop down arrow "
                        className="h-3 ml-auto "
                    />
                </div>
            </div>
            <div className="h-full px-6 py-4 overflow-y-scroll scrollbar">
                {sideNavItems.map((items, key) => {
                    return (
                        <div className="h[51px] pl-6 pr-5 py-4 flex flex-row items-center gap-4">
                            <img
                                src={items.icon}
                                alt="I am activitios icon in side bar"
                                className="w-7"
                            />
                            <p className="text-[16px #7677F4] font-[600] ">{items.text}</p>
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
