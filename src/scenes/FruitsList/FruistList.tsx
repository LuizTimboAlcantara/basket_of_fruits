import React, {FC} from 'react';
import {FlatList} from 'react-native';

import {CardList, InputSearch, Header} from '../../components';

import {Container, Content} from './styles';

interface FruitsListProps {
  data: FruitsProps[];
  handleDatails: (item: FruitsListProps) => void;
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
        <FlatList
          keyExtractor={item => item.key}
          data={data}
          style={{marginBottom: 160}}
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
