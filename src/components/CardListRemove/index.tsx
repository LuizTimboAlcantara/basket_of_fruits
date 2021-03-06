import React, {FC} from 'react';
import {TouchableOpacityProps} from 'react-native';

import {FormattedMoney, handleMult} from '../../utils/formatted/money';

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
  const {key, name, qtd, valueUnit} = data;

  return (
    <Container {...rest}>
      <ContainerDelete>
        <FruitIcon icon={key} width={100} height={100} />
      </ContainerDelete>
      <ContainerInfo>
        <TitleFruit>Fruta: {name}</TitleFruit>
        <TitleValue>Quantidade: {parseFloat(qtd).toFixed(2)}/kg</TitleValue>
        <TitleValue>
          Valor por kg: {FormattedMoney(Number(valueUnit))}
        </TitleValue>
        <TitleValueTotal>
          Valor Total:{' '}
          {FormattedMoney(Number(handleMult(qtd, valueUnit).toFixed(2)))}
        </TitleValueTotal>
      </ContainerInfo>
      <IconContainer onPress={handleRemove}>
        <Icon name="cancel" />
      </IconContainer>
    </Container>
  );
};

export default CardRemove;
