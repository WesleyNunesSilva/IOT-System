import { useState, useEffect } from 'react'

import {BsSortAlphaDown, BsSortAlphaUp} from 'react-icons/bs'
import { Container } from './styles'

export function HeaderTable({data, setData}) {

  const [sortedListName, setSortedListName] = useState([])
  const [iconSortName, setIconSortName] = useState(false)

  // useEffect(() => {
  //   setSortedListName([...data].sort((a, b) => a.username.localeCompare(b.username)));
    
  // },[data])

  const handleSortName = () => {
    setIconSortName(!iconSortName)
    setData(iconSortName ? sortedListName.reverse() : [...sortedListName])
  }

    return (       
      <Container  className=''>
        <tr >
          <th className=''>
            <span className=''>
              Nome
            </span>                       
          </th>

          <th className=''>
            <span className=''>
              Equipamento
            </span>
          </th>

          <th className='status'>
            <span>Status</span>
          </th>

          <th>
            <span>Local</span>
          </th>
          
          <th>
            <span>Contato</span>
          </th>
        </tr>
      </Container>   

    )
}
