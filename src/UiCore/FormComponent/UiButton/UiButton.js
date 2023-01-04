import { CircularProgress } from '@mui/material'
import Button from '@mui/material/Button'
import { any } from 'prop-types'
import React from 'react'
const UiButton = (props) => {

  return (
    // <Button variant="contained" {...props}>
    <button className=' bg-violet-500  w-[367px] h-[55px] rounded text-white border' {...props} >
      {props.text}
    </button>

    // {/* {props.disabled && props.type == 'submit' ? <CircularProgress size={24} /> : props.text} */}
    // </Button>
  );
}
export default UiButton

UiButton.propTypes = {
  text: any,
  disabled: any,
  type: any
}
