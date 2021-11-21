import * as Yup from 'yup';

export type SingInForm = {user: string; password: string};

export const FormSchema = Yup.object().shape({
  user: Yup.string().email().required('Campo obrigatório'),
  password: Yup.string()
    .required('Campo obrigatório')
    .min(8, 'Digite pelo menos 8 caracteres'),
});

export const initialValues: SingInForm = {
  user: '',
  password: '',
};

export const auth: SingInForm = {user: 'user@gmail.com', password: '@12345678'};
