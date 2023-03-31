import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { Container, Input, Label, Span } from './style'

const InputGroup = forwardRef(({ labelText, helperText, ...props }, ref) => {
  return (
    <Container>
      {labelText && (
        <Label htmlFor='input'>
          {labelText}
        </Label>
      )}

      <Input id='input' ref={ref} {...props} />

      {!!helperText && <Span>{helperText}</Span>}
    </Container>
  )
})

InputGroup.propTypes = {
  labelText: PropTypes.string,
  helperText: PropTypes.string
}

InputGroup.displayName = 'InputGroup'

export default InputGroup
