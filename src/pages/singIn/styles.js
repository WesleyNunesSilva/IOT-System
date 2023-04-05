import styled from "styled-components";

import backgroundImg from '../../assets/backgroundImg.png'

export const Container = styled.div`
    height: 100vh;

    background-color: ${({theme}) => theme.colors.orange_600};

    display: flex;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
`

export const Form = styled.form `
    padding: 0 13.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;

    z-index: 1;   
    
    > img {
        width: 33rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        width: 100%;
        
        gap: 4px;
        color: #fff;
        > input {
            padding: 1.1rem;
            border-radius: 8px;
            box-shadow: 6px 9px 13px 0px rgba(0,0,0,0.54);
            ::placeholder {
                font-size: 1.6rem;
            }
        }
    }

    >span{
        margin-top: 3rem;
        color: #fff;

        > a {
            font-size: 1.2rem;
            color: blue;
            margin-left: 1rem;
        }
    }

    > button {
        display: flex;
        justify-content: center;
        
        width: 100%;

        font-size: 1.8rem;
        padding: 1rem;

        border: none;
        border-radius: 8px;

        color: #fff;
        background-color: ${({theme}) => theme.colors.bg_blue_600};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        inset 0px 7px 22px 16px rgba(0, 0, 0, 0.25);
    }
`
export const Background = styled.div`

    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    position: absolute;
    
    width: 100%;
    height: 100%;
    opacity: 0.55;
`