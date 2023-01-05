import React from "react";
import { useState } from "react";
import Leftarrow from "./Icon/Leftarrow";
import Rightarrow from "./Icon/Rightarrow";
function Page(prob) {
  const [activenumber, setactivenumber] = useState(0);
  const arr = [];
  const reqpages=[];
  var lengthofdata=prob.le;
  var noOfPages=parseInt(lengthofdata/10);
  if(lengthofdata%10!=0)
  noOfPages+=1;
  for(let i=1;i<=noOfPages;i++)
  {
    var x="";
    if(i<10)
    {
      x="0"+i.toString();
      arr.push(x);
    }
  }
  // console.log(arr);
  // console.log(noOfPages)
  const handleClick = (l) => {
    console.log("jii",l)
    prob.Specific(parseInt(l));
    setactivenumber(l);
    // prob.setps(false);
    // console.log(activenumber);
  };
  const righthandle = () => {
    prob.next();
    setactivenumber(parseInt(activenumber) + 1);
  };

  const lefthandle = () => {
    prob.prev();
    setactivenumber(parseInt(activenumber) - 1);
    console.log(activenumber);
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
              <div className="">{l}</div>
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
