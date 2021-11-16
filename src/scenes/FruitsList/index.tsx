import React from 'react';
import {FlatList} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';

import {fruits} from '../../utils/fruits/fruits';

import {InputSearch} from '../../components/InputSearch';
import {CardList} from '../../components/CardList';

import {Container} from './styles';

export function FruitsList() {
  const navigation = useNavigation();

  function handleDatails(item) {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Buy',
        params: {
          data: item,
        },
      }),
    );
  }

  return (
    <Container>
      <InputSearch />

      <FlatList
        keyExtractor={item => String(item.key)}
        data={fruits}
        renderItem={({item}) => (
          <CardList data={item} handleDetails={() => handleDatails(item)} />
        )}
      />
    </Container>
  );
}
