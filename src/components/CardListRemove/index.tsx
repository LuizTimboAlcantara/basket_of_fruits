import React, {FC} from 'react';
import {TouchableOpacityProps} from 'react-native';

import {handleSum} from '../../utils/formatted/money';

import FruitIcon from '../FruitIcon';

import {
  Container,
  ContainerInfo,
  TitleFruit,
  TitleValue,
  TitleValueTotal,
  IconContainer,
  ContainerDelete,
  Icon,
} from './styles';

interface Props extends TouchableOpacityProps {
  data: AsyncFruitsProps;
  handleRemove: () => void;
}

const CardRemove: FC<Props> = ({data, handleRemove, ...rest}) => {
  const {key, qtd, valueUnit} = data;

  return (
    <Container {...rest}>
      <ContainerDelete>
        <FruitIcon icon={key} width={100} height={100} />
      </ContainerDelete>
      <ContainerInfo>
        <TitleFruit>Fruta: {key}</TitleFruit>
        <TitleValue>Quantidade: {qtd}</TitleValue>
        <TitleValueTotal>
          Valor Total: {handleSum(qtd, valueUnit)}
        </TitleValueTotal>
      </ContainerInfo>
      <IconContainer onPress={handleRemove}>
        <Icon name="cancel" />
      </IconContainer>
    </Container>
  );
};

export default CardRemove;
