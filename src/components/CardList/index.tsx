import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {fruits} from '../../utils/fruits/fruits';

import {Container, Wrapper, ImageWeather} from './styles';

interface Props extends TouchableOpacityProps {
  fruta: string;
  handleDetails: () => void;
}

export function CardList({fruta, handleDetails, ...rest}: Props) {
  return (
    <Container onPress={handleDetails} {...rest}>
      <Wrapper>
        <ImageWeather
          source={fruits.find(el => el.key === fruta)?.image}
          resizeMode="contain"
        />
      </Wrapper>
    </Container>
  );
}
