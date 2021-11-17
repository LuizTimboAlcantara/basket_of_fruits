import React, {FC} from 'react';

import {Container, Input, IconSearch} from './styles';

type SearchProps = {};

const InputSearch: FC<SearchProps> = () => {
  return (
    <Container>
      <IconSearch name="search" />
      <Input placeholder="Digite o nome da fruta" />
    </Container>
  );
};

export default InputSearch;
