import React, { MutableRefObject } from 'react'
import { useForm, FormProvider, useFormContext, UseFormReturn } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styles from './Form.module.css'
import { any } from 'prop-types'

const Form = ({
  children,
  onSubmit,
  schema = yup.object(),
  defaultValues,
  getValues,
  ...props
}) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    // "onTouched"
    defaultValues,
    getValues
  })
  if (props.useFormMethodsRef) props.useFormMethodsRef.current = methods
  const { handleSubmit } = methods
  const Call = () => {}
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmit != undefined ? handleSubmit(onSubmit) : Call}
        className={styles.form}
        {...props}>
        {children}
      </form>
    </FormProvider>
  )
}
export default Form

Form.propTypes = {
  children: any,
  onSubmit: any,
  schema: any,
  defaultValues: any,
  getValues: any,
  useFormMethodsRef: any
}
