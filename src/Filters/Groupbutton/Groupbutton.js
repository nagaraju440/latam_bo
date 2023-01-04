import React, { useState } from "react";
function ButtonGroup({ buttons }){
  const [clickedId, setClickedId] = useState(-1);
  return (
    <div className="flex py-1">
      {buttons.map((buttonLabel, i) => (
        <button key={i} name={buttonLabel} onClick={() => setClickedId(i)} className={i === clickedId ? "flex text-[#858585] px-5 py-2  bg-[#EEEEEE] " : "flex bg-[#ffffff] text-[#858585] px-5 py-2 border-[#FFFFFF]"} >
          {buttonLabel}
        </button>
      ))}
    </div>
  );
};
export default ButtonGroup;