import React from 'react'
import Resume from './Resume/Resume';

export default function Modal({visible,onClose}) {
    if(!visible) return null;
  return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
            <div className='card bg-white p-3 rounded-md w-1/3 h-3/4 flex flex-col justify-between '>
              <div className="font-bold">Modal sample
              <button className="float-right p-1" onClick={onClose}>X</button> 
              </div>
              <div className='flex align-center justify-center'>
                <Resume/>
              </div>
            </div>
        </div>
  )
}