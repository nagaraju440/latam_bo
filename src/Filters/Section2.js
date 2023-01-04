import React from 'react'
import CalenderIcon from '../assets/Icons/CalenderIcon.png';
import Dropdownicon from '../assets/Icons/DropdownIcon.png';
import ButtonGroup from "./Groupbutton/Groupbutton";
import EstatusComponent from '../EstatusComponent/EstatusComponent';
function Section2() {
    const printButtonLabel = (event) => {
        console.log(event.target.name);
        //do some stuff here
    };
    return (
        <div className='bg-[#E5E5E5] justify-center items-center px-12 py-5   grid grid-cols-5 gap-3' >
            <div>
                <div className="rounded-[5px] bg-[#ffffff] w-48 ">
                    <ButtonGroup
                        buttons={["En línea", "Presencial"]}
                        doSomethingAfterClick={printButtonLabel}
                    />
                </div>
            </div>
            <div className='flex px-3 py-3.5 rounded-[5px] bg-[#ffffff] justify-between items-center text-center w-48'>
                <div>
                    <img src={CalenderIcon}></img>
                </div>
                <div className='flex pl-1 text-sm font-normal text-[#898989]'>Filtrar por fecha</div>
                <div >
                    <img src={Dropdownicon}></img>
                </div>
            </div>

            <div >
                <EstatusComponent></EstatusComponent>
            </div>
            <div>

            </div>

            <div className=' '>
                <div className=" justify-center items-center col-span-2 pl-6">
                    <div className='text-sm font-normal text-[#898989] underline'>Más opciones</div>
                </div>
            </div>
        </div>
    )
}

export default Section2