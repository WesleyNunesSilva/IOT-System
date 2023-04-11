import axios from "axios";
import { useContext, createContext, useState} from "react";

export const ClientContext = createContext({})

function ClientProvider ({children}) {

    const [data, setData] = useState({})

    const [ user, setUser] = useState({})
    const [ machineList, setMachineList ] = useState([])
    const [ clientId, setClientId ] = useState()
    const [ deviceId, setDeviceId ] = useState()

    async function registerDevice (device) {
        try {   
            //await validations.validate(user.data);                 
            const response = await axios.post(`http://localhost:3000/devices`, device, {
                headers: {'Content-Type': 'application/vnd.api+json'}
            })
        
            axios.defaults.headers.post["Content-Type"] = 'application/vnd.api+json'

            setData({response})

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

        try {
            const machine = await axios.get(`http://localhost:3000/clients/${clientId}/devices`)
    
            setMachineList(machine.data.data)
            setUser(user)

        } catch (error) {
            console.log(user)
            console.log(error)
        } 

        setClientId(user.relationships.client.data.id)
        
    }

    async function getDashboard () {
        try {

            const response = await axios.get(`http://localhost:3000/clients/${clientId}/dashboard`)
            //setDeviceId(response.relationships.device.data.id)
            console.log(response)
            console.log(user)
            console.log(machineList)         
      
        } catch (error) {
            console.log(error)
            console.log(error.response)
        } 
        
    }
    
    return(
        <ClientContext.Provider 
            value={{ 
              registerDevice, 
              handleClient,
              getDashboard,
              user,
              setDeviceId,
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