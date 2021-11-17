import React, {FC} from 'react';
import {TouchableOpacityProps, Text} from 'react-native';

import SVGImg from '../../assets/svgs/banana.svg';

import {Container, Wrapper, ContainerInfo, IconContainer, Icon} from './styles';

interface Props extends TouchableOpacityProps {
  data: FruitsProps;
  handleDetails?: () => void;
  handleRemove?: () => void;
}

const CardList: FC<Props> = ({data, handleDetails, ...rest}) => {
  const {name, value} = data;

  return (
    <Container onPress={handleDetails} {...rest}>
      <Wrapper>
        <SVGImg width={100} height={100} />
        <ContainerInfo>
          <Text>Fruta: {name}</Text>
          <Text>Valor: {value}</Text>
        </ContainerInfo>
        <IconContainer>
          <Icon name="add" />
        </IconContainer>
      </Wrapper>
    </Container>
  );
};

export default CardList;
