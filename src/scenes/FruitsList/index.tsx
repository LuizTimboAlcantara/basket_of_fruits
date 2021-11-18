import React, {FC, useState} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';

import {fruits} from '../../utils/fruits/fruits';

import FruistList from './FruistList';

const FruitsListMain: FC = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(fruits);

  function handleSearch(item: string) {
    if (item !== '') {
      const dados = fruits.filter(element => element.name === item);

      setData(dados);
    } else {
      setData(fruits);
    }
  }

  function handleDatails(item: FruitsProps) {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Buy',
        params: {
          data: item,
        },
      }),
    );
  }

  return (
    <FruistList
      data={data}
      handleSearch={handleSearch}
      handleDatails={handleDatails}
    />
  );
};

export default FruitsListMain;
