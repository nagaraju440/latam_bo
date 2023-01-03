import React from 'react'
import {useState} from 'react';
function Page(prob) {
  const [state,setState]=useState(false);
  const func=()=>{
    // console.log("Karthik");
    setState(true);
  }
  return (
    <div className="flex justify-center bg-background">
  <nav aria-label="Page navigation example">
    <ul class="flex list-style-none">
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
          href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">1</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          onClick={func}>2</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">3</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a></li>
    </ul>
  </nav>
</div>
  )
}

export default Page