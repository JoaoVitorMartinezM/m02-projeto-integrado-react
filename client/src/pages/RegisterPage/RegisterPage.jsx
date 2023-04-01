import React from 'react'
import { BUTTON_VARIANT } from '../../components/Button/ButtonVariant'
import InputGroup from '../../components/InputGroup'
import Button from '../../components/Button'
import { FormContainer } from './style'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useCourseRegister from '../../hooks/useCourseRegister'
import { useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
  name: yup.string().required('This is required'),
  imageUrl: yup.string().url('A URL is required').required('This is required'),
  category: yup.string().required('This is required'),
  description: yup.string().required('This is required'),
  duration: yup.string('Number is required').required('This is required'),
  targetMarket: yup.string().required('This is required')
})

const RegisterPage = () => {
  const navigate = useNavigate()

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
    registerCourse(data)
  }

  const { isSubmitting, registerCourse } = useCourseRegister()

  return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <h2>Register Course</h2>
            <div>
              <InputGroup labelText="Name" helperText={errors?.name?.message} placeholder="Name" { ...register('name') } />
              <InputGroup labelText="Icon" helperText={errors?.imageUrl?.message} placeholder="Url for icon" { ...register('imageUrl') } />

            </div>
            <div>
              <InputGroup labelText="Duration" helperText={errors?.duration?.message} placeholder="set Duration" { ...register('duration') } />
              <InputGroup labelText="Category" placeholder="Category" helperText={errors?.category?.message} { ...register('category') } />

            </div>
            <div>
              <InputGroup labelText="Description" placeholder="Type a description" helperText={errors?.description?.message} { ...register('description') } />
              <InputGroup labelText="TargetMarket" placeholder="TargetMarket" helperText={errors?.targetMarket?.message} { ...register('targetMarket') }/>

            </div>
            <div>
              <InputGroup labelText="Content" placeholder="Content" />
              <Button type='button' variant={ BUTTON_VARIANT.SECONDARY_OUTLINED }>Add</Button>
            </div>
            <Button type='submit' disabled={ isSubmitting } variant={ BUTTON_VARIANT.PRIMARY }>Register</Button>
            <Button type='button' onClick={ () => navigate('/') } variant={ BUTTON_VARIANT.PRIMARY_LINK }>CANCEL</Button>
        </FormContainer>
  )
}

export default RegisterPage
