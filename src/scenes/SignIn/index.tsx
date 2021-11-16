import React from 'react';
import {Image} from 'react-native';

import LogoPng from '../../assets/img/logo.png';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from './styles';

export function SignIn() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Image
            source={LogoPng}
            style={{height: 110, width: 110}}
            resizeMode="contain"
          />
        </TitleWrapper>

        <Title>Todo dia {'\n'} é dia de feira</Title>
        <SignInTitle>
          Selecionamos as melhoras {'\n'}
          frutas para você
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper></FooterWrapper>
      </Footer>
    </Container>
  );
}
