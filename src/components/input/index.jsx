import { Container } from './styles'

export function Input({ icon: Icon, showInput, ...rest }) {
    return(
        <Container showInput={showInput} >
            {Icon && <Icon size={20}/>}

            <input  {...rest} />
        </Container>
    )
}