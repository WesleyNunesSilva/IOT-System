import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Background, Container, Form } from './styles'

import Logo from '../../assets/Logo [Branco].svg'

export function SingIn () {

  const { singIn } = useAuth()

  const [user, setUser] = useState({
    data:{
      type: "users",
      attributes: {  
        email: '',
        password: '',
      }
    }
  });

  function handleSingIn(event) {
    event.preventDefault();   
    singIn(user)
  }

  const handleChangeEmail = (event) => {
    setUser({ 
      ...user,
      data: {
        ...user.data,
        attributes: {
          ...user.data.attributes, 
          email: event.target.value 
        }
      }
  });
  };
    
  const handleChangePassword = (event) => {
    setUser({
      ...user,
      data: {
        ...user.data,
        attributes: {
          ...user.data.attributes, 
          password: event.target.value 
        }
      }
    });
  };

  return (
    <Container>
      <Form >
        <img src={Logo} alt="Logo SUMedical branco" />

        <div>
          <label htmlFor="email">Email:</label>                   
          <input 
            id='email'
            type = 'email'
            onChange={handleChangeEmail}
                      
          />
        </div>         

        <div>
          <label htmlFor="password">Senha:</label>
          <input 
            id='password'
            type = 'password' 
            onChange={handleChangePassword}
          />
        </div>

        <button 
          type='submit' 
          onClick={handleSingIn} 
        >
          Entrar
        </button>
       
        <span>  
          Esqueceu a senha?
          <a >
            clique aqui
          </a>
        </span>
                
      </Form>
      <Background />
    </Container>
  )
}