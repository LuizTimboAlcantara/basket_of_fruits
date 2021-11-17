import React, {FC} from 'react';
import {FlatList, Alert} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

import {CardListRemove, Button} from '../../components';

import Colors from '../../utils/theme/colors';
import {Container, Footer} from './styles';

interface CartProps {
  data: FruitsProps;
  handleRemove: (fruit: string) => Promise<void>;
  onShare: () => Promise<void>;
}

export const Cart: FC<CartProps> = ({data, handleRemove, onShare}) => {
  return (
    <Container>
      <FlatList
        keyExtractor={item => item.key}
        style={{marginBottom: getBottomSpace() + 5}}
        data={data}
        renderItem={({item}) => (
          <CardListRemove data={item} handleRemove={handleRemove} />
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
