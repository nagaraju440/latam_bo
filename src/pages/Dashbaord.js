import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export const Dashbaord = () => {
    return (
        <div className="border ">
            <Navbar />
            <div>
                <Sidebar />
                <div className=""> middle component</div>
                <div>ending component</div>
            </div>
        </div>
    );
};
