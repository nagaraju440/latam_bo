import React from "react";
import v1 from "../assets/icons/v1.svg";
import v2 from "../assets/icons/v2.svg";
import v3 from "../assets/icons/v3.svg";
import v4 from "../assets/icons/v4.svg";
import v5 from "../assets/icons/v5.svg";

function Cards() {
    const Data = [
        { id: "1", src: v1, text: "Curso nuevo" },
        { id: "2", src: v1, text: "Taller nuevo" },
        { id: "3", src: v2, text: "Alumno nuevo" },
        { id: "4", src: v3, text: "Reporte nuevo" },
        { id: "5", src: v4, text: "Agenda mensual" },
        { id: "6", src: v5, text: "Rendicion nueva" },
       
    ];
    
    return (
        <div className="mt-9">
            <p className="text-[21px] font-semibold text-[#59595B]">ENLACES RÁPIDOS</p>
            <div className="w-96 h-64  grid grid-cols-4 gap-3 ">
               {Data.map((item) => {
                    return (
                        <div className=" h-20 w-20">
                            <div className=" border h-20 w-20 box-content flex justify-center shadow-md items-center rounded-[9px] bg-[#FFFFFF]">
                                <img src={item.src}alt='this is card svg'></img>
                            </div>
                            <div className=" text-center text-[16px] font-normal mt-1.5 leading-none">{item.text}</div>
                        </div>
                    );
                })}
            </div>
            </div>
    );
}

export default Cards;
