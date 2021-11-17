import React, {FC} from 'react';
import {TouchableOpacityProps, Text} from 'react-native';

import {Container, Wrapper} from './styles';

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
        <Text>{name}</Text>
        <Text>{value}</Text>
      </Wrapper>
    </Container>
  );
};

export default CardList;
