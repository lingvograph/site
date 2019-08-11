import React from "react"
import ErrorBoundaryBase from "react-error-boundary"

const defaultErrorHandler = (error, componentStack) => {
  console.log(error)
  console.log(componentStack)
}

const ErrorBoundary = ({ onError, ...props }) => (
  <ErrorBoundaryBase onError={onError || defaultErrorHandler} {...props} />
)

export default ErrorBoundary
