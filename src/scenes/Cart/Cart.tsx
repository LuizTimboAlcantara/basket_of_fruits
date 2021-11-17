import React, {FC} from 'react';

import {CardListRemove, Button} from '../../components';

import Colors from '../../utils/theme/colors';
import {Container, Title, CardDetailsList, Footer} from './styles';

interface CartProps {
  data: FruitsProps;
  handleRemove: (fruit: string) => Promise<void>;
  onShare: () => Promise<void>;
}

export const Cart: FC<CartProps> = ({data, handleRemove, onShare}) => {
  return (
    <Container>
      <Title>Minha Lista</Title>
      <CardDetailsList
        keyExtractor={item => item.key}
        data={data}
        renderItem={({item}) => (
          <CardListRemove data={item} handleRemove={() => handleRemove(item)} />
        )}
      />

      <Footer>
        <Button
          title="Gerar comprovate"
          color={Colors.secondary}
          type="large"
          onPress={onShare}
        />
      </Footer>
    </Container>
  );
};

export default Cart;
