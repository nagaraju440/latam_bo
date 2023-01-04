import React, { useState } from "react";
function ButtonGroup({ buttons }) {
  const [clickedId, setClickedId] = useState(-1);
  return (
    <div className="flex py-1">
      {buttons.map((buttonLabel, i) => (
        <button key={i} name={buttonLabel} onClick={() => setClickedId(i)} className={i === clickedId ? "flex text-[#858585] px-3 py-2  bg-[#EEEEEE] border-none" : "flex bg-[#ffffff] text-[#858585] px-3 py-2 border-none"} >
          {buttonLabel}
        </button>
      ))}
    </div>
  );
}
export default ButtonGroup;
