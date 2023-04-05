import * as Yup from 'yup';

const validations = Yup.object().shape({
  username: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
  // estado: Yup.string().required('O estado é obrigatório'),
  // cidade: Yup.string().required('A cidade é obrigatória'),
  // celular: Yup.string().required('O celular é obrigatório'),
  password: Yup.string().min(6).required('A senha é obrigatória'),
});

export default validations;