import './LoginPage.css'
import UseAuth from '../../hooks/UseAuth'
import { useState } from 'react'
import InputGroup from '../../components/InputGroup'

const LoginPage = () => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const {users} = UseAuth()
   
    let aut = false

    users?.forEach((item) => item?.name === user && item?.password === pass ? aut = true: aut)
    


    return(
        <div className='loginContainer'>
            {aut ? window.location = 'http://localhost:5173/': ''}
            <InputGroup labelText="Login"  placeholder="Type your username" onChange={(event)=> setUser(event.target.value)}/>
            <InputGroup labelText="Password"  placeholder="Type your pass" onChange={(event)=> setPass(event.target.value)}/>
        </div>
        

    )
}

export default LoginPage