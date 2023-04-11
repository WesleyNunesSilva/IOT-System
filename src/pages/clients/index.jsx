import axios from "axios";
import { useState, useEffect } from 'react'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { FaFilter } from "react-icons/fa";

import { Link } from "react-router-dom";

import { Container, Main } from "./styles";

import { Header } from "../../components/header";
import { Card } from '../../components/card'
import { HeaderTable } from "../../components/HeaderTable"; 

export function ClientsList () {

    const [data, setData] = useState([])
    const [searchPerson, setSearchPerson] = useState('')

    useEffect(() => {
      const fetchData = async () => {
  
        const user = await axios.get(`http://localhost:3000/users`)
        setData(user.data.data)
        
      }
      fetchData()
    },[])

      // search by name
    const lowerSearchPerson = searchPerson.toLowerCase()
    const filteredList = data.filter(
        (item) => 
        item.attributes.username.toLowerCase().includes(lowerSearchPerson)
    );

    return(
        <Container>
            <Header showInput setSearchPerson={setSearchPerson}/>
            <header>
                <h2>Clientes</h2>
                <div className="filters">
                    <button>
                        <FaFilter size={20}/>
                    </button>
                    <Link to='/register' className="add-client">
                        Adcionar cliente
                    </Link>
                </div>

            </header>

            <Main>
                <table className=''>
                    <HeaderTable/>
                    <tbody className='' >
                    {
                        filteredList.map((item) => (
                        <Card key={item.id}
                            user={item}
                            ID={item.id}                                                       
                        />                  
                        ))                                    
                    }       
                    </tbody> 
                </table>

                <div>      
                    <div  className='button-pagination'>
                        <div>
                            <IoIosArrowBack size={22}/>
                            <button>
                                1
                            </button>

                        </div>

                        <span>de</span>

                        <div>
                            <button >
                                10
                            </button> 
                            <IoIosArrowForward size={22}/>
                        </div>
                    </div>
                    
                </div>
                
            </Main>
        </Container>
    )
}

