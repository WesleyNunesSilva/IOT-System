import { Container, Logout} from "./styles"

import { IoNotifications } from 'react-icons/io5'
import { RiShutDownLine } from "react-icons/ri";
import { FaSearch } from 'react-icons/fa'

import { Input } from "../input"
import { Link } from "react-router-dom";

import { useAuth } from '../../hooks/auth'

export function Header ({showInput, setSearchPerson}) {

    const { singOut } = useAuth()

    return(
        <Container showInput={showInput}  >
           
           <div className="profile">          
                <Link to='/' className="profile-with-img">
                    <div className="">
                       
                        <div className="username">
                            <span>Bem-vindo.</span>
                            <strong>Wesley Nunes</strong>                        
                        </div>
                     </div>
                </Link>
                

                <button>
                    <IoNotifications size={25}/>
                    Notificações
                </button>
           </div>

           <Input
              showInput={showInput}
              icon = {FaSearch}               
              type="text" 
              placeholder="Pesquisar cliente"
              onChange={(e) => setSearchPerson(e.target.value)} 
            />

            <Logout>
                <Link to='/' onClick={singOut}>
                    <RiShutDownLine size={36} />
                </Link>
            </Logout>
        </Container>
    )
}