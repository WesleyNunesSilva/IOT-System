import styled from "styled-components";

const normal = "#078493"
const low = "#DB0000"

export const Container = styled.div`
    height: 100vh;

    .select-user { 
        padding: 2.5rem 8rem 0; 

        display: flex;
        align-items: center;
       
       > svg {
            position: absolute;
            z-index: 1;
            margin-left: 1.2rem;
            fill: #fff;
            border: 1px solid #fff;
            border-radius: 50%;
            padding: 2px;
            pointer-events: none;       
       }        
        > select {
            font-size: 1.6rem;

            background-color: ${({theme}) => theme.colors.bg_blue_600};
            position: relative;
            color: #fff;
            padding: 1.4rem 5rem 1.4rem 5.5rem;
            
            border-radius: 0px 29.5px;
            box-shadow: 12px 13px 15px rgba(0, 0, 0, 0.25);
            appearance: none;

            :focus {
                opacity: 0.85;
                outline: none;
            }
        }
    }

`
export const Main = styled.main`
    padding: 2.5rem 6rem;
    display: flex;
`
export const Aside = styled.aside `
    background: linear-gradient(180deg, #FF7600 0%, #2E2C2C 100%);
    border-radius: 10px 40px;

    font-family: "Inter",  'sans-serif';

    padding: 8rem 7rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    gap: 5rem;
 
`
export const ContentElement = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff;
    padding: 3rem 3rem;
    border-radius: 20px;
    gap: 2rem;

    .measure {
        color: ${props => props.low ? low : normal};
  
        width: 20rem;
        font-size: 1.2rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .progressbar {
        height: 6px ;
        width: 100%;
        background-color: gray;

        border-radius: 16px;

        > div {
            height: 6px;
            background-color: orange;
            border-radius: 16px;
        }
    }    
`

export const Element = styled.div`

    margin-top: -60px;
    
    background-color: ${props => props.low ? low : normal};
    border-radius: 10px;
    position: relative;

    .cht {
        padding: 1.7rem 1rem;
    }

    > h3 {
        color: #fff;
        border-radius: 10px;
        padding: 1rem;
        font-weight: 400;
        font-size: 3rem;
    }
            
    > span {
        display: ${props => props.low ? "flex" : "none"};
            
        align-items: center;

        position: absolute;
        right: 0;
        top: 0;

        margin-top: -6px;
        margin-right: -4px;

        background-color: #fff;
        border-radius: 50%;
        padding: 2px;

        > svg {
                    
            fill: ${({theme})=> theme.colors.bg_red_600};
        }

    }

`