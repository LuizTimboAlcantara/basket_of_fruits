import React, {FC, useState, useContext, useCallback, useEffect} from 'react';
import {Share} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {useFocusEffect} from '@react-navigation/native';

import FruitsContext from '../../contexts/cart';

import Cart from './Cart';

const CartMain: FC = () => {
  const {getFruits, saveFruits} = useContext(FruitsContext);
  const [data, setData] = useState();

  let path;

  async function handleGenerate() {
    let options = {
      html: `<html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      </head>
      <body style="text-align: center;">
        <h1 style="font-size: 40px; font-family: Helvetica Neue; font-weight: normal;">
          COMPROVANTE DE COMPRA
        </h1>
        <br>
        <br>
        <h3>
        <h3>
        <br>
        <br>
        <h3>
        </h3>
      </body>
    </html>`,
      fileName: 'Comprovante de Compra',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);
    // console.log(file.filePath);
    console.log(file.filePath);

    path = file.filePath;
  }

  const onShare = async () => {
    try {
      await handleGenerate();

      const result = await Share.share({
        url: path,
        message: 'Comprovante de Compra',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  async function handleGetFruits() {
    const currentData = await getFruits();

    setData(currentData);
  }

  async function handleRemove(fruit: string) {
    const currentData = await getFruits();

    const newlist = currentData.filter(item => item.key !== fruit);

    await saveFruits(newlist);
  }

  useEffect(() => {
    handleGetFruits;
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      handleGetFruits();
    }, []),
  );

  return <Cart data={data} handleRemove={handleRemove} onShare={onShare} />;
};

export default CartMain;
