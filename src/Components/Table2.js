import React from "react";
import Data from "./Data.json";
import Coldata from "./Coldata.json";
import { useState } from "react";
import Editon from "./Editon";
import Editof from "./Editof";

function Table2(prob) {
  console.log(prob.data);
  // console.log(typeof prob)
  prob.data.map((l)=>{
    console.log(l);
  })
  //h-[65px] w-[1045px]
  
  return (
    
    <div className="bg-background font-normal  text-sm">
      <div className="flex flex-col gap-2 content-center justify-center  p-5 ">
        {Coldata.map((l) => {
          return (
            <div className="grid grid-cols-9 items-start  rounded-lg p-5 font-normal text-sm">
              <div>
                <input type="checkbox" className="w-[20px] h-[20px]"></input>
              </div>
              <div className="">{l.id}</div>
              <div className="">{l.status}</div>
              <div className="">{l.type}</div>
              <div className="">{l.duration}</div>
              <div className="">{l.format}</div>
              <div className="">{l.instrutor}</div>
              <div className="">{l.pid}</div>
            </div>
          );
        })}
        {prob.data.map((l) => {
          return (
            <div className="grid grid-cols-9 items-start  bg-white  rounded-lg p-5 font-normal text-sm ">
              <div>
                <input type="checkbox" className="w-[20px] h-[20px]"></input>
              </div>
              <div className="">{l.id}</div>
              <div
                className={
                  l.status === "Completed"
                    ? "basis-1/8 text-completed underline"
                    : "basis-1/8 text-pending underline"    
                }
              >
                {l.status}
              </div>
              <div className="">{l.format}</div>
              <div className="">{l.days}</div>
              <div className="">{l.type}</div>
              <div className="">{l.instrutor}</div>
              <div className="">{l.pid}</div>
              <div className="flex justify-end items-end ">
                <EditComponent />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Table2;

const EditComponent = () => {
  const [ch, setch] = useState("Editof");
  const change = () => {
    if (ch === "Editof") setch("Editon");
    else setch("Editof");
  };
  return (
    <div onClick={change}>{ch === "Editon" ? <Editon /> : <Editof />}</div>
  );
};
