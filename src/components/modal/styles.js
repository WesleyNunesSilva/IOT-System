import styled from "styled-components";

export const Container = styled.div`

    font-family: 'Poppins', 'sans-serif';

    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0px;
    z-index: 1;

    background-color: rgba(0, 0, 0, 0.5);  
    .register-device {
        margin-top: 2rem;
        display: flex;
        justify-content: end;
        
        > button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: ${({theme}) => theme.colors.orange_600};

            color: #fff;

            padding: 0.8rem;
            border-radius: 8px;

        }
    } 
`
export const ContentModal = styled.div`

    width: 40%;
    background-color: #fff;

    display: flex;  
    flex-direction: column;

    gap: 1.6rem;
    
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;

    > h2 {
        margin-left: 4rem;
        font-size: 2.2rem;
    }

    .close-modal {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        color: #fff;

        border: none;
        padding: 1rem;

        background: ${({theme}) => theme.colors.orange_600};
        > button {
            background: none;
            color: #fff;
            display: flex;
            align-items: center;
        }

    }

    .main-content {
        padding: 2rem;
    }

    .device-list {
        display: flex;
        align-items: center;
        flex-direction: column;
        > ul {
            display: flex;
            flex-direction: column;
            text-align: center;
            overflow-y: auto;

            width: 100%;
            gap: 1rem;
   
        }
    }

    .machine {
        color: #fff;
        padding: 0.5rem;
        list-style:none;
        background: ${({theme}) => theme.colors.orange_600};
        border-radius: 8px;
    }
`
export const NewDevice = styled.form`
    width: 30%;
    background-color: #fff;

    display: flex;  
    flex-direction: column;

    gap: 2rem;
    padding: 3rem;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;

    .back-to-device-list {
        display: flex;
        justify-content: space-between;
      
        border: none;
        > button {
            background: none;
        }
    }

    .inputs-register-device {
        
        display: flex;
        flex-wrap:wrap;

        flex-direction: column;

        gap: 1.5rem;
        > div {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            > input {
                border: 1px solid ;
                border-radius: 8px;
                padding: 0.8rem;
                width: 100%;
    
            }
        }
    }
`