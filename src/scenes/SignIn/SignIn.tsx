import React, {FC, useRef} from 'react';

import {Formik} from 'formik';
import * as Yup from 'yup';
import {Text} from 'react-native';

import {Button, Input} from '../../components';

import Texts from '../../utils/texts';
import Colors from '../../utils/theme/colors';

import {
  Container,
  Header,
  IconLogo,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from './styles';

interface SignInProps {
  handleFruitsList: () => void;
}

export const SignIn: FC<SignInProps> = ({handleFruitsList}) => {
  const user = useRef(null);
  const password = useRef(null);

  const FormSchema = Yup.object().shape({
    user: Yup.string().email().required('Campo obrigatório'),
    password: Yup.string()
      .required('Campo obrigatório')
      .min(8, 'Digite pelo menos 8 caracteres'),
  });

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <IconLogo />
        </TitleWrapper>

        <Title>{Texts.TITLELOGIN}</Title>
        <SignInTitle>{Texts.SUBTITLELOGIN}</SignInTitle>
      </Header>

      <Footer>
        <Formik
          initialValues={{
            user: '',
            password: '',
          }}
          onSubmit={values => {
            handleFruitsList();
          }}
          validationSchema={FormSchema}>
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            setFieldTouched,
          }) => (
            <FooterWrapper>
              <Text>Usuário</Text>
              <Input
                ref={user}
                placeholder="teste@teste.com"
                type="large"
                value={values.user}
                onChangeText={handleChange('user')}
                onBlur={() => setFieldTouched('user', true)}
              />
              {errors.user && touched.user && <Text>{errors.user}</Text>}
              <Text>Senha</Text>
              <Input
                ref={password}
                placeholder="12345678"
                type="large"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password', true)}
              />
              {errors.password && touched.password && (
                <Text>{errors.password}</Text>
              )}
              <Button
                title="Entrar"
                type="large"
                color={Colors.success}
                onPress={handleSubmit}
              />
            </FooterWrapper>
          )}
        </Formik>
      </Footer>
    </Container>
  );
};

export default SignIn;
