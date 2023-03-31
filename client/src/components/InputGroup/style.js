import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  flex: 1;

`
export const Label = styled.label`

  color: var(--primary);
  font-weight: var(--font-bold);
  font-size: 12px;
`

export const Input = styled.input`
  border: 1px solid var(--dark-gray);
  background-color: var(--white);
  border-radius: var(--border-radius-1);
  padding: var(--spacing-3);
  color: var(--dark-gray);

  &:focus{
    border: 1px solid var(--primary);
  }

  &:focus-visible{
    border: 1px solid var(--primary);
    outline-color: var(--primary);
    outline-width: thin;
    outline-style: solid;
  }

  &::placeholder{
    font-weight: var(--font-weight-regular);
    font-size: 12px;
    color: var(--secondary);
  }
`

export const Span = styled.span`
    color: var(--secondary);
  font-size: 10px;
  font-weight: var(--font-weight-bold);
  font-style: italic;
  `
