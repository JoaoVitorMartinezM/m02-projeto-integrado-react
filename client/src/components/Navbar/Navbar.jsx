import { useUserState } from '../../contexts/UserContext'
import React from 'react'
import { NavbarContainer, NavbarLogoBox } from './style'

function Navbar () {
  const userContext = useUserState()

  console.log(userContext.isAdmin)

  return (
    <NavbarContainer>
      <NavbarLogoBox>
        <img src='/logo.png' alt='Logo' />
        <h1>DEVinCursos</h1>
      </NavbarLogoBox>
      {userContext.user !== '' ? <span>Logado</span> : <span><a href='/login'>Login</a></span>}
    </NavbarContainer>
  )
}

export default Navbar
