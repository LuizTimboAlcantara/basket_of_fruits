import React, {FC} from 'react';

import {Banana, Apple, Pineapple, Pear, Mango} from '../../assets/svgs';

import {Container} from './styles';

interface FruitIconProps {
  icon: string;
  width: number;
  height: number;
}

const FruitIcon: FC<FruitIconProps> = ({icon, width, height}) => {
  return (
    <Container>
      {(icon === 'Banana' || icon === 'banana') && (
        <Banana width={width} height={height} />
      )}
      {(icon === 'Maçã' || icon === 'maca') && (
        <Apple width={width} height={height} />
      )}
      {(icon === 'Pêra' || icon === 'pera') && (
        <Pear width={width} height={height} />
      )}
      {(icon === 'Abacaxi' || icon === 'abacaxi') && (
        <Pineapple width={width} height={height} />
      )}
      {(icon === 'Manga' || icon === 'manga') && (
        <Mango width={width} height={height} />
      )}
    </Container>
  );
};

export default FruitIcon;
