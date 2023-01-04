import React, { useEffect, useState } from "react";
import { useController } from "react-hook-form";
import CloseIconSvg from "../../assets/icons/closeIcon";
import DropDownIcon from "../../assets/icons/DropDownIcon";

const NormalSelectComponent = ({name , selectOptionsData}) => {
  const [inputValue, setInputValue] = useState("");
//   const [value, setvalue] = useState("");
const [open, setOpen] = useState(false);
 const {
   field: { value, onChange, ...rest },
   fieldState: { error, isTouched },
 } = useController({ name: name });
  const handleSelectToggle=()=>{
     setOpen(!open);

  }
  return (
    <div id="select" className="w-[121px]   font-medium  relative ">
      <div
        onClick={handleSelectToggle}
        className={`bg-white w-full p-2 flex items-center h-[55px] justify-between border rounded-[8px] ${
          !value && "text-gray-700"
        }
        `}
      >
        {value
          ? value?.length > 25
            ? value?.substring(0, 25) + "..."
            : value
          : "Select option"}
        {/* Drop down icon */}
         (
          <DropDownIcon open={open} />
        )
      </div>
      <ul
        className={`bg-white mt-2  fixed   overflow-y-auto w-[220px]  ${
          open ? "max-h-60" : "hidden"
        } border-[1px] shadow-xl p-3  z-50  rounded-[10px] `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white border-[1px] rounded-[8px]">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder=""
            className="placeholder:text-gray-700 p-2 outline-none w-full"
          />
          {/* search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        {selectOptionsData?.map((option) => (
          <li
            key={option?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              option?.name?.toLowerCase() === value?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              option?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (option?.name?.toLowerCase() !== value?.toLowerCase()) {
                onChange(option.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {option?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NormalSelectComponent;
