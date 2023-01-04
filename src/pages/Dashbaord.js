import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Notifications from '../components/Section2/Notifications'
import Cards from '../components/Section2/Cards'

export const Dashbaord = () => {
    return (
        <div className="border h-screen w-screen">
            <div className="h-20"> <Navbar/></div>
            <div className="grid grid-cols-10">
                <div className=" col-span-2"><Sidebar/> </div>
                <div className="col-span-5 bg-[#F5F6F7]" > middle part</div>
                <div className="col-span-3 bg-[#F5F6F7]">
                    <Notifications/>
                    <Cards/>
                    </div>
            </div>
        </div>
    );
};
