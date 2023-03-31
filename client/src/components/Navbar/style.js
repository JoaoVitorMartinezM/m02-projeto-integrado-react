import styled from 'styled-components'

export const NavbarContainer = styled.header`
  height: 98px;
  padding: 0 var(--spacing-7);
  background-color: var(--light-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1{
    font-size: 36px;
    line-height: 44px;
    color: var(--primary);
  }

`

export const NavbarLogoBox = styled.div`
  display: flex;
  gap: var(--spacing-4);
`
