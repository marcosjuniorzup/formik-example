import React from 'react'
import { Field } from 'formik'
import FieldGroup from '../FieldGroup'

const withFormik = Component => ({ label, dist, name, ...props }) => {
  const NewComponent = (fieldProps) => {
    const { form } = fieldProps
    const { errors, touched } = form
    const error = touched[name] && errors[name]

    return (
      <FieldGroup error={error} label={label} dist={dist}>
        <Component {...fieldProps} {...props} />
      </FieldGroup>
    )
  }

  return <Field name={name} component={NewComponent} />
}

export default withFormik
