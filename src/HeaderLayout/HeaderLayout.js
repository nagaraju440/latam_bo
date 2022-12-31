import React from 'react'
import './HeaderLayout.css'
import Backarrow from '../assets/Icons/HeaderSection-Icon.png';
import PlusIcon from '../assets/Icons/HeaderSection-PlusIcon.png'
function HeaderLayout() {
  return (
    <div className="HeaderLayout-maincontainer">
        <div className="HeaderLayout-innerContainer">
            <div className="HeaderLayout-InnerContainer-Leftpart">
                <div>
                    <img src={Backarrow}></img>
                </div>
                <div className="HeaderLayout-HeaderTitle">Cursos</div>
            </div>
            <div className="HeaderLayout-InnerContainer-Rightpart">
                 <div className="HeaderLayout-Button">
                    <div><img src={PlusIcon}></img></div>
                    <div className="HeaderLayout-ButtonText">NUEVO CURSO</div>
                 </div>
            </div>
        </div> 
    </div>
  )
}

export default HeaderLayout