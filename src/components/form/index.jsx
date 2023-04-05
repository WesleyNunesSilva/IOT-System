import { useState } from "react";
import { Form, Input} from './styles'

import { useAuth } from "../../hooks/auth";

//import { useNavigate } from "react-router-dom";

export function FormRegister() {

  const { userRegister } = useAuth()

  const [user, setUser] = useState({
    data:{
      type: "users",
      attributes: {  
        username:'',
        email: '',
        state:'',
        city:'',
        cel:'',
        password: '',
        device:'',
      }
    }
  });

  const handleChangeUsername = (event) => {
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

const handleChangeState = (event) => {
  setUser({
    ...user,
    data: {
      ...user.data,
      attributes: {
        ...user.data.attributes, 
        state: event.target.value 
      }
    }
  });
};

const handleChangeCity = (event) => {
  setUser({
    ...user,
    data: {
      ...user.data,
      attributes: {
        ...user.data.attributes, 
        city: event.target.value 
      }
    }
  });
};

const handleChangeCel = (event) => {
  setUser({
    ...user,
    data: {
      ...user.data,
      attributes: {
        ...user.data.attributes, 
        cel: event.target.value 
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

function handleRegister (event) {
  event.preventDefault();
  userRegister()
  
};

  return (
    <Form >
      <h2>Adicionar novo cliente</h2>

      <div className="name content-input">
        <label htmlFor="name">Nome do cliente</label>
        <Input 
          type='text'
          className='input-register'
          id='name'
          onChange={handleChangeUsername}
        />
      </div>

      <div className="email content-input">
        <label htmlFor="email">Email</label>
        <Input 
          type='email'
          className='input-register'
          id='email'
          onChange={handleChangeEmail}                       
        />
      </div>

      <div className="content-state " >
        
      <div className="state content-input">
        <label htmlFor="state">Estado</label>
          <Input 
            type='text'
            className='input-register'
            id='state'
            onChange={handleChangeState}                       
          />
      </div>
                
        <div className="city content-input">
          <label htmlFor="city">Cidade</label>
            <Input 
              type='text'
              className='input-register'
              id='city' 
              onChange={handleChangeCity}                    
            />
        </div>

        <div className="cel content-input">
          <label htmlFor="cel">Celular</label>
          <Input
            type='number' 
            className='input-register'
            id='cel'
            onChange={handleChangeCel}                           
          />
        </div>

      </div>

      <div className="password content-input">
        <label htmlFor="password">password</label>
          <Input 
            type='password'
            className='input-register'
            id='password'
            onChange={handleChangePassword}
          />
      </div>

        <div>
            <button
              type="submit" 
              className="add-client"
              onClick={handleRegister}
            >
                Adicionar
            </button>
        </div>
    </Form>
    
  )

}

        


