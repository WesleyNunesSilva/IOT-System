import styled from "styled-components";

export const Container = styled.div `
    display: ${props => props.showInput ? "flex" : "none"};
    
    width: 40%;
    gap: 1.5rem;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 20px;
    
    > input {
        background-color: transparent;
        width: 100%;

        padding: 1.2rem 1rem;

        ::placeholder {
            color: #fff;
        }

    }
    
    > svg {
        margin-left: 1.6rem;

    }   
`