import { Container, ContentModal, NewDevice} from './styles.js'
import { FiPlus, FiX, FiArrowLeft } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useClient } from '../../hooks/clients'

export function Modal({handleCloseModal, user}) {

  const [newDevices, setNewDevices] = useState(false)

  const { registerDevice } = useClient()
  const { handleClient } = useClient()
  const { clientId } = useClient()
  const { machineList } = useClient()
 
  const [device, setDevice] = useState({
      data:{
        type: "devices",
        attributes: {  
          name:'',
          client_email: '',
          ip: '',
        }
      }
    });

    function handleRegisterDevice(event) {
      event.preventDefault();   
      registerDevice(device)
      handleCloseModal()
    }

  function handleNewDevice() {
      setNewDevices(!newDevices)      
  }

    const handleChangeName = (event) => {
      setDevice({
        ...device,
        data: {
          ...device.data,
          attributes: {
            ...device.data.attributes, 
            name: event.target.value 
          }
        }
      });
    };
      
  const handleChangeEmail = (event) => {
    setDevice({
      ...device,
      data: {
        ...device.data,
        attributes: {
          ...device.data.attributes, 
          client_email: event.target.value 
        }
      }
    });
  };
    
  const handleChangeIp = (event) => {
    setDevice({
      ...device,
      data: {
        ...device.data,
        attributes: {
          ...device.data.attributes, 
              ip: event.target.value 
        }
      }
    });
  };

  useEffect(() => {

    handleClient(user)

  },[clientId])

  return(
    <>
      <Container>
        {
          newDevices ?

            <NewDevice>
              <div className='back-to-device-list'>
                <button onClick={handleNewDevice}><FiArrowLeft size={20} /></button>
                <button onClick={handleCloseModal}> <FiX size={20}/></button>
              </div>
                    
              <div className='inputs-register-device'>
                <div>
                  <label htmlFor="device-name">Nome do Equipamento:</label>
                  <input 
                    type="text" 
                    id='device-name' 
                    onClick={handleChangeName}
                  />
                </div>

                <div>
                  <label htmlFor="device-ip">IP do equipamento:</label>
                  <input 
                    type="text" 
                    id='device-ip'
                    onClick={handleChangeIp}
                  />
                </div>

                <div>
                  <label htmlFor="email">Email do cliente:</label>
                  <input 
                    type="text" 
                    id='email'
                    onClick={handleChangeEmail}
                  />
                </div>
              </div>

              <div className='register-device'>
                <button 
                  onClick={handleRegisterDevice}
                  type='submit'  
                > 
                  <FiPlus size={20}/>
                  Cadastrar
                </button>
              </div>

            </NewDevice>

          :

            <ContentModal>
              <div className='close-modal'>
                <h2>{user.attributes.username}</h2>
                <button onClick={handleCloseModal} > 
                  <FiX size={20}/>
                </button>                     
              </div>

              <div className='main-content'>
                <div className='device-list'>
                  <div>
                      Equipamentos:
                  </div>
                  <ul>
                    {
                      machineList.map((item)=> (    
                        <Link to={`/dashboard/${clientId}`}>
                          <li key={clientId} className='machine'>
                            {item.attributes.name}
                          </li>
                        </Link>                               
                        
                      ))
                    }
                  </ul>
                </div>

                <div className='register-device'>
                  <button onClick={handleNewDevice}>
                    <FiPlus size={20}/>
                    Cadastrar
                  </button>
                </div>
              </div>

            </ContentModal>
        }      

      </Container>
    </>
  )   
}   