import React, {FC} from 'react';
import {TouchableOpacityProps, Text} from 'react-native';

import {Container, Wrapper} from './styles';

interface Props {
  key: string;
  name: string;
  description: string;
  image: string;
  value: number;
}

interface Props extends TouchableOpacityProps {
  data: Props;
  handleDetails: () => void;
}

const CardList: FC<Props> = ({data, handleDetails, ...rest}) => {
  const {name, value, image} = data;

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
