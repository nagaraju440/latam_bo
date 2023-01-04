import React from "react";
import Coldata from "./Coldata.json";
import { useState } from "react";
import Editon from "./Icon/Editon";
import Editof from "./Icon/Editof";

function Table2(prob) {
  return (
    
    <div className="bg-background font-normal  text-sm">
      <div className="flex flex-col gap-2 content-center justify-center  p-5 ">
        {Coldata.map((l) => {
          return (
            <div className="grid grid-cols-9  p-5 font-normal text-sm">
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
              <div></div>
            </div>
          );
        })}
        {prob.data.map((l) => {
          return (
            <div className="grid grid-cols-9  bg-white  rounded-lg  font-normal text-sm p-5 h-[65px] ">
              <div>
                <input type="checkbox" className="w-[20px] h-[20px]"></input>
              </div>
              <div className="">{l.id}</div>
              <div
                className={
                  l.status === "Completed"
                    ? " text-completed underline"
                    : " text-pending underline"    
                }
              >
                {l.status}
              </div>
              <div className="">{l.format}</div>
              <div className="">{l.days}</div>
              <div className="">{l.type}</div>
              <div className="">{l.instrutor}</div>
              <div className="">{l.pid}</div>
              <div className="flex justify-end">
                <EditComponent/>
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
