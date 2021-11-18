import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import {Cesta} from '../../assets/svgs';

export const Container = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight()}px;
  margin-bottom: ${getBottomSpace()}px;
`;

export const Content = styled.View``;

export const WrapperHasItens = styled.View`
  flex: 1;
  margin-top: 50%;
`;

export const InfoItens = styled.Text`
  align-self: center;
  font-weight: bold;
  font-size: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(20)}px;
  justify-content: center;
  align-self: center;
  margin-top: 5%;
`;

export const Icon = styled(Cesta)`
  align-self: center;
  justify-content: center;
  width: ${RFValue(250)}px;
  height: ${RFValue(250)}px;
`;

export const WrapperFruits = styled.View`
  flex: 1;
`;

export const CardDetailsList = styled(
  FlatList as new () => FlatList<FruitsProps>,
).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View``;
