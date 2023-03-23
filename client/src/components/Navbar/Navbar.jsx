import './Navbar.css'
import { useUserState } from '../../contexts/UserContext'

function Navbar () {
  const userContext = useUserState()

  console.log(userContext.isAdmin)

  return (
    <header className='navbarContainer'>
      <div className='navbarLogoBox'>
        <img src='/logo.png' alt='Logo' />
        <h1>DEVinCursos</h1>
      </div>
      {userContext.user !== '' ? <span>Logado</span> : <span><a href='/login'>Login</a></span>}
    </header>
  )
}

export default Navbar
