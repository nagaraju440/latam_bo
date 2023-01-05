import React from 'react'
import searchimage from "../assets/images/i1.jpg";
function searchcard() {
  return (
    <div className='m-20'>
    <div className='w-72 h-11 rounded-[5px] bg-[#F8F8F8] flex flex-row gap-2 p-1'>
        <div>
            <img className='rounded w-35 h-35' src={searchimage}></img>
        </div>
        <div className='flex flex-col  font-sans leading-4 text-[12px] font-normal '>
            <p>El Arte de Respirar · En línea</p>
            <p className=' text-[#898989]'>Del 14 al 18 de febrero, 2022</p>
        </div>
    </div>
    </div>
  )
}

export default searchcard