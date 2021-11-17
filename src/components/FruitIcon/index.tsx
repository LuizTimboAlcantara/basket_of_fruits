import React from 'react';

import {Banana, Apple, Pineapple, Pear, Mango} from '../../assets/svgs';

import {Container} from './styles';

interface FruitIconProps {
  icon: string;
  width: number;
  height: number;
}

export default function FruitIcon({icon, width, height}: FruitIconProps) {
  return (
    <Container>
      {icon === 'Banana' && <Banana width={width} height={height} />}
      {icon === 'Maçã' && <Apple width={width} height={height} />}
      {icon === 'Pêra' && <Pear width={width} height={height} />}
      {icon === 'Abacaxi' && <Banana width={width} height={height} />}
      {icon === 'Manga' && <Banana width={width} height={height} />}
    </Container>
  );
}
