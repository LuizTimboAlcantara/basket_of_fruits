import React, {FC} from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Title} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type: 'large' | 'medium';
  color: string;
}

const Button: FC<ButtonProps> = ({title, type, color, ...rest}) => {
  return (
    <Container type={type} color={color} activeOpacity={0.7} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
