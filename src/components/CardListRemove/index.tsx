import React, {FC} from 'react';
import {TouchableOpacityProps} from 'react-native';

import FruitIcon from '../FruitIcon';

import {
  Container,
  Wrapper,
  ContainerInfo,
  TitleFruit,
  TitleValue,
  IconContainer,
  ContainerDelete,
  Icon,
} from './styles';

interface Props extends TouchableOpacityProps {
  data: {key: string; qtd: string};
  handleRemove: () => void;
}

const CardRemove: FC<Props> = ({data, handleRemove, ...rest}) => {
  const {key, qtd} = data;

  return (
    <Container {...rest}>
      <Wrapper>
        <ContainerDelete>
          <FruitIcon icon={key} width={100} height={100} />
        </ContainerDelete>
        <ContainerInfo>
          <TitleFruit>Fruta: {key}</TitleFruit>
          <TitleValue>Valor: {qtd}</TitleValue>
        </ContainerInfo>
        <IconContainer onPress={handleRemove}>
          <Icon name="cancel" />
        </IconContainer>
      </Wrapper>
    </Container>
  );
};

export default CardRemove;
