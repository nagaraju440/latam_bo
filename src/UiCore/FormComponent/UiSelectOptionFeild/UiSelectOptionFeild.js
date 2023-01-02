import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material'
import { useController } from 'react-hook-form'

const UiSelectOptionFeild = ({ name, options }) => {
  const {
    field,
    fieldState: { error }
  } = useController({ name: name })
  return (
    <div>
      <FormControl>
        <Select
          {...field}
          size="small"
          sx={{ width: 450, marginLeft: 0 }}
          error={!!error?.message}
          helperText={error?.message || ''}>
          {options.map((option, index) => {
            return (
              <MenuItem value={option.value} key={index}>
                {option.label}
              </MenuItem>
            )
          })}
        </Select>
        <FormHelperText error={!!error?.message}>{error?.message}</FormHelperText>
      </FormControl>
    </div>
  )
}
export default UiSelectOptionFeild
