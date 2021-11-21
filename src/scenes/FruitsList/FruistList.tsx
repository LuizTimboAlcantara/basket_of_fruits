import React, {FC} from 'react';

import {CardList, InputSearch, Header} from '../../components';

import {Container, Content, CardDetailsList} from './styles';

interface FruitsListProps {
  data: FruitsProps;
  handleDatails: (item: FruitsListProps) => Promise<void>;
  handleSearch: (value: string) => void;
}

export const FruitsList: FC<FruitsListProps> = ({
  data,
  handleSearch,
  handleDatails,
}) => {
  return (
    <Container>
      <Header />
      <InputSearch onChangeText={handleSearch} />
      <Content>
        <CardDetailsList
          keyExtractor={item => item.key}
          data={data}
          renderItem={({item}) => (
            <CardList data={item} handleDetails={() => handleDatails(item)} />
          )}
          numColumns={2}
        />
      </Content>
    </Container>
  );
};

export default FruitsList;
