import * as Yup from 'yup';

const validations = Yup.object().shape({
  attributes: Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
    phone: Yup.string().required('O numero de celular é obrigatório'),
    address: Yup.string().required('Endereço é obrigatorio')
  })
});

export default validations;