import React from "react";
import Data from ".././Data.json";
import EditButton from "./EditButton";

function Content() {
  return (
    <div className="mb-2 relative">
      <div className="container h-96 overflow-auto pr-5 pb-8 overflow-y-scroll scrollbar">
        {Data.map((d) => {
          return (
            <div className="my-2">
              <div className="flex justify-between">
                <p className="font-semibold tracking-wider text-lg text-title mb-2 uppercase">
                  {d.title}
                </p>
                <EditButton />
              </div>
              <div className="grid grid-cols-2 font-normal overflow-hidden text-base mb-2 [&>*:nth-child(odd)]:text-property [&>*:nth-child(odd)]:mb-1 [&>*:nth-child(even)]:text-value">
                <p>{d.course[0]}</p>
                <p>{d.course[1]}</p>
                <p>{d.modality[0]}</p>
                <p>{d.modality[1]}</p>
                <p>{d.zoomLink[0]}</p>
                <p>{d.zoomLink[1]}</p>
                <p>{d.visibility[0]}</p>
                <p>{d.visibility[1]}</p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <div className="h-20 w-full absolute bottom-0 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}

export default Content;
