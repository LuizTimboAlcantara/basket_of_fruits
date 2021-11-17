import React, {useState} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';

import {fruits} from '../../utils/fruits/fruits';

import {CardList, InputSearch, Header} from '../../components';

import {Container, CardDetailsList} from './styles';

export function FruitsList() {
  const navigation = useNavigation();
  const [data, setData] = useState(fruits);

  function handleSearch(item: string) {
    if (item !== '') {
      const dados = fruits.filter(element => element.name === item);

      setData(dados);
    } else {
      setData(fruits);
    }
  }

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
      <InputSearch onChangeText={handleSearch} />

      <CardDetailsList
        keyExtractor={item => item.key}
        data={data}
        renderItem={({item}) => (
          <CardList data={item} handleDetails={() => handleDatails(item)} />
        )}
        numColumns={2}
      />
    </Container>
  );
}
