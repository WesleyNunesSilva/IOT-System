import { useState } from "react";
import { Container} from "./styles";

import { Modal } from "../modal/modal";

export function Card({user, ID, handleModal, ...rest}) {

    const [openOrCloseModal, setOpenOrCloseModal] = useState(false)

    function handleOpenModal() {
        setOpenOrCloseModal(true)
    }
    function handleCloseModal() {
        setOpenOrCloseModal(false)
    }
    
    return(      
        <>
        <Container onClick={handleOpenModal}>                      
            <td className=''>               
                <span>{user.attributes.username}</span>               
            </td>

            <td className=''>               
                <span>{user.attributes.phone}</span>              
            </td>

            <td>                      
                <span>{user.attributes.address}</span>                  
            </td>   

            <td className=''>              
                <span>{user.attributes.email}</span>               
            </td>                    

            <td className=''>                  
                <span className='status'>{ID}</span>                              
            </td>          
        </Container>  
            {
                openOrCloseModal ? 
                <Modal  
                handleCloseModal={handleCloseModal} 
                    user={user} 
                    ID={user.id}
                /> 
                : null 
            }              
        </>          
    )
}
