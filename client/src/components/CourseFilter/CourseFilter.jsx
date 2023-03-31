import Button, { BUTTON_VARIANT } from '../Button'
import InputGroup from '../InputGroup'
import React from 'react'
import { CourseFilterContainer } from './styles'

function CourseFilter () {
  return (
    <CourseFilterContainer>
      <InputGroup type='text' placeholder='Busque pelo nome do curso' labelText='Buscar' />

      <Button variant={BUTTON_VARIANT.PRIMARY_OUTLINED}>Buscar</Button>
    </CourseFilterContainer>
  )
}

export default CourseFilter
