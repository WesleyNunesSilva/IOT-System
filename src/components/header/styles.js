import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 1rem 8rem;
    color: #fff;
    font-family: 'Inter', 'sans-serif';

    background-color: ${({theme}) => theme.colors.bg_blue_600};

    > .profile {
        display: flex;
        gap: 3rem;
        align-items: center;
               
        > button {
            border-radius: 20px;
            padding: 8px 12px;
            color: #fff;
            background-color: ${({theme}) => theme.colors.bg_red_800};
    
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }

    .profile-with-img {
        :hover {
            filter: none;
        }
        
        > div {
            display: flex;
            align-items: center;
            gap: 1rem;

            padding: 1.4rem;

            border: 1px solid #fff;
            border-radius: 10px;

            >img {
                height: 6rem;
                border-radius: 50%;
            }
    
            > .username {
                display: flex;
                flex-direction: column;  
                gap: 5px;
    
                > span {
                    font-size: 1.3rem;
                    color: #f3f3f3;
                }
                
                > strong {
                    color: #fff;
                }
            }
        }
    }
`
export const Logout = styled.div `
    border: 0;
    background: 0;
    
    > a svg {
        color: #fff;
    }
`
