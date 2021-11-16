import React from 'react';
import {TouchableOpacityProps, Text} from 'react-native';

import {fruits} from '../../utils/fruits/fruits';

import {Container, Wrapper, ImageWeather} from './styles';

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

export function CardList({data, handleDetails, ...rest}: Props) {
  const {name, value, image} = data;

  return (
    <Container onPress={handleDetails} {...rest}>
      <Wrapper>
        <ImageWeather
          source={fruits.find(el => el.key === image)?.image}
          style={{height: 110, width: 110}}
          resizeMode="contain"
        />
        <Text>{name}</Text>
        <Text>{value}</Text>
      </Wrapper>
    </Container>
  );
}
