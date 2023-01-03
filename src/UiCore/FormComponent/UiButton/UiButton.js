import { CircularProgress } from '@mui/material'
import Button from '@mui/material/Button'
import { any } from 'prop-types'
import React from 'react'
const UiButton = (props) => {
  return (
    <Button variant="contained" {...props} >
      {props.disabled && props.type == 'submit' ? <CircularProgress size={24} /> : props.text}
    </Button>
  )
}
export default UiButton

UiButton.propTypes = {
  text: any,
  disabled: any,
  type: any
}
