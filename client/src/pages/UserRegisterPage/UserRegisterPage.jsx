import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import useUserRegister from '../../hooks/useUserRegister'
import * as yup from 'yup'
import { UserRegisterContainer } from './style'
import InputGroup from '../../components/InputGroup'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import { Navigate, useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
  name: yup.string().required('This is required'),
  password: yup.string().required('This is required'),
  isAdmin: yup.boolean().notRequired()
})

const UserRegisterPage = () => {
  const navigate = useNavigate()
  const { isSubmitting, registerUser } = useUserRegister()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      password: '',
      isAdmin: false
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    registerUser(data)
  }

  return (
      <UserRegisterContainer onSubmit={handleSubmit(onSubmit)}>
        <h2>Register User</h2>

        <InputGroup labelText="Name" helperText={errors?.name?.message} placeholder="Name" { ...register('name') } />
        <InputGroup labelText="Password" helperText={errors?.password?.message} placeholder="Password" { ...register('password') } />

        <Button type='submit' disabled={ isSubmitting } variant={ BUTTON_VARIANT.PRIMARY }>Register</Button>
        <Button type='button' onClick={ () => navigate('/') } variant={ BUTTON_VARIANT.PRIMARY }>CANCEL</Button>

      </UserRegisterContainer>

  )
}

export default UserRegisterPage
