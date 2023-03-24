import React, { useState } from 'react'
import InputGroup from '../../components/InputGroup'
import Button from '../../components/Button'
import './RegisterPage.css'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [urlImage, setUrlImage] = useState('')
  const [duration, setDuration] = useState('')
  const [category, setCategory] = useState('')
  const [descrition, setDescrition] = useState('')
  const [target, setTarget] = useState('')
  const [content, setContent] = useState('')

  return (
        <div className="formContainer">
            <h2>Register Course</h2>
            <InputGroup labelText="Name" placeholder="Name" onChange={(event) => setName(event.target.value)}/>
            <InputGroup labelText="Icon" placeholder="Url for icon" onChange={(event) => setUrlImage(event.target.value)}/>
            <InputGroup labelText="Duration" placeholder="set Duration" onChange={(event) => setDuration(event.target.value)}/>
            <InputGroup labelText="Category" placeholder="Category" onChange={(event) => setCategory(event.target.value)}/>
            <InputGroup labelText="Description" placeholder="Type a description" onChange={(event) => setDescrition(event.target.value)}/>
            <InputGroup labelText="Public Target" placeholder="Public Target" onChange={(event) => setTarget(event.target.value)}/>
            <InputGroup labelText="Content" placeholder="Content" onChange={(event) => setContent(event.target.value)}/>
            <Button>Register</Button>
        </div>
  )
}

export default RegisterPage
