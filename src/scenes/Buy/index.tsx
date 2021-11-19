import React, {FC, useContext} from 'react';
import {Alert} from 'react-native';

import FruitsContext from '../../contexts/cart';

import {CommonActions, useNavigation} from '../../modules';
import {
  FormattedMoney,
  verifyFloat,
  handleSum,
  handleMult,
} from '../../utils/formatted/money';

import Buy from './Buy';

interface SignInProps {
  data: FruitsProps;
  route: any;
}

const BuyMain: FC<SignInProps> = props => {
  const {data} = props.route.params;
  const navigation = useNavigation();

  const {getFruits, saveFruits, removeAll} = useContext(FruitsContext);

  async function handleAdd(item: AsyncFruitsProps) {
    if (!item.qtd || Number(item.qtd) === 0) {
      Alert.alert(
        'É preciso adicionar uma quantidade para adicionar o item ao carrinho!',
      );

      return;
    }

    const currentData = await getFruits();

    const validate = currentData.find(dado => dado.key === item.key);

    if (validate !== undefined) {
      const newDado = {
        key: validate.key,
        name: validate.name,
        qtd: handleSum(verifyFloat(validate.qtd), verifyFloat(item.qtd)),
        valueUnit: validate.valueUnit,
      };

      const newlist = currentData.filter(element => element.key !== item.key);

      const newData = [...newlist, newDado];

      await saveFruits(newData);
    } else {
      const newDado = {
        key: item.key,
        name: item.name,
        qtd: verifyFloat(item.qtd),
        valueUnit: item.valueUnit,
      };
      const newData = [...currentData!, newDado];

      await saveFruits(newData);
    }

    // await removeAll();

    handleFruitsList();
  }

  function handleFruitsList() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'FruitsList',
      }),
    );
  }

  function handleTotalSum(value: string) {
    if (value === '') {
      return FormattedMoney(0);
    }

    const total = handleMult(verifyFloat(data.value), verifyFloat(value));

    if (value.length > 5) {
      Alert.alert('O limite máximo é de 99999kg');
    }

    return FormattedMoney(total);
  }

  return (
    <Buy data={data} handleAdd={handleAdd} handleTotalSum={handleTotalSum} />
  );
};

export default BuyMain;
