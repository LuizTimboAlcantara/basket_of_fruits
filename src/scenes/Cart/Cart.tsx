import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {CardListRemove, Button, Goback} from '../../components';

import {FormattedMoney} from '../../utils/formatted/money';

import Texts from '../../utils/texts';
import Colors from '../../utils/theme/colors';

import {
  Container,
  Header,
  InfoItens,
  WrapperHasItens,
  Icon,
  Title,
  Content,
  Footer,
} from './styles';

interface CartProps {
  data: AsyncFruitsProps[];
  hasItens: boolean;
  totalCart: number;
  handleRemove: (fruit: AsyncFruitsProps) => Promise<void>;
  onShare: () => Promise<void>;
}

export const Cart: FC<CartProps> = ({
  data,
  hasItens,
  totalCart,
  handleRemove,
  onShare,
}) => {
  return (
    <Container>
      <>
        <Header>
          <Goback />
          <Title>Minha Lista - {FormattedMoney(totalCart)}</Title>
        </Header>
        {!hasItens ? (
          <WrapperHasItens>
            <InfoItens>{Texts.INFOCARRINHO}</InfoItens>
            <Icon />
          </WrapperHasItens>
        ) : (
          <>
            <Content>
              <FlatList
                keyExtractor={item => item.key}
                data={data}
                renderItem={({item}) => (
                  <CardListRemove
                    data={item}
                    handleRemove={() => handleRemove(item)}
                  />
                )}
              />
            </Content>
            <Footer>
              <Button
                title="Gerar comprovante"
                color={Colors.secondary}
                type="large"
                onPress={onShare}
              />
            </Footer>
          </>
        )}
      </>
    </Container>
  );
};

export default Cart;
