import React, {useContext, useEffect} from 'react';
import {FlatList} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import FruitsContext from '../../contexts/cart';
import {Header} from '../../components/Header';

import {fruits} from '../../utils/fruits/fruits';

import {CardList, InputSearch} from '../../components';

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

  useEffect(() => {
    async function teste() {
      await getFruits();
    }
    const t = teste();

    console.log(t);
  }, []);

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
