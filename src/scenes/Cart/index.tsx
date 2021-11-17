import React, {FC, useContext} from 'react';
import Share from 'react-native-share';

import FruitsContext from '../../contexts/cart';

import {fruits} from '../../utils/fruits/fruits';

import Cart from './Cart';

const CartMain: FC = () => {
  const {getFruits, saveFruits} = useContext(FruitsContext);

  // Share.open()
  //   .then(res => {
  //     console.log('Sucesso');
  //   })
  //   .catch(err => {
  //     err && console.log(err);
  //   });

  async function handleRemove(fruit: string) {
    const currentData = await getFruits();

    const newlist = currentData.filter(item => item.key !== fruit);

    await saveFruits(newlist);
  }

  return <Cart data={fruits} handleRemove={handleRemove} />;
};

export default CartMain;
