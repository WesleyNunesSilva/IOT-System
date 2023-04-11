import styled from "styled-components"

export const Form = styled.form`
    margin: auto;

    padding: 2rem 8rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    width: 60%;

    >div {
        margin-top: 2rem;
    }

    
    .input-register {
        border: 1px solid #3838388A;
        border-radius: 8px;
        padding-left: 1rem;
    }

    .content-input {
        > div {
            width: 100%;
        }
    }

    .content-state {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
       
    }

    .add-client {
        display: flex;
        justify-content: center;

        color: #fff;
        background: linear-gradient(89.46deg, #FF7600 14.24%, #FF5C00 82.71%);

        padding: 0.5rem 3rem;

        border-radius: 8px;

        font-size: 1.6rem;
    } 
    
    > div {
        a {            
            max-width: 30%;
        }
    }
`

export const Input = styled.input`
    display: flex; 
    width: 100%;

    padding: 1rem;
`