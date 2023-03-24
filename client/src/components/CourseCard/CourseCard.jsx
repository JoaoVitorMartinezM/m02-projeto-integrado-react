import PropTypes from 'prop-types'
import React from 'react'
import clockImg from '../../assets/clock.png'
import Button, { BUTTON_VARIANT } from '../Button'

import './CourseCard.css'
function CourseCard ({ imageUrl, name, category, description, duration }) {
  return (
    <div className='courseCardContainer'>
      <div className='courseCardHeader'>
        {imageUrl && <img width={50} src={imageUrl} alt={`Imagem curso ${name}`} />}
        <h3>{name}</h3>
      </div>

      <div className='courseCardDuration'>
        <img src={clockImg} alt='Ícone de relógio' />
        <p>{duration}h</p>
      </div>
      <a href="http://localhost:5173/course/1">
        <Button variant={BUTTON_VARIANT.SECONDARY_OUTLINED} onClick={() => console.log('aa')}>
          Ver detalhes
        </Button>
      </a>
    </div>
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
