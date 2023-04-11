import { Container } from './styles'

export function HeaderTable() {

    return (       
      <Container  className=''>
        <tr >
          <th className=''>
            <span className=''>
              Nome
            </span>                       
          </th> 
      
          <th>
            <span>Contato</span>
          </th>

          <th>
            <span>Local</span>
          </th>

          <th className=''>
            <span className=''>
              Email
            </span>
          </th>

          <th className='status'>
            <span>Status</span>
          </th>
        </tr>
      </Container>   

    )
}
