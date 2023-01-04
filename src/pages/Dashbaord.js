import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export const Dashbaord = () => {
  return (
    <div className="border h-screen w-screen  ">
      <div className="h-20">
        <Navbar />
      </div>
      <div className="bg-yellow-200 grid grid-cols-10 h-full">
        <div className="col-span-2">
          <Sidebar />{" "}
        </div>
        <div className="bg-grey-200 col-span-5"> middle part</div>
        <div className="bg-orange-200 col-span-3">end part</div>
      </div>
    </div>
  );
};
