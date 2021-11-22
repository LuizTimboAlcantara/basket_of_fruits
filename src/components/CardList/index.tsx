import React, {FC} from 'react';
import {TouchableOpacityProps} from 'react-native';

import FruitIcon from '../FruitIcon';
import {FormattedMoney} from '../../utils/formatted/money';

import {
  Container,
  ContainerInfo,
  IconContainer,
  TitleFruits,
  ValueTitle,
  Icon,
} from './styles';

interface Props extends TouchableOpacityProps {
  data: FruitsProps;
  handleDetails?: () => void;
  handleRemove?: () => void;
}

const CardList: FC<Props> = ({data, handleDetails, ...rest}) => {
  const {name, value} = data;

  return (
    <Container {...rest}>
      <FruitIcon icon={name} width={100} height={100} />
      <ContainerInfo>
        <TitleFruits>Fruta: {name}</TitleFruits>
        <ValueTitle>Valor: {FormattedMoney(Number(value))}/kg</ValueTitle>
        <IconContainer onPress={handleDetails}>
          <Icon name="add" />
        </IconContainer>
      </ContainerInfo>
    </Container>
  );
};

export default CardList;
