import React, {FC} from 'react';
import {TextInputProps} from 'react-native';

import Colors from '../../utils/theme/colors';

import {Container} from './styles';

interface Props extends TextInputProps {
  type: 'large' | 'small';
}

const Input: FC<Props> = ({type, ...rest}) => {
  return <Container type={type} placeholderTextColor={Colors.text} {...rest} />;
};

export default Input;
