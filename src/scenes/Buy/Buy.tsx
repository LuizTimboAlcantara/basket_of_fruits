import React, {FC, useState} from 'react';
import {Text} from 'react-native';

import {Button, Input, Header, FruitIcon} from '../../components';

import Colors from '../../utils/theme/colors';

import {
  Container,
  Footer,
  InputContainer,
  ContainerInfo,
  DescriptionInfo,
} from './styles';

interface SignInProps {
  data: FruitsProps;
  handleAdd: (item: AsyncFruitsProps) => Promise<void>;
  handleTotalSum: (value: string) => string;
}

export const Buy: FC<SignInProps> = ({data, handleAdd, handleTotalSum}) => {
  const [quantidade, setQuantidade] = useState('');

  return (
    <Container>
      <Header />

      <ContainerInfo>
        <FruitIcon icon={data.name} width={200} height={200} />

        <Text>{data.name}</Text>
        <DescriptionInfo>{data.description}</DescriptionInfo>
      </ContainerInfo>

      <InputContainer>
        <Input
          placeholder="Quantidade"
          type="small"
          keyboardType="numeric"
          onChangeText={setQuantidade}
        />
        <Text>Valor Total: </Text>
        <Text>R$ {handleTotalSum(quantidade)}</Text>
      </InputContainer>

      <Footer>
        <Button
          title="Adicionar ao carrinho"
          type="large"
          color={Colors.secondary}
          onPress={() => handleAdd({key: data.key, qtd: quantidade})}
        />
      </Footer>
    </Container>
  );
};

export default Buy;
