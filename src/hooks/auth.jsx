import { useContext, createContext, useState, useEffect} from "react";
import validations from "../pages/singIn/validation";
import axios from "axios";

export const AuthContext = createContext({})

function AuthProvider ({children}) {
    const [data, setData] = useState({})

    async function userRegister(user) {
        try {   
    
            //await validations.validate(user.data);
            const response = await axios.post("http://localhost:3000/users/register", user, {
                headers: { 'Content-Type': 'application/vnd.api+json' }
            })
            console.log(response)
            axios.defaults.headers.post["Content-Type"] = 'application/vnd.api+json'

            alert('Cliente cadastrado com sucesso')
          } catch (error) {
            if(error.response) {
                console.log(error.response)
                console.log(error.message)
                console.log(response)
                console.loge(error)
                console.log(user)
                alert(error.response.data.errors[0].title)

          } else {
              alert('Ocorreu um erro ao enviar os dados. Por favor, tente novamente.')
              console.log(response)
              console.loge(error)
              console.log(user)
          }
          }
    }


    async function singIn (user) {
        try {   
            await validations.validate(user.data);                 
            const response = await axios.post(`http://localhost:3000/users/login`, user, {
                headers: {'Content-Type': 'application/vnd.api+json'}
            })

            const {access_token} = response.data.data.attributes
            
            sessionStorage.setItem('@SUMedical-IOT:token', JSON.stringify(access_token))
            sessionStorage.setItem('@SUMedical-IOT:user', JSON.stringify(user.data))
            
            axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
            axios.defaults.headers.post["Content-Type"] = 'application/vnd.api+json'

            setData({user ,access_token})

        } catch (error) {
            if(error.response) {
                console.log(user)
                alert(error.response.data.errors[0].title)
          } else {
            alert('Não foi possivel entrar')
          }
        }
    }

    function singOut() {
        sessionStorage.removeItem('@SUMedical-IOT:token')
        sessionStorage.removeItem('@SUMedical-IOT:user')

        setData({})
    }

    useEffect(() => {
        const token = sessionStorage.getItem('@SUMedical-IOT:token')
        const user = sessionStorage.getItem('@SUMedical-IOT:user')

        if (token && user) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setData({token, user})
        }
    },[])

    return(
        <AuthContext.Provider 
            value={{ 
              singIn, 
              user:data.user,
              singOut,
              userRegister
            }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }