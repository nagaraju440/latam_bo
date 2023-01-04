import React from "react";
import { useState } from "react";
import Leftarrow from "./Icon/Leftarrow";
import Rightarrow from "./Icon/Rightarrow";
function Page(prob) {
  const [activenumber, setactivenumber] = useState(0);
  const arr = [1, 2, 3, 4, 5, 6];
  const handleClick = (l) => {
    prob.Specific(l);
    setactivenumber(l);
  };
  const righthandle = () => {
    prob.next();
    setactivenumber(activenumber + 1);
  };

  const lefthandle = () => {
    prob.prev();
    setactivenumber(activenumber - 1);
  };

  return (
    <div className="flex justify-center gap-5 ">
      <ul className="flex flex-row gap-4 w-[188px] h-[34px]  text-[14px] cursor-pointer font-normal">
        <li onClick={lefthandle} className="text-listunactive">
          <Leftarrow />
        </li>

        {arr.map((l) => {
          return (
            <li
              onClick={() => {
                handleClick(l);
              }}
              className={
                activenumber === l
                  ? "text-listactive cursor-pointer"
                  : "text-listunactive cursor-pointer"
              }
            >
              {l}
            </li>
          );
        })}
        <li onClick={righthandle}>
          <Rightarrow className="text-listactive cursor-pointer" />
        </li>
      </ul>
    </div>
  );
}

export default Page;
