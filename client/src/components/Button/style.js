
import styled from 'styled-components'

export const ButtonStyled = styled.button`
    
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
text-transform: uppercase;
padding: var(--spacing-3) var(--spacing-5);
border-radius: var(--border-radius-2);
transition: 0.3s;

&:primary {
    border: 1px solid var(--primary);
    border-radius: var(--border-radius-2);
    color: var(--white);
    background-color: var(--primary);
  }
  
&:primary:hover {
background-color: orange;
}

&:secondary {
border: 1px solid var(--secondary);
color: var(--white);
background-color: var(--secondary);
}

&:secondary:hover {
background-color: var(--secondary-outlined);
}

&:outlined-primary {
border: 1px solid var(--primary);
color: var(--primary);
background-color: transparent;
}

&:outlined-primary:hover {
background-color: var(--primary-outlined);
}

&:outlined-secondary {
border: 1px solid var(--secondary);
color: var(--secondary);
background-color: transparent;
}

&:outlined-secondary:hover {
background-color: var(--secondary-outlined);
}

&:link-primary {
border: none;
color: var(--primary);
background-color: transparent;
text-decoration: underline;
text-transform: none;
border: 1px solid transparent;
}

&:link-primary:hover {
border: 1px solid var(--primary);
background-color: var(--primary-outlined);
}

&:link-secondary {
border: none;
color: var(--secondary);
background-color: transparent;
text-decoration: underline;
text-transform: none;
border: 1px solid transparent;
}

&:link-secondary:hover {
border: 1px solid var(--secondary);
background-color: var(--secondary-outlined);
}

`
