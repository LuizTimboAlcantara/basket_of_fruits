import React, {FC} from 'react';

import {Container, Input} from './styles';

type SearchProps = {};

const InputSearch: FC<SearchProps> = () => {
  return (
    <Container>
      <Input placeholder="Digite o nome da fruta" />
    </Container>
  );
};

export default InputSearch;
