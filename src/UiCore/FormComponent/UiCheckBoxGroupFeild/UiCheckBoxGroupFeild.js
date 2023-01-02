import { FormControl, FormControlLabel, FormHelperText } from '@mui/material'
import { useController } from 'react-hook-form'
import { Checkbox } from '@mui/material'
import styles from './UiCheckBoxGroupFeild.module.css'
const UiCheckBoxGroupFeild = ({ optionLabel, optionValue, name }) => {
  const {
    field: { value, onChange, ...rest }
  } = useController({ name: name })
  return (
    <div>
      <FormControlLabel
        label={optionLabel}
        control={
          <Checkbox
            checked={value == optionLabel}
            onChange={(e) => {
              if (e.target.checked) {
                onChange(optionValue)
              } else {
                onChange(null)
              }
            }}
          />
        }
      />
    </div>
  )
}

const UiSelectUiCheckBoxGroupFeild = ({ options, name }) => {
  const {
    field: { value, onChange, ...rest },
    fieldState: { error }
  } = useController({ name: name })
  return (
    <FormControl error={!!error?.message}>
      <div className={styles.options_container}>
        {options.map((option, index) => {
          return (
            <UiCheckBoxGroupFeild
              key={index}
              name={name}
              optionLabel={option.label}
              optionValue={option.value}
            />
          )
        })}
      </div>
      <FormHelperText error={!!error?.message}>{error?.message}</FormHelperText>
    </FormControl>
    // {/* </div> */}
  )
}

export default UiSelectUiCheckBoxGroupFeild
