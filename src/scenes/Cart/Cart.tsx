import React, {FC} from 'react';
import {FlatList} from 'react-native';

import {CardListRemove, Button} from '../../components';

import Colors from '../../utils/theme/colors';
import {Container, Footer} from './styles';

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

      <Footer>
        <Button
          title="Gerar comprovate"
          color={Colors.secondary}
          type="large"
        />
      </Footer>
    </Container>
  );
};

export default Cart;
