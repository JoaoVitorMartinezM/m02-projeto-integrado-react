import React from 'react'
import { BUTTON_VARIANT } from '../../components/Button/ButtonVariant'
import InputGroup from '../../components/InputGroup'
import Button from '../../components/Button'
import './RegisterPage.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  name: yup.string().required('This is required'),
  imageUrl: yup.string().url('A URL is required').required('This is required'),
  category: yup.string().required('This is required'),
  description: yup.string().required('This is required'),
  duration: yup.string('Number is required').required('This is required'),
  targetMarket: yup.string().required('This is required')
})

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      imageUrl: '',
      category: '',
      description: '',
      duration: '',
      targetMarket: ''
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
        <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
            <h2>Register Course</h2>
            <div>
              <InputGroup labelText="Name" placeholder="Name" { ...register('name') } />
              <InputGroup labelText="Icon" placeholder="Url for icon" { ...register('imageUrl') } />

            </div>
            <div>
              <InputGroup labelText="Duration" placeholder="set Duration" { ...register('duration') } />
              <InputGroup labelText="Category" placeholder="Category" { ...register('category') } />

            </div>
            <div>
              <InputGroup labelText="Description" placeholder="Type a description" { ...register('description') } />
              <InputGroup labelText="TargetMarket" placeholder="TargetMarket" { ...register('targetMarket') }/>

            </div>
            <div>
              <InputGroup labelText="Content" placeholder="Content" />
              <Button type='button' variant={ BUTTON_VARIANT.SECONDARY_OUTLINED }>Add</Button>
            </div>
            <Button type='submit' variant={ BUTTON_VARIANT.PRIMARY }>Register</Button>
            <Button type='button' variant={ BUTTON_VARIANT.PRIMARY_LINK } onClick={ () => { } }>CANCEL</Button>
        </form>
  )
}

export default RegisterPage
