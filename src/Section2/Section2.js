import React from 'react'
import CalenderIcon from '../assets/Icons/CalenderIcon.png';
import Dropdownicon from '../assets/Icons/DropdownIcon.png';
import ButtonGroup from "../Section2/Gropubutton/Groupbutton";

function Section2() {
    const printButtonLabel = (event) => {
        console.log(event.target.name);
        //do some stuff here
    };
    return (
        <div className="flex bg-[#E5E5E5] justify-center items-center pt-9 pb-5">
            <div className="flex justify-between w-11/12">
                <div className="flex justify-between basis-7/12">
                    <div className="flex px-1 rounded-[5px] bg-[#ffffff]">
                        <ButtonGroup
                            buttons={["En línea", "Presencial"]}
                            doSomethingAfterClick={printButtonLabel}
                        />
                    </div>
                    <div className='flex px-3 py-3 rounded-[5px] bg-[#ffffff] justify-between items-center text-center'>
                        <div>
                            <img src={CalenderIcon}></img>
                        </div>
                        <div className='pl-4 text-sm font-normal text-[#898989]'>Filtrar por fecha</div>
                        <div className='pl-12'>
                            <img src={Dropdownicon}></img>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex justify-between bg-[#ffffff] rounded-[5px] px-3 py-3 items-center text-center'>
                            <div className='text-sm font-normal text-[#898989]'>Estatus</div>
                            <div className='pl-20'>
                                <img src={Dropdownicon}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className='text-sm font-normal text-[#898989] underline'>Más opciones</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Section2