import './LoginPage.css'
import UseAuth from '../../hooks/UseAuth'
import React, { useState } from 'react'
import InputGroup from '../../components/InputGroup'
import Button from '../../components/Button/Button'

const LoginPage = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const { users } = UseAuth()

  let aut = false

  const handleSubmmit = (event) => {
    users?.forEach((item) => item?.name === user && item?.password === pass ? (aut = true) : (aut))

    if (aut) {
      const filter = users.filter((item) => item?.name === user)
      const isAdmin = filter[0]?.isAdmin
      localStorage.clear()
      localStorage.setItem('login', JSON.stringify({ user, isAdmin }))

      window.location = 'http://localhost:5173/'
    }
  }

  return (
        <div className='loginContainer'>
            <InputGroup labelText="Login" placeholder="Type your username" onChange={(event) => setUser(event.target.value)}/>
            <InputGroup labelText="Password" placeholder="Type your pass" onChange={(event) => setPass(event.target.value)}/>
            <Button onClick={handleSubmmit}>Submit</Button>
        </div>

  )
}

export default LoginPage
