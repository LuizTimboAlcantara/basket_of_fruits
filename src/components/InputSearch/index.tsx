import React from 'react';

import {Container, Input} from './styles';

type SearchProps = {};

export function InputSearch({}: SearchProps) {
  return (
    <Container>
      <Input placeholder="Digite o nome da cidade" />
    </Container>
  );
}
