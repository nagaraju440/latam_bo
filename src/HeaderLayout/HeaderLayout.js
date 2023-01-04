import React from 'react'
import Backarrow from '../assets/Icons/HeaderSection-Icon.png';
import PlusIcon from '../assets/Icons/HeaderSection-PlusIcon.png'
function HeaderLayout() {
  return (
    <div className="flex justify-center items-center text-center pt-5 pb-5 shadow-white w-full">
      <div className="flex justify-between w-11/12">
        <div className="flex justify-center items-center text-center">
          <div>
            <img src={Backarrow}></img>
          </div>
          <div className="font-normal text-[28px] text-#59595B] pl-5">Cursos</div>
        </div>
        <div className="flex justify-center items-center text-center">
          <div className="flex bg-[#7677F4] px-6 py-3 rounded-[5px] justify-center items-center text-center">
            <div><img src={PlusIcon}></img></div>
            <div className="text-[16px] text-[#ffffff] pl-2.5">NUEVO CURSO</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderLayout