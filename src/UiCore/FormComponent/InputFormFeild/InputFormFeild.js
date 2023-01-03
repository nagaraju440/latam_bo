import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import CloseIconSvg from '../../../assets/icons/closeIcon.js'
const InputFormFeild = (props) => {
  const {
    field: { value, onChange, ...rest },
    fieldState: { error, isTouched},
  
  } = useController({ name: props.name });
  return (
    <div className="relative w-[400px]">
      <input
        type="text"
        class={`form-control
        block
        px-3
        h-[55px]
        w-[367px]
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border-[1.8px] border-solid border-gray-300 
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        ${error && "border-red-600"}
        ${value && error == undefined && "border-green-600"}
       `}
        id="exampleFormControlInput1"
        placeholder="Example label"
        {...props}
        {...rest}
        value={value}
        onChange={onChange}
      />
      {value && value != "" && (
        <CloseIconSvg
          onClick={() => {
            onChange("");
          }}
          class={`absolute right-[40px] bottom-[13.5px] w-7 cursor-pointer
          ${value && "text-green-600"}
          ${!isTouched && "text-blue-600"}
          ${!isTouched&&value&&"text-blue-600"}

        `}
        />
      )}
    </div>
  );
};

export default InputFormFeild;
InputFormFeild.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
