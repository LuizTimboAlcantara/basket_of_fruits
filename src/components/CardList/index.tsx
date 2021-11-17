import React, {FC} from 'react';
import {TouchableOpacityProps, Text} from 'react-native';

import {Banana, Apple, Pineapple, Pear, Mango} from '../../assets/svgs';

import Svg, {Circle} from 'react-native-svg';
import SVGImg from '../../assets/svgs/banana.svg';
import SvgUri from 'react-native-svg-uri';

import {Container, Wrapper, ContainerInfo, IconContainer, Icon} from './styles';

interface Props extends TouchableOpacityProps {
  data: FruitsProps;
  handleDetails?: () => void;
  handleRemove?: () => void;
}

const CardList: FC<Props> = ({data, handleDetails, ...rest}) => {
  const {name, value, image} = data;

  console.log(image);

  return (
    <Container {...rest}>
      <Wrapper>
        {/* <Svg width={100} height={100} url={data.image} /> */}
        {data.name === 'Banana' && <Banana width={100} height={100} />}
        {data.name === 'Maçã' && <Apple width={100} height={100} />}
        {data.name === 'Pêra' && <Pear width={100} height={100} />}
        {data.name === 'Abacaxi' && <Banana width={100} height={100} />}
        {data.name === 'Manga' && <Banana width={100} height={100} />}
        <ContainerInfo>
          <Text>Fruta: {name}</Text>
          <Text>Valor: {value}</Text>
        </ContainerInfo>
        <IconContainer onPress={handleDetails}>
          <Icon name="add" />
        </IconContainer>
      </Wrapper>
    </Container>
  );
};

export default CardList;
