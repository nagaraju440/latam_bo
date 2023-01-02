import { TextField } from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { IconButton, InputAdornment } from '@mui/material'
const PasswordInputFormFeild = (props) => {
  const {
    field,
    fieldState: { error }
  } = useController({ name: props.name, defaultValue: '' })
  const [showPassword, setShowPassword] = useState(true)
  return (
    <div>
      <TextField
        type={showPassword ? 'password' : 'text'}
        {...props}
        {...field}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
        className={props.className}
        helperText={error?.message || ''}
        error={!!error?.message}
      />
    </div>
  )
}

export default PasswordInputFormFeild
PasswordInputFormFeild.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.object
}
