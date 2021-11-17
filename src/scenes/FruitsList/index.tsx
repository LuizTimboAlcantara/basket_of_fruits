import React, {useContext, useEffect} from 'react';
import {FlatList} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import FruitsContext from '../../contexts/cart';

import {fruits} from '../../utils/fruits/fruits';

import {CardList, InputSearch, Header} from '../../components';

import {Container} from './styles';

export function FruitsList() {
  const navigation = useNavigation();
  const {getFruits} = useContext(FruitsContext);

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
      <Header />
      <InputSearch />

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
