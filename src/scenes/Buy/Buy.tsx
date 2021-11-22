import React, {FC, useState} from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

import {Button, FruitIcon, Goback} from '../../components';

import {FormattedMoney} from '../../utils/formatted/money';

import Colors from '../../utils/theme/colors';

import {
  Wrapper,
  Container,
  Footer,
  InputContainer,
  ContainerInfo,
  DescriptionInfo,
  TitleName,
  TitleInput,
  InputValue,
  TitleValue,
} from './styles';

interface SignInProps {
  data: FruitsProps;
  handleAdd: (item: AsyncFruitsProps) => Promise<void>;
  handleTotalSum: (value: string) => string;
}

export const Buy: FC<SignInProps> = ({data, handleAdd, handleTotalSum}) => {
  const [quantity, setQuantity] = useState('');

  return (
    <Wrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Goback />

          <ContainerInfo>
            <FruitIcon icon={data.name} width={200} height={200} />

            <TitleName>
              {data.name} - {FormattedMoney(Number(data.value))}/kg
            </TitleName>
            <DescriptionInfo>{data.description}</DescriptionInfo>
          </ContainerInfo>

          <InputContainer>
            <InputValue
              placeholder="kg"
              type="small"
              keyboardType="numeric"
              onChangeText={setQuantity}
            />
            <TitleInput>/kg</TitleInput>
            <TitleValue>
              Total:
              {handleTotalSum(quantity)}
            </TitleValue>
          </InputContainer>

          <Footer>
            <Button
              title="Adicionar ao carrinho"
              type="large"
              color={Colors.secondary}
              onPress={() =>
                handleAdd({
                  key: data.key,
                  name: data.name,
                  qtd: quantity,
                  valueUnit: data.value,
                })
              }
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </Wrapper>
  );
};

export default Buy;
