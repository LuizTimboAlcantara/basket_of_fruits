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
      {icon === 'Banana' && <Banana width={width} height={height} />}
      {icon === 'Maçã' && <Apple width={width} height={height} />}
      {icon === 'Pêra' && <Pear width={width} height={height} />}
      {icon === 'Abacaxi' && <Banana width={width} height={height} />}
      {icon === 'Manga' && <Banana width={width} height={height} />}
    </Container>
  );
};

export default FruitIcon;
