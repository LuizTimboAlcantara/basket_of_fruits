import React, {FC, useState} from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {Button, Input, FruitIcon, Goback} from '../../components';

import {FormattedMoney} from '../../utils/formatted/money';

import Colors from '../../utils/theme/colors';

import {
  Container,
  Footer,
  InputContainer,
  ContainerInfo,
  DescriptionInfo,
  TitleName,
  TitleValue,
} from './styles';

interface SignInProps {
  data: FruitsProps;
  handleAdd: (item: AsyncFruitsProps) => Promise<void>;
  handleTotalSum: (value: string) => string;
}

export const Buy: FC<SignInProps> = ({data, handleAdd, handleTotalSum}) => {
  const [quantidade, setQuantidade] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Goback />

          <ContainerInfo>
            <FruitIcon icon={data.name} width={200} height={200} />

            <TitleName>
              {data.name} - {FormattedMoney(data.value)}/kg
            </TitleName>
            <DescriptionInfo>{data.description}</DescriptionInfo>
          </ContainerInfo>

          <InputContainer>
            <Input
              placeholder="kg"
              type="small"
              keyboardType="numeric"
              onChangeText={setQuantidade}
            />
            <TitleValue>
              Valor Total:
              {handleTotalSum(quantidade)}
            </TitleValue>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Buy;
