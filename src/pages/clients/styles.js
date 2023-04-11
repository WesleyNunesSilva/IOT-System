import styled from "styled-components";

export const Container = styled.div`

    > header {
        font-family: 'Poppins', 'sans-serif';

        padding: 3rem 8rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > h2 {
            font-size: 3rem;
        }

        > div {
            display: flex;
            gap: 2rem;

            > button {
                display: flex;
                align-items: center;
                background-color: transparent;
            }

            .add-client {
                background: linear-gradient(180deg, #FF7600 0%, #FF5C00 100%);
                box-shadow: 9px 14px 26px rgba(0, 0, 0, 0.25);
                border-radius: 5px;

                font-size: 1.6rem;
                padding: 0.6rem 1rem;
                color: #fff;
            }
        }
    }
`
export const Main = styled.main `

    padding: 1.5rem 8rem;
     width: 100%;

    > table {
        border-collapse: collapse;
        width: 100%;
    }

    > div {
        padding: 2rem;
        display: flex;
        justify-content: center;       
    }

    .button-pagination {        
        background-color: transparent;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        > div{
            display: flex;
            align-items: center;
            >button {
                color: #fff;
                padding: 0.5rem 1rem;
                border-radius: 8px;
                background: linear-gradient(180deg, #F5821F 0%, #FF5C00 100%);               
            }

        }
    }
`