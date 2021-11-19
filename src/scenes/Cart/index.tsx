import React, {FC, useState, useContext, useCallback, useEffect} from 'react';
import {Share, Alert} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {useFocusEffect} from '@react-navigation/native';

import {handleSum} from '../../utils/formatted/money';

import {
  TemplateProofMain,
  TemplateProofSecudary,
} from '../../utils/templates/proof';

import FruitsContext from '../../contexts/cart';

import Cart from './Cart';

const CartMain: FC = () => {
  const {getFruits, saveFruits, removeAll} = useContext(FruitsContext);

  const [data, setData] = useState<AsyncFruitsProps[]>([]);
  const [hasItens, setHasItens] = useState(false);
  const [pdfList, setPdfList] = useState('');
  const [totalCart, setTotalCart] = useState(0);

  async function handleGenerate(): Promise<string | undefined> {
    console.log('DENTRO');
    let options = {
      html: TemplateProofMain(pdfList, totalCart),
      fileName: 'Comprovante de Compra',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);

    return file.filePath;
  }

  const onShare = async () => {
    try {
      console.log('Antes');

      const path = await handleGenerate();

      console.log(path);
      console.log('DEPOIS');

      // const result =
      await Share.share({
        url: path,
        message: 'Comprovante de Compra',
      });
      // if (result.action === Share.sharedAction) {
      //   if (result.activityType) {
      //     // shared with activity type of result.activityType
      //   } else {
      //     // shared
      //   }
      // } else if (result.action === Share.dismissedAction) {
      //   // dismissed
      // }
    } catch (error) {
      console.log(error.message);
    }
  };

  async function handleGetFruits() {
    const currentData = await getFruits();

    if (currentData.length > 0) {
      setHasItens(true);
    }

    setData(currentData);
  }

  async function handleRemove(fruit: AsyncFruitsProps) {
    Alert.alert('Remover', `Deseja remover do carrinho?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: async () => await remove(fruit),
      },
    ]);
  }

  async function remove(fruit: AsyncFruitsProps) {
    try {
      const currentData = await getFruits();

      const newlist = currentData.filter(item => item.key !== fruit.key);

      if (newlist.length === 0) setHasItens(false);

      await saveFruits(newlist);

      //setData(newlist);
      handleGetFruits();

      // await removeAll();
    } catch (error) {
      Alert.alert('Não foi possível remover!');
    }
  }

  const setList = async () => {
    var listAux = '';
    for (const x in data) {
      listAux += TemplateProofSecudary(
        data[x].qtd,
        data[x].name,
        data[x].valueUnit,
        handleSum(data[x].qtd, data[x].valueUnit),
      );
    }
    setPdfList(listAux.substring(0, listAux.length - 1));
  };

  function getTotalCart() {
    if (data.length) {
      const totalArray = data
        .map(item => Number(item.qtd) * Number(item.valueUnit))
        .reduce((accum, curr) => accum + curr);

      setTotalCart(totalArray);
    } else {
      setTotalCart(0);
    }
  }

  useEffect(() => {
    getTotalCart();
    setList();
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      // setList();
      getTotalCart();
      handleGetFruits();
    }, []),
  );

  return (
    <Cart
      data={data}
      totalCart={totalCart}
      hasItens={hasItens}
      handleRemove={handleRemove}
      onShare={onShare}
    />
  );
};

export default CartMain;
