import PropTypes from 'prop-types'
import React from 'react'
import clockImg from '../../assets/clock.png'
import Button, { BUTTON_VARIANT } from '../Button'
import { CourseCardContainer, CourseCardHeader, CourseCardDuration } from './styles'

function CourseCard ({ imageUrl, name, category, description, duration }) {
  return (
    <CourseCardContainer>
      <CourseCardHeader>
        {imageUrl && <img width={50} src={imageUrl} alt={`Imagem curso ${name}`} />}
        <h3>{name}</h3>
      </CourseCardHeader>

      <CourseCardDuration>
        <img src={clockImg} alt='Ícone de relógio' />
        <p>{duration}h</p>
      </CourseCardDuration>
      <a href="http://localhost:5173/course/1">
        <Button variant={BUTTON_VARIANT.SECONDARY_OUTLINED} onClick={() => console.log('aa')}>
          Ver detalhes
        </Button>
      </a>
    </CourseCardContainer>
  )
}

CourseCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  imageUrl: PropTypes.string
}

export default CourseCard
