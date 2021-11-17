import React, {FC} from 'react';
import {TextInputProps} from 'react-native';

import {Container} from './styles';

interface Props extends TextInputProps {
  type: 'large' | 'small';
}

const Input: FC<Props> = ({type, ...rest}) => {
  return <Container type={type} {...rest} />;
};

export default Input;
