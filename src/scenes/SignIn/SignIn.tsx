import React, {FC} from 'react';
import {Text, TouchableWithoutFeedback, Keyboard} from 'react-native';

import {useFormikContext} from 'formik';

import {SingInForm} from './form';
import Texts from '../../utils/texts';
import Colors from '../../utils/theme/colors';
import {Button, Input} from '../../components';

import {
  Wrapper,
  Container,
  Header,
  IconLogo,
  TitleWrapper,
  TitleInputs,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from './styles';

export const SignIn: FC = () => {
  const {values, errors, setFieldTouched, handleChange, touched, handleSubmit} =
    useFormikContext<SingInForm>();

  return (
    <Wrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <TitleWrapper>
              <IconLogo />
            </TitleWrapper>
            <Title>{Texts.TITLELOGIN}</Title>
            <SignInTitle>{Texts.SUBTITLELOGIN}</SignInTitle>
          </Header>
          <Footer>
            <FooterWrapper>
              <TitleInputs>Usuário</TitleInputs>
              <Input
                placeholder="teste@teste.com"
                type="large"
                value={values.user}
                autoCapitalize="none"
                onChangeText={handleChange('user')}
                onBlur={() => setFieldTouched('user', true)}
              />
              {errors.user && touched.user && <Text>{errors.user}</Text>}
              <TitleInputs>Senha</TitleInputs>
              <Input
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
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </Wrapper>
  );
};

export default SignIn;
