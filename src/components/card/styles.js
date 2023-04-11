import styled from "styled-components";

export const Container = styled.tr `

    font-family: 'Poppins', 'sans-serif';

    border-bottom: 1px solid #1E1E1E4A;
    &:nth-child(even) {
        background-color: #fff1;
    }

    a {
        color: #000;
        :hover{
            filter: none;
        }
    }

    > td {
        padding: 1rem; 
        
        > a {
            flex: 1;
        }
    
    }

    .status {
        background-color: ${({theme}) => theme.colors.status_ok};

        display: flex;
        justify-content: center;
        
        width: 100%;
        border-radius: 10px;
        color: #fff;
        padding: 2px;
    }
`