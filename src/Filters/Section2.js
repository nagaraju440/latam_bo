import React from "react";
import CalenderIcon from "../assets/Icons/CalenderIcon.png";
import Dropdownicon from "../assets/Icons/DropdownIcon.png";
import ButtonGroup from "./Groupbutton/Groupbutton";
import EstatusComponent from "../EstatusComponent/EstatusComponent";
function Section2() {
  const printButtonLabel = (event) => {
    console.log(event.target.name);
    //do some stuff here
  };
  return (
    <div className=" bg-[#E5E5E5] justify-center items-center pt-9 pb-5   grid grid-cols-5">
      <div>
        {/* first */}
        <div className="px-1 rounded-[5px] bg-[#ffffff] ">
          <ButtonGroup
            buttons={["En línea", "Presencial"]}
            doSomethingAfterClick={printButtonLabel}
          />
        </div>
      </div>
      <div className="">
        <div className=" px-3 py-3 rounded-[5px] bg-[#ffffff] justify-between items-center text-center ">
          <div>
            <img src={CalenderIcon}></img>
          </div>
          <div className="pl-4 text-sm font-normal text-[#898989]">
            Filtrar por fecha
          </div>
          <div>
            <img src={Dropdownicon}></img>
          </div>
        </div>
        {/* second */}
      </div>
      <div className=" ">
        {/* third */}

        <div>
          <EstatusComponent></EstatusComponent>
        </div>
      </div>
      <div className=" ">fourth</div>
      <div className=" ">
        {/* fifth */}
        <div className=" justify-center items-center col-span-2">
          <div className="text-sm font-normal text-[#898989] underline">
            Más opciones
          </div>
          {/* //             <div></div> */}
        </div>
      </div>
    </div>
    // <div className=" bg-[#E5E5E5] justify-center items-center pt-9 pb-5">
    //     <div className=" bg-red justify-between w-11/12 grid grid-cols-15">
    //     {/* className="flex justify-between " */}
    //         {/* <div  className="grid grid-cols-13"> */}
    //             <div className="px-1 rounded-[5px] bg-[#ffffff] col-span-3">
    //                 <ButtonGroup
    //                     buttons={["En línea", "Presencial"]}
    //                     doSomethingAfterClick={printButtonLabel}
    //                 />
    //             </div>
    //             <div className=' px-3 py-3 rounded-[5px] bg-[#ffffff] justify-between items-center text-center col-span-3'>
    //                 <div>
    //                     <img src={CalenderIcon}></img>
    //                 </div>
    //                 <div className='pl-4 text-sm font-normal text-[#898989]'>Filtrar por fecha</div>
    //                 <div className='pl-12'>
    //                     <img src={Dropdownicon}></img>
    //                 </div>
    //             </div>
    //             <div className='col-span-2'>
    //                  <EstatusComponent></EstatusComponent>
    //             </div>
    //             {/* <div className='col-span-4'></div> */}
    //         {/* </div> */}
    //         <div className="bg-[blue] justify-center items-center col-span-2">
    //             <div className='text-sm font-normal text-[#898989] underline'>Más opciones</div>
    //             <div></div>
    //         </div>
    //     </div>
    // </div>
  );
}

export default Section2;
