import React from "react";
import v1 from "../assets/icons/v1.svg";
import v2 from "../assets/icons/v2.svg";
import v3 from "../assets/icons/v3.svg";
import v4 from "../assets/icons/v4.svg";
import v5 from "../assets/icons/v5.svg";

function Cards() {
    const Data = [
        { id: "1", src: v1, text: "Curso nuevo" },
        { id: "2", src: v2, text: "Taller nuevo" },
        { id: "3", src: v3, text: "Alumno nuevo" },
        { id: "4", src: v4, text: "Reporte nuevo" },
        { id: "5", src: v5, text: "Reporte nuevo hj" },
        { id: "6", src: v5, text: "Reporte nuevo" },
    ];
    return (
        <div>
            <p className="text-[21px] font-semibold text-[#59595B]">ENLACES RÁPIDOS</p>
            <div className="w-96 h-80  grid grid-cols-4 gap-3">
               {Data.map((item) => {
                    return (
                        <div>
                            <div className=" border box-content h-20 w-20 flex justify-center shadow-md items-center rounded-[9px] bg-[#FFFFFF] ">
                                <img src={item.src}alt='this is card svg'></img>
                            </div>
                            <div className=" text-center text-[16px] font-normal ">{item.text}</div>
                        </div>
                    );
                })}
            </div>
            </div>
    );
}

export default Cards;
