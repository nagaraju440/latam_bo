import React from 'react'

export default function Accordion({children}) {
  return (
    <div class="accordion" id="accordionExample">
    <div class="accordion-item bg-white border border-gray-200">
      <h2 class="accordion-header mb-0" id="headingOne">
        <button class="
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
          aria-controls="collapseOne">
          Participantes
        </button>
      </h2>
      
    </div>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body py-4 px-5">
          {children}
        </div>
      </div>
   
  </div>
  )
}
