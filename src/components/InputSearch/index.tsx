import React, {FC} from 'react';

import {Container, Input, IconSearch} from './styles';

interface SearchProps {
  onChangeText: (value: string) => void;
}

const InputSearch: FC<SearchProps> = ({onChangeText}) => {
  return (
    <Container>
      <IconSearch name="search" />
      <Input placeholder="Digite o nome da fruta" onChangeText={onChangeText} />
    </Container>
  );
};

export default InputSearch;
