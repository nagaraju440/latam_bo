import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useController } from 'react-hook-form'
import { FormControl, FormHelperText } from '@mui/material'

const UiRadioGroupFeild = ({ name, options }) => {
  const {
    field,
    fieldState: { error }
  } = useController({ name: name })
  return (
    <div>
      <FormControl error={!!error?.message} >
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          {...field}
          style={{ display: 'flex', flexDirection: 'row' }}>
          {options.map((option, index) => {
            return (
              <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
            )
          })}
        </RadioGroup>
        <FormHelperText>{error?.message}</FormHelperText>
      </FormControl>
    </div>
  )
}

export default UiRadioGroupFeild
