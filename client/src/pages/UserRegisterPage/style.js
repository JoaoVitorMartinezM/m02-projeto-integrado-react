import styled from 'styled-components'

export const UserRegisterContainer = styled.form`
    width: 30%;
    height: 300px !important;

    background-color: white;
    background: ${({ theme }) => console.log(theme.colors.darkGray)};

    display: flex;
    /* flex-grow: 1; */
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;

    border-radius: 20px;
    padding: 50px;

    div{
        /* display: flex; */
        width: 100%;
        flex: 1;
        gap: 10px;
        justify-content: space-between;

        button{
            width: 100px;
            height: 40px;
            align-self: flex-end;
        }
    }
`
