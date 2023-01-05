import React, { useState } from "react";
function ButtonGroup({ buttons }) {
  const [clickedId, setClickedId] = useState(-1);
  return (
    <div className="flex justify-center items-center">
      {buttons.map((buttonLabel, i) => (
        <button key={i} name={buttonLabel} onClick={() => setClickedId(i)} className={i === clickedId ? "flex text-[#858585] px-3 py-2  bg-[#EEEEEE] rounded-[10px]" : "flex bg-[#ffffff] text-[#858585] px-3 py-2 rounded-[10px]"} >
          {buttonLabel}
        </button>
      ))}
    </div>
  );
}
export default ButtonGroup;
