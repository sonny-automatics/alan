import React from 'react'
import { ErrorFallback } from './ErrorFallback'
import { ErrorBoundary } from 'react-error-boundary'

export const ErrorBoundaryComponent: React.FC<{
  children: React.ReactElement
}> = ({ children }): JSX.Element => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  )
}
