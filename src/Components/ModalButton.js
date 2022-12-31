import React from 'react';
import { useState } from 'react';
import Modal from './Modal';

function ModalButton() {
    const [showModal,setshowModal]=useState(false);
  const handleOnClose=()=>setshowModal(false);
  return (
    <div>
      {/* <div  className='text-xl bg-green-500 font-bold' >hello tailwind text</div> */}
      <div className="maindiv">
        <div className="headerbutton p-3">
          <button 
          onClick={()=>setshowModal(true)}
          className="w-25 bg-slate-400 h-12 text-sm text-center p-3 float-right rounded">click here</button>
        </div>
      </div> 
    <Modal onClose={handleOnClose} visible={showModal}/>
    </div>
  )
}

export default ModalButton