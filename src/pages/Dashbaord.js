import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export const Dashbaord = () => {
    return (
        <div className="border h-screen w-screen  bg-red-200">
            <div className="bg-blue-200 h-20"> </div>
            <div className="bg-yellow-200 grid grid-cols-9">
                <div className="bg-green-200 col-span-2">side nav </div>
                <div className="bg-grey-200 col-span-4"> middle part</div>
                <div className="bg-orange-200 col-span-3">end part</div>
            </div>
        </div>
    );
};
