import React from 'react'

export default function Accordion({children,name,id}) {
  return (
    <div class="accordion" id="accordionExample">
    <div class="accordion-item bg-white border w-[467px] ">
      <h2 class="accordion-header mb-0" id="headingOne">
        <button class="
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-500 text-left 
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        " type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="true"
          aria-controls={id}>
          {name}
        </button>
      </h2>
      
    </div>
    <div id={id} class="accordion-collapse collapse show" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body py-4 px-5  ">
          {children}
        </div>
      </div>
   
  </div>
  )
}
