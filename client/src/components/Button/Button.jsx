import PropTypes from 'prop-types'
import React from 'react'
import { BUTTON_VARIANT } from './ButtonVariant'
import { ButtonStyled } from './style'

function Button ({ children, variant = BUTTON_VARIANT.PRIMARY, ...props }) {
  return (
    <ButtonStyled variant={variant} {...props}>
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    BUTTON_VARIANT.PRIMARY,
    BUTTON_VARIANT.PRIMARY_LINK,
    BUTTON_VARIANT.PRIMARY_OUTLINED,
    BUTTON_VARIANT.SECONDARY,
    BUTTON_VARIANT.SECONDARY_LINK,
    BUTTON_VARIANT.SECONDARY_OUTLINED
  ])
}

export default Button
