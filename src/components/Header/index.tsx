import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';

import Quantity from '../Quantity';

import {Container, Icon} from './styles';

const Header: FC = () => {
  const navigation = useNavigation();

  function handleFruitsList() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Cart',
      }),
    );
  }
  return (
    <Container>
      <TouchableOpacity onPress={handleFruitsList}>
        <Quantity />
        <Icon name="shopping-cart" />
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
