import React, {FC} from 'react';

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
