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
  const [path, setPath] = useState<string>();
  const [totalCart, setTotalCart] = useState(0);

  async function handleGenerate() {
    let options = {
      html: TemplateProofMain(pdfList, totalCart),
      fileName: 'Comprovante de Compra',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);
    // console.log(file.filePath);
    console.log(file.filePath);

    setPath(file.filePath);
  }

  const onShare = async () => {
    try {
      await handleGenerate();

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

    console.log(currentData);

    if (currentData.length > 0) {
      setHasItens(true);
    }

    setData(currentData);
  }

  async function handleRemove(fruit: string) {
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

  async function remove(fruit: string) {
    try {
      const currentData = await getFruits();

      const newlist = currentData.filter(item => item.key !== fruit.key);

      await saveFruits(newlist);

      setData(newlist);

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
        data[x].key,
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
    }
  }

  useEffect(() => {
    setList();
    handleGetFruits;
    getTotalCart();
  }, [data]);

  useFocusEffect(
    useCallback(() => {
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
