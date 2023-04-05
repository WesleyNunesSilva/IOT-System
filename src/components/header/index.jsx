import { Container, Logout} from "./styles"

import { IoNotifications } from 'react-icons/io5'
import { RiShutDownLine } from "react-icons/ri";
import { FaSearch } from 'react-icons/fa'

import { Input } from "../input"
import { Link } from "react-router-dom";

export function Header ({showInput, setSearchPerson}) {
    return(
        <Container showInput={showInput}  >
           
           <div className="profile">          

                <div className="profile-with-img">
                    <img src="https://github.com/wesleynunessilva.png" alt="" />

                    <div className="username">
                        <span>Bem-vindo.</span>
                        <strong>Wesley Nunes</strong>
                    </div>
                </div>

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
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}