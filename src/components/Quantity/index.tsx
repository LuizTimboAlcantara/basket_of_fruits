import React, {FC, useState, useContext, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import FruitsContext from '../../contexts/cart';

import {Container, Count} from './styles';

const Quantity: FC = () => {
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
      <Count>{qtdItens}</Count>
    </Container>
  );
};

export default Quantity;
