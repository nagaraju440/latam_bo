import { TextField } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'

const UiInputFeild = (props) => {
  const {
    field,
    fieldState: { error }
  } = useController({ name: props.name })
  return (
    <div>
      <TextField
        {...props}
        {...field}
        className={props.className}
        helperText={error?.message || ''}
        error={!!error?.message}
      />
    </div>
  )
}

export default UiInputFeild
UiInputFeild.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.object
}
