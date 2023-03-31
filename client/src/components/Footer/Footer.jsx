
import React from 'react'
import { FooterContainer } from './styles'

function Footer () {
  return (
    <FooterContainer>
      <p>DEVinCursos | {new Date().getFullYear()}</p>
    </FooterContainer>
  )
}

export default Footer
