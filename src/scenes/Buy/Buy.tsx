import React, {FC, useState} from 'react';
import {Text} from 'react-native';

import {Button, Input, Header} from '../../components';

import SVGImg from '../../assets/svgs/banana.svg';

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
}

export const Buy: FC<SignInProps> = ({data, handleAdd}) => {
  const [quantidade, setQuantidade] = useState('');

  return (
    <Container>
      <Header />

      <ContainerInfo>
        <SVGImg width={200} height={200} />

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
        <Text>R$ 100,00 </Text>
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
