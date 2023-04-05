import * as Yup from 'yup';

const validations = Yup.object().shape({
    attributes: Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required("A senha é obrigatoria, e deve conter, no minimo, 6 caracteres"),
    })
});

export default validations