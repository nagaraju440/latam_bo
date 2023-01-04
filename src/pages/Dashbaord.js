import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export const Dashbaord = () => {
    return (
        <div className="h-full w-full">
            <div className=" h-20"><Navbar/></div>
            <div className="grid grid-cols-10 h-full ">
                <div className="col-span-2 h-full"><Sidebar/></div>
                <div className="bg-grey-200 col-span-5 h-full"> middle part</div>
                <div className="bg-orange-200 col-span-3 h-full">end part</div>
            </div>
        </div>
    );
};
