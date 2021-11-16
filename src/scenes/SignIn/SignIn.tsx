import React, {FC} from 'react';

import {Button, Input} from '../../components';

import Texts from '../../utils/texts';
import LogoPng from '../../assets/images/logo.png';

import {
  Container,
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
          <Input placeholder="user" />
          <Input placeholder="senha" />
        </FooterWrapper>
        <Button title="Entrar" onPress={handleFruitsList} />
      </Footer>
    </Container>
  );
};

export default SignIn;
