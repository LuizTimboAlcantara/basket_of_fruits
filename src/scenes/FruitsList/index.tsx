import React from 'react';
import {FlatList} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';

import {fruits} from '../../utils/fruits/fruits';

import {CardList, InputSearch, Header} from '../../components';

import {Container} from './styles';

export function FruitsList() {
  const navigation = useNavigation();

  function handleDatails(item: FruitsProps) {
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
      <Header />
      <InputSearch onChangeText={() => {}} />

      <FlatList
        keyExtractor={item => item.key}
        data={fruits}
        renderItem={({item}) => (
          <CardList data={item} handleDetails={() => handleDatails(item)} />
        )}
        numColumns={2}
      />
    </Container>
  );
}
