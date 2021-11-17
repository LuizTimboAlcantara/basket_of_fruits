import React from 'react';
import {TouchableOpacity} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';

import {Container, Icon} from './styles';

export function Header() {
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
        <Icon name="shopping-cart" />
      </TouchableOpacity>
    </Container>
  );
}
