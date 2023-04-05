import { useState } from "react";
import { Form, Input} from './styles'
import validations from "./validation";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export function FormRegister() {

  const navigate = useNavigate()

    const [data, setData] = useState({
            type: "users",
            attributes: {
              username: '',
              email: '',
              password: '',
            }
        });
        // username: '',
        // email: '',
        // estado: '',
        // cidade: '',
        // celular: '',
        // password: ''

        const handleChangeNome = (event) => {
            setData({
              ...data,
              attributes: {
                ...data.attributes,
                username: event.target.value
              }
            });
          };
    
      const handleChangeEmail = (event) => {
        setData({ 
             ...data,
             attributes:{
                ...data.attributes, 
                email: event.target.value 
            }
        });
      };
    
      /*const handleChangeEstado = (event) => {
        setData({ ...data, estado: event.target.value });
      };
    
      /*const handleChangeCidade = (event) => {
        setData({ ...data, cidade: event.target.value });
      };
    
      const handleChangeCelular = (event) => {
        setData({ ...data, celular: event.target.value });
      };*/
    
      const handleChangePassword = (event) => {
        setData({
          ...data,
          attributes: {
            ...data.attributes,
            password: event.target.value
          }
        });
      };
      const handleSubmit = async (event) => {
          event.preventDefault();
          try {
            
            
            await validations.validate(data.attributes);
            const response = await axios.post("http://localhost:3000/users/register", {data: data}, {
            headers: { 'Content-Type': 'application/vnd.api+json' }
            })
            navigate('/clientList')
            alert('Cliente cadastrado com sucesso')
        } catch (error) {
            alert('Ocorreu um erro ao enviar os dados. Por favor, tente novamente.')
        }
      };
      
    return(
        <Form onSubmit={handleSubmit}>
            <h2>Adicionar novo cliente</h2>

            <div className="name content-input">
                <label htmlFor="name">Nome do cliente</label>
                <Input 
                    type='text'
                    className='input-register'
                    id='name'
                    value={data.username} onChange={handleChangeNome}
                />
            </div>

            <div className="email content-input">
                <label htmlFor="email">Email</label>
                <Input 
                type='email'
                className='input-register'
                id='email'
                value={data.email} onChange={handleChangeEmail}                       
                />
            </div>

            {/* <div className="content-state " >
                <div className="state content-input">
                    <label htmlFor="state">Estado</label>
                    <Input 
                      type='text'
                      className='input-register'
                      id='state'
                      value={data.estado} onChange={handleChangeEstado}                         
                    />
                </div>
                    

                <div className="city content-input">
                    <label htmlFor="city">Cidade</label>
                    <Input 
                        type='text'
                        className='input-register'
                        id='city' 
                        value={data.cidade} onChange={handleChangeCidade}                    
                    />
                </div>

                <div className="cel content-input">
                    <label htmlFor="cel">Celular</label>
                    <Input
                        type='number' 
                        className='input-register'
                        id='cel'
                        value={data.celular} onChange={handleChangeCelular}                           
                    />
                </div>
            </div> */}


            <div className="password content-input">
                <label htmlFor="password">password</label>
                <Input 
                    type='password'
                    className='input-register'
                    id='password'
                    value={data.password} onChange={handleChangePassword}
                />
            </div>

            <div>
                <button  type="submit" className="add-client">Adicionar</button>
            </div>
        </Form>
    )
}
