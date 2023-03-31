
import React from 'react'
import { PageWrapperContainer } from './style'

// eslint-disable-next-line react/prop-types
function PageWrapper ({ children }) {
  return <PageWrapperContainer>{children}</PageWrapperContainer>
}

export default PageWrapper
