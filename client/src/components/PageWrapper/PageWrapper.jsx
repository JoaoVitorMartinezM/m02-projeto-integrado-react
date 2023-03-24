import './PageWrapper.css'
import React from 'react'

// eslint-disable-next-line react/prop-types
function PageWrapper ({ children }) {
  return <main className='pageWrapperContainer'>{children}</main>
}

export default PageWrapper
