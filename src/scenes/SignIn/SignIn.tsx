import React, {FC} from 'react';

import {Button, Input} from '../../components';
import {KeyboardAvoidingView} from 'react-native';

import Texts from '../../utils/texts';
import Colors from '../../utils/theme/colors';
import LogoPng from '../../assets/images/logo.png';

import {
  Container,
  Content,
  Header,
  TitleWrapper,
  Logo,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from './styles';

interface SignInProps {
  handleFruitsList: () => void;
}

export const SignIn: FC<SignInProps> = ({handleFruitsList}) => {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Logo source={LogoPng} resizeMode="contain" />
        </TitleWrapper>

        <Title>{Texts.TITLELOGIN}</Title>
        <SignInTitle>{Texts.SUBTITLELOGIN}</SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <Input placeholder="user" type="large" />
          <Input placeholder="senha" type="large" />
        </FooterWrapper>
        <Button
          title="Entrar"
          type="large"
          color={Colors.success}
          onPress={handleFruitsList}
        />
      </Footer>
    </Container>
  );
};

export default SignIn;
