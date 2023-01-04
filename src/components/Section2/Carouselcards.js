import React from "react";
import videoicon from "../assets/icons/videoicon.svg";
function Carouselcards() {
  return (
    <div className="flex justify-center">
      <div className="flex w-72 shadow-md h-52 rounded-[9px] flex-col p-5">
        <div className="flex-1 items-start">
           <div className="flex flex-row gap-3">
            <img src={videoicon}/>
            <p className="text-[18px]">El Arte de Respirar</p>
           </div>
           <div className="text-[16px] text-[#959595]">
            <p>14 al 17 de mayo, 2022</p>
            <p>CABA, Argentina</p>
           </div>
        </div>
        <div className="flex-2 items-end ">
          <div className="flex flex-row text-[14px]">
          <p className="text-[#44B741] ">Promoción</p>
          <p className="text-[#898989] "> • 80 participantes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carouselcards;
