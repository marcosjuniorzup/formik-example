import React from "react"
import withFormik from "../withFormik"

const Radio = ({ children, ...props }) => (
  <input {...props} type="radio">
    {children}
  </input>
)

export default withFormik(Radio)
