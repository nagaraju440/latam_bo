import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import CloseIconSvg from '../../../assets/icons/closeIcon.js'
const NormalInputFormField = (props) => {
  const {
    field: { value, onChange, ...rest },
    fieldState: { error, isTouched},
  
  } = useController({ name: props.name });
  return (
    <div>
      <input
        type="text"
        class={`form-control
        
        px-3
        h-[45px]
        w-[167px]
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
       `}
        id="exampleFormControlInput1"
        placeholder="Example label"
        {...props}
        {...rest}
        value={value}
        onChange={onChange}
      />
      
    </div>
  );
};

export default NormalInputFormField;
NormalInputFormField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
