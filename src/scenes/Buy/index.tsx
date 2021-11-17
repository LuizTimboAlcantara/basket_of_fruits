import React, {FC, useContext} from 'react';

import FruitsContext from '../../contexts/cart';

import {CommonActions, useNavigation} from '../../modules';

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
    const currentData = await getFruits();

    const validate = currentData.find(dado => dado.key === item.key);

    if (validate !== undefined) {
      const newDado = {
        key: validate.key,
        qtd: Number(validate.qtd) + Number(item.qtd),
      };

      const newlist = currentData.filter(element => element.key !== item.key);

      console.log(newlist);

      const newData = [...newlist, newDado];

      await saveFruits(newData);
    } else {
      const newData = [...currentData!, item];

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

  return <Buy data={data} handleAdd={handleAdd} />;
};

export default BuyMain;
