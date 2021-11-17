import React, {FC} from 'react';

import Colors from '../../utils/theme/colors';

import {Container, Input, IconSearch} from './styles';

interface SearchProps {
  onChangeText: (value: string) => void;
}

const InputSearch: FC<SearchProps> = ({onChangeText}) => {
  return (
    <Container>
      <IconSearch name="search" />
      <Input
        placeholder="Digite o nome da fruta"
        placeholderTextColor={Colors.text}
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default InputSearch;
