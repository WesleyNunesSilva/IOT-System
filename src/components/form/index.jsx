import axios from "axios";

import { useState } from "react";
import { Form, Input} from './styles'

import validations from "./validation";

import { useNavigate } from "react-router-dom";

export function FormRegister() {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    data:{
      type: "clients",
      attributes: {  
        name:'',
        email: '',
        phone: '',
        address: '',
      }
    }
  });

  const handleChangename = (event) => {
    setUser({
      ...user,
      data: {
        ...user.data,
        attributes: {
          ...user.data.attributes, 
          name: event.target.value 
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

const handleChangeAddress = (event) => {
  setUser({
    ...user,
    data: {
      ...user.data,
      attributes: {
        ...user.data.attributes, 
        address: event.target.value 
      }
    }
  });
};

const handleChangePhone = (event) => {
  setUser({
    ...user,
    data: {
      ...user.data,
      attributes: {
        ...user.data.attributes, 
        phone: event.target.value 
      }
    }
  });
};

async function handleUserRegister(event) {
  event.preventDefault();
  try {   

      await validations.validate(user.data);
      const response = await axios.post("http://localhost:3000/clients/register", user, {
          headers: { 'Content-Type': 'application/vnd.api+json' }
      })
      console.log(response)
      axios.defaults.headers.post["Content-Type"] = 'application/vnd.api+json'

      alert('Cliente cadastrado com sucesso')
      navigate('/')
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

  return (
    <Form >
      <h2>Adicionar novo cliente</h2>

      <div className="name content-input">
        <label htmlFor="name">Nome do cliente</label>
        <Input 
          type='text'
          className='input-register'
          id='name'
          onChange={handleChangename}
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

      <div className="adress content-input">
        <label htmlFor="adress">Endereço</label>
          <Input 
            type='text'
            className='input-register'
            id='adress'
            onChange={handleChangeAddress}
          />
      </div>

      <div className="cel content-input">
        <label htmlFor="cel">Celular</label>
          <Input 
            type='number'
            className='input-register'
            id='cel'
            onChange={handleChangePhone}
          />
      </div>

      <div>
          <button
            type="submit" 
            className="add-client"
            onClick={handleUserRegister}
          >
            Adicionar
          </button>
      </div>
    </Form>
    
  )

}

        


