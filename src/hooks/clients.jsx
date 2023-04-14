import axios from "axios";
import { useContext, createContext, useState, useEffect} from "react";

export const ClientContext = createContext({})

function ClientProvider ({children}) {

    const [data, setData] = useState({})

    const [ user, setUser] = useState({})
    const [ machineList, setMachineList ] = useState([])
    const [ clientId, setClientId ] = useState()
    //const [ deviceId, setDeviceId ] = useState()
    const [ machineId, setMachineId ] = useState()

    async function handleUserRegister(user) { 
        try {   
            //await validations.validate(user.data);
            const response = await axios.post("http://localhost:3000/clients/register", user, {
                headers: { 'Content-Type': 'application/vnd.api+json' }
            })
            console.log(response)
            axios.defaults.headers.post["Content-Type"] = 'application/vnd.api+json'
      
            alert('Cliente cadastrado com sucesso')
            
        } catch (error) {
            if(error.response) {
              alert(error.response.data.errors[0].title)
                console.log(error.response)
                console.log(error.message)
      
                console.log(user)
            } else {
              alert('Ocorreu um erro ao enviar os dados. Por favor, tente novamente.')
      
              console.log(error)
              console.log(user)
            }
        }
      }

    async function registerDevice (device) {
        try {   
            //await validations.validate(user.data);                 
            const response = await axios.post(`http://localhost:3000/devices`, device, {
                headers: {'Content-Type': 'application/vnd.api+json'}
            })
        
            axios.defaults.headers.post["Content-Type"] = 'application/vnd.api+json'

            setData({response})
            alert('Equipamento cadastrado com sucesso')
            console.log(response)
            console.log(response.data)

        } catch (error) {
            if(error.response) {
                console.log(data)
                console.log(device)
                console.log(error.response)
                alert(error.response.data.errors[0].detail)
          } else {
            alert('Não foi possivel entrar')
            console.log(data)

            console.log(error)
          }
        }
    }

    async function handleClient(user) {
        setUser(user)
        try {
          const machine = await axios.get(`http://localhost:3000/clients/${clientId}/devices`)
          setMachineList(machine.data.data)
          
          
        } catch (error) {
          console.log(user)
          console.log(error)
        }
        setClientId(user.id)
      }

    // async function getAllMachines () {
    //     try {

    //         const response = await axios.get(`http://localhost:3000/clients/${clientId}/dashboard`)
    //         //setDeviceId(response.relationships.device.data.id)
    //         console.log(response)
    //         console.log(user)
    //         console.log(machineList)         
      
    //     } catch (error) {
    //         console.log(error)
    //         console.log(error.response)
    //     }       
    // }

    async function getClientDashboard (deviceId) {
        setMachineId(deviceId)
        try {
            const response = await axios.get(`http://localhost:3000/clients/${clientId}/devices/${deviceId}`)
            console.log(response)
            console.log(deviceId)
            
        } catch (error) {
            console.log(deviceId)
            console.log(error)
            console.log(error.response)
        }
    }

    async function machineData () {
        try {
            const response = await axios.get(`http://localhost:3000/devices/${machineId}/history`)
            console.log(response)
            
        } catch (error) {
            if(error.response) {
                console.log(data)
                console.log(device)
                console.log(error.response)
                alert(error.response.data.errors[0].detail)
          } else {
            alert('Não foi possivel entrar')
            console.log(data)

            console.log(error)
          }
        }
    }
    
    return(
        <ClientContext.Provider 
            value={{ 
              registerDevice, 
              handleClient,
              getClientDashboard,
              machineData,
              handleUserRegister,
              //device,
              user,
              clientId,
              machineList
              
            }}>
            {children}
        </ClientContext.Provider>
    )
}

function useClient() {
    const context = useContext(ClientContext)
    return context
}

export { ClientProvider, useClient }