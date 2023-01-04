import React, { useState } from "react";
import './Groupbutton.css'
function ButtonGroup({ buttons }){
  const [clickedId, setClickedId] = useState(-1);
  return (
    <div className="flex justify-center items-center text-center">
      {buttons.map((buttonLabel, i) => (
        <button key={i} name={buttonLabel} onClick={() => setClickedId(i)} className={i === clickedId ? "customButton active" : "customButton"} >
          {buttonLabel}
        </button>
      ))}
    </div>
  );
};
export default ButtonGroup;