import React from 'react';
import {Image} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

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
  const navigation = useNavigation();

  function handleFruitsList() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'FruitsList',
      }),
    );
  }

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
          frutas para você!
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <Input placeholder="User" />
          <Input placeholder="senha" />
        </FooterWrapper>
        <Button title="Entrar" onPress={handleFruitsList} />
      </Footer>
    </Container>
  );
}
