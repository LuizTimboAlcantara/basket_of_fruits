import React, {FC} from 'react';
import {CardListRemove, Button, Goback} from '../../components';

import Texts from '../../utils/texts';
import Colors from '../../utils/theme/colors';

import {
  Container,
  Content,
  InfoItens,
  WrapperHasItens,
  Icon,
  Title,
  WrapperFruits,
  CardDetailsList,
  Footer,
} from './styles';

interface CartProps {
  data: FruitsProps;
  hasItens: boolean;
  handleRemove: (fruit: string) => Promise<void>;
  onShare: () => Promise<void>;
}

export const Cart: FC<CartProps> = ({
  data,
  hasItens,
  handleRemove,
  onShare,
}) => {
  return (
    <Container>
      <Content>
        <Goback />
        <Title>Minha Lista</Title>
      </Content>

      {!hasItens ? (
        <WrapperHasItens>
          <InfoItens>{Texts.INFOCARRINHO}</InfoItens>
          <Icon />
        </WrapperHasItens>
      ) : (
        <WrapperFruits>
          <CardDetailsList
            keyExtractor={item => item.key}
            data={data}
            renderItem={({item}) => (
              <CardListRemove
                data={item}
                handleRemove={() => handleRemove(item)}
              />
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
        </WrapperFruits>
      )}
    </Container>
  );
};

export default Cart;
