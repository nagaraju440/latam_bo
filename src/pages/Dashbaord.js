import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export const Dashbaord = () => {
    return (
        <div className="border ">
            <Navbar />
            <div>
                <div>
                    <Sidebar />
                </div>
                <div className=""> middle component</div>
                <div>ending component</div>
            </div>
        </div>
    );
};
