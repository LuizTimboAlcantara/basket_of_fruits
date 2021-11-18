import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';

import {Container, IconBack} from './styles';

const Goback: FC = () => {
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
      <TouchableOpacity onPress={handleFruitsList}>
        <IconBack name="chevron-left" />
      </TouchableOpacity>
    </Container>
  );
};

export default Goback;
