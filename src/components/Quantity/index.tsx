import React, {useState, useContext, useCallback} from 'react';
import {Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import FruitsContext from '../../contexts/cart';

import {Container} from './styles';

export default function Quantity() {
  const {getFruits} = useContext(FruitsContext);

  const [qtdItens, setQtdItens] = useState<Number>();

  async function handleGetFruits() {
    const currentData = await getFruits();

    setQtdItens(currentData.length);
  }

  useFocusEffect(
    useCallback(() => {
      handleGetFruits();
    }, []),
  );

  return (
    <Container>
      <Text>{qtdItens}</Text>
    </Container>
  );
}
