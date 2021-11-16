import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Input} from '../../components/Input';

export {useNavigation, useRoute} from '@react-navigation/core';

import {Button} from '../../components/Button';

import waterdrop from '../assets/waterdrop.png';

export function Buy(props) {
  const {data} = props.route.params;

  console.log(data);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <View style={styles.plantInfo}>
          <Image source={data.key} height={150} width={150} />

          <Text style={styles.plantName}>{'Ïdjhfdjsfhsdjk'}</Text>

          <Text style={styles.plantAbout}>{'asfjhaskjfhaskjf'}</Text>
        </View>

        <View style={styles.controller}>
          <View style={styles.tipcontroller}>
            {/* <Image source={waterdrop} style={styles.tipImage} /> */}

            <Text style={styles.tipText}>{'plant.water_tips'}</Text>
            <Text style={styles.tipText}>{data.key}</Text>
          </View>

          <Text style={styles.alertLabel}>
            Escolha o melhor horário para ser lembrado:
          </Text>

          <View
            style={{
              width: '40%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Input placeholder="Quantidade" />
            <Text style={{marginLeft: '40%', justifyContent: 'flex-end'}}>
              Valor total:
            </Text>
          </View>
          <Icon name="cloud" size={89} color="blue" />
          <Button title="Adicionar ao carrinho" onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    // backgroundColor: Colors.shape,
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Colors.shape,
  },
  plantName: {
    // fontFamily: Fonts.heading,
    fontSize: 24,
    // color: Colors.heading,
    marginTop: 15,
  },
  plantAbout: {
    textAlign: 'center',
    // fontFamily: Fonts.heading,
    // color: Colors.heading,
    fontSize: 17,
    marginTop: 10,
  },
  controller: {
    // backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  tipcontroller: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: Colors.blue_light,
    padding: 20,
    borderRadius: 20,
    position: 'relative',
    bottom: 60,
  },
  tipImage: {
    width: 58,
    height: 58,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    // fontFamily: Fonts.text,
    // color: Colors.blue,
    fontSize: 17,
    textAlign: 'center',
  },
  alertLabel: {
    textAlign: 'center',
    // fontFamily: Fonts.complement,
    // color: Colors.heading,
    marginBottom: 5,
  },
  dateTimePickerButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 40,
  },
  dateTimePickerText: {
    // color: Colors.heading,
    fontSize: 24,
    // fontFamily: Fonts.text,s
  },
});
