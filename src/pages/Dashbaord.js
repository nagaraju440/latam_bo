import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export const Dashbaord = () => {
    return (
        <div className="border ">
            <div className="border bg-zinc-400 h-20 ">nav</div>
            <div className="border bg-red-50 h-auto">
                <div className="bg-orange-500">part 1</div>
                <div className="bg-lime-200">part 2</div>
                <div className="bg-cyan-200">part 3</div>
            </div>
            {/* <Navbar/>
            <Sidebar/> */}
        </div>
    );
};
