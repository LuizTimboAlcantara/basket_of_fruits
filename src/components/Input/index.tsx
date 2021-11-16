import React, {FC} from 'react';
import {TextInputProps} from 'react-native';

import {Container} from './styles';

type Props = TextInputProps;

const Input: FC<Props> = ({...rest}) => {
  return <Container {...rest} />;
};

export default Input;
