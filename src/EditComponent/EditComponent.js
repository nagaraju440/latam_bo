import React from 'react'
import { Popover } from '@headlessui/react';
function EditComponent() {
  // var popoverTriggerList = [].slice.call(
  //   document.querySelectorAll('[data-bs-toggle="popover"]')
  // );
  // var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  //   return new Popover(popoverTriggerEl);
  // });
  return (
    <div>
      <button type="button" className="
    px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out
  " data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="bottom popover">
    Popover on bottom
  </button>
      </div>
  )
}

export default EditComponent