import React, {FC} from 'react';
import {TouchableOpacityProps, Text} from 'react-native';

import FruitIcon from '../FruitIcon';
import {FormattedMoney} from '../../utils/formatted/money';

import {Container, ContainerInfo, IconContainer, Icon} from './styles';

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
        <Text>Fruta: {name}</Text>
        <Text>Valor: {FormattedMoney(value)}/kg</Text>
        <IconContainer onPress={handleDetails}>
          <Icon name="add" />
        </IconContainer>
      </ContainerInfo>
    </Container>
  );
};

export default CardList;
