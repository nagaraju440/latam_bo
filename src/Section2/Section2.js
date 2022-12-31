import React, { useState } from 'react'
import './Section2.css'
import CalenderIcon from '../assets/Icons/CalenderIcon.png';
import Dropdownicon from '../assets/Icons/DropdownIcon.png';
import ButtonGroup from "../Section2/Gropubutton/Groupbutton";

function Section2() {
    const printButtonLabel = (event) => {
        console.log(event.target.name);
        //do some stuff here
      };
    return (
        <div className="Section2-maincontanier">
            <div className="Section2-innercontainer">
                <div className="Section2-innercontainer-Leftpart">
                    <div className="Section2-GroupButton">
                        <ButtonGroup
                            buttons={["En línea", "Presencial"]}
                        doSomethingAfterClick={printButtonLabel}
                        />
                    </div>
                    <div className='Section2-CalenderPart'>
                        <div>
                            <img src={CalenderIcon}></img>
                        </div>
                        <div className='Section2-CalenderText'>Filtrar por fecha</div>
                        <div className='Section2-CalenderDropdownicon'>
                            <img src={Dropdownicon}></img>
                        </div>
                    </div>
                    <div className='Section2-Dropdown'>
                        <div className='Section2-Dropdownbutton'>
                            <div className='Section2-DropdownText'>Estatus</div>
                            <div className='Section2-Dropdownicon2'>
                                <img src={Dropdownicon}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section2-innercontainer-Rightpart">
                    <div className='Section2-moreoptions'>Más opciones</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Section2