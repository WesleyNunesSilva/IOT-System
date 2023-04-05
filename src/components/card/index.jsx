import { FaRegAddressCard } from "react-icons/fa";
import { Container } from "./styles";

export function Card({person, ID, ...rest}) {

    const fullName = `${person.attributes.username}` 

    return(
        <Container  {...rest}>
            <td className=''>
                <span >
                    {fullName}                       
                </span>
            </td>

            <td className=''>
                <span>Magnetom skyra</span>
            </td>

            <td >
                <span className='status'>ATENÇÃO</span>
            </td>     

            <td className=''>
                <span>Balneário Camburiú - SC</span>
            </td>       

            <td className=''>
                <span>{person.id}</span>
                
            </td>  
        </Container>
            
    )
}
