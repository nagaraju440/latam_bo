// import { IconButton, TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const InputFormFeild = (props) => {
  const {
    field: { value, onChange, ...rest },
    // fieldState: { error },
  } = useController({ name: props.name, defaultValue: "" });
  return (
    <div>
      <input
        {...props}
        {...rest}
        value={value}
        onChange={onChange}
        className='border w-1/2 h-10'
        
        />
      {/* <TextField
        {...props}
        {...rest}
        value={value}
        onChange={onChange}
        className={props.className}
        style={{ width: 400 }}
        helperText={error?.message || ""}
        error={!!error?.message}
        InputProps={{
          endAdornment: value && (
            <IconButton
              // style={{border:'1px solid black',borderRadius:'50%'}}
              onClick={() => {
                onChange("");
              }}
            >
              <CloseRoundedIcon  />
            </IconButton>
          ),
        }}
      /> */}
    </div>
  );
};

export default InputFormFeild;
InputFormFeild.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
