import { useContext, createContext, useState} from "react";
import validations from "../pages/singIn/validation";
import axios from "axios";

export const AuthContext = createContext({})

function AuthProvider ({children}) {
    const [data, setData] = useState('')

    async function singIn (user) {
        try {   
            await validations.validate(user.data);                 
            const response = await axios.post(`http://localhost:3000/users/login`, user, {
                headers: {'Content-Type': 'application/vnd.api+json',}
            })
            const {access_token} = response.data.data.attributes
            
            setData({user ,access_token})

            axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
            axios.defaults.headers.post["Content-Type"] = 'application/vnd.api+json'
            console.log(response)
            
        
        } catch (error) {
            if(error.response) {
                console.log(user)
                alert(error.response.data.errors[0].detail)

          } else {
            alert('Não foi possivel entrar')
            console.log(error.message)
            console.log(error)
          }
        }
      }
      console.log(data)

    return(
        <AuthContext.Provider value={{ singIn, user:data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }