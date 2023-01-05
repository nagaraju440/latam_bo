const DropDownIcon=({open})=>{
   return (
     <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth={1.5}
       stroke="#898989"
       className={`w-4 h-4 mr-3 ${open && "rotate-180"} } `}
     >
       <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M19.5 8.25l-7.5 7.5-7.5-7.5"
       />
     </svg>
   );
}

export default DropDownIcon;