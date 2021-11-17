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

  console.log(data);

  async function handleAdd(item: AsyncFruitsProps) {
    const currentData = await getFruits();

    console.log(currentData);

    const newData = [...currentData!, item];

    await saveFruits(newData);

    // await removeAll();

    console.log(item);

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
