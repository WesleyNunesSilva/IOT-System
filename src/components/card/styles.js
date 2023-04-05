import styled from "styled-components";

export const Container = styled.tr `

    font-family: 'Poppins', 'sans-serif';

    border-bottom: 1px solid #1E1E1E4A;
    &:nth-child(even) {
        background-color: #fff1;
    }
    
    > td {
        
        padding: 1rem;
        
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