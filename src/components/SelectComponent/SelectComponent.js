import React, { useEffect, useState } from "react";
import { useController } from "react-hook-form";
import CloseIconSvg from "../../assets/icons/closeIcon";
import DropDownIcon from "../../assets/icons/DropDownIcon";

const SelectComponent = ({name , selectOptionsData}) => {
  const [inputValue, setInputValue] = useState("");
//   const [value, setvalue] = useState("");
  const [open, setOpen] = useState(false);
 const {
   field: { value, onChange, ...rest },
   fieldState: { error, isTouched },
 } = useController({ name: name });
  
  return (
    <div className="w-[367px]  font-medium  relative ">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center h-[55px] justify-between border rounded ${
          !value && "text-gray-700"
        }
        ${error && "border-red-600"}
        ${value && error == undefined && "border-green-600"} 
        `}
      > 
        {value
          ? value?.length > 25
            ? value?.substring(0, 25) + "..."
            : value
          : "Select option"}
        {/* Drop down icon */}
        {value && value != "" ? (
          <CloseIconSvg
            onClick={() => {
              onChange("");
            }}
            class={` w-7 cursor-pointer
          ${value && "text-green-600"}
        `}
          />
        ) : (
          <DropDownIcon open={open} />
        )}
      </div>
      <ul
        className={`bg-white mt-2 absolute right-0   overflow-y-auto w-3/4 float-right ${
          open ? "max-h-60" : "hidden"
        } border-[1.5px] shadow-xl p-3 `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white   border-[1.5px] ">
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
                // setvalue(option?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {/* <li>{value}</li> */}
            {option?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectComponent;
