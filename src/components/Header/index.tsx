import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';

import Quantity from '../Quantity';

import {Container, IconCart, IconExit} from './styles';

const Header: FC = () => {
  const navigation = useNavigation();

  function handleFruitsList() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Cart',
      }),
    );
  }

  function handleLogin() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'SignIn',
      }),
    );
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleFruitsList}>
        <Quantity />
        <IconCart name="shopping-cart" />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin}>
        <IconExit name="logout" />
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
