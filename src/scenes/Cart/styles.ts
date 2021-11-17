import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight()}px;
  margin-bottom: ${getBottomSpace()}px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  justify-content: center;
  align-self: center;
  margin-top: 5%;
`;

export const CardDetailsList = styled(
  FlatList as new () => FlatList<FruitsProps>,
).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View``;
