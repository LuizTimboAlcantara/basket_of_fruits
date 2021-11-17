import React, {FC} from 'react';
import {Animated, Text} from 'react-native';

import {Swipeable} from '../../modules';

import {
  Wrapper,
  ButtonRemove,
  Icon,
  ContainerInfo,
  Info,
  InfoCity,
} from './styles';

interface Props {
  data: FruitsProps;
  handleRemove?: () => void;
}

const CardList: FC<Props> = ({data, handleRemove}) => {
  const {name, value} = data;

  return (
    <Wrapper>
      <Swipeable
        overshootRight={false}
        renderRightActions={() => (
          <Animated.View>
            <ButtonRemove onPress={handleRemove}>
              <Icon name="search" />
            </ButtonRemove>
          </Animated.View>
        )}>
        <ContainerInfo>
          <InfoCity></InfoCity>

          <Text>{name}</Text>
          <Text>{value}</Text>
          <Info></Info>
          <Info></Info>
          <Info></Info>
          <Info></Info>
          <Info></Info>
        </ContainerInfo>
      </Swipeable>
    </Wrapper>
  );
};

export default CardList;
