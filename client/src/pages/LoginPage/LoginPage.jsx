import './LoginPage.css'
import UseAuth from '../../hooks/UseAuth'
import { useState } from 'react'
import InputGroup from '../../components/InputGroup'
import Button from '../../components/Button/Button';
import { useUserContext } from '../../contexts/UserContext';

function updateContext(user){
    const context = useUserContext()
    context.user= user
    console.log(context)

}

const LoginPage = () => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const {users} = UseAuth()
   
    let aut = false
    

    const handleSubmmit = (event) => {

        users?.forEach((item) => item?.name === user && item?.password === pass ? aut = true: aut)
       

        
        if(aut) { 
            const filter =  users.filter((item)=> item.name === user)
            const admin = filter[0].isAdmin
            // setContext(user, admin)
            
            window.location = 'http://localhost:5173/'

        } 
    }
    aut ? updateContext(user) : ''


    return(
        <div className='loginContainer'>
            <InputGroup labelText="Login"  placeholder="Type your username" onChange={(event)=> setUser(event.target.value)}/>
            <InputGroup labelText="Password"  placeholder="Type your pass" onChange={(event)=> setPass(event.target.value)}/>
            <Button onClick={handleSubmmit}>Submit</Button>
        </div>
        

    )
}

export default LoginPage