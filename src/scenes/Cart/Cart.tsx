import React, {FC} from 'react';
import {FlatList} from 'react-native';

import {CardListRemove, CardList} from '../../components';

import {Container} from './styles';

interface CartProps {
  data: FruitsProps;
  handleRemove: (fruit: string) => Promise<void>;
}

export const Cart: FC<CartProps> = ({data, handleRemove}) => {
  return (
    <Container>
      <FlatList
        keyExtractor={item => item.key}
        data={data}
        renderItem={({item}) => <CardListRemove data={item} />}
      />
    </Container>
  );
};

export default Cart;
