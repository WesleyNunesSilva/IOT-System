import { Container} from "./styles";
import { Header } from '../../components/header'

import { FormRegister } from "../../components/form";

export function Register() {
    return(
        <Container>
            <Header />
            <FormRegister />
        </Container>
    )
}
