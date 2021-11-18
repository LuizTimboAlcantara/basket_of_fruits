import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight()}px;
  margin-bottom: ${getBottomSpace()}px;
`;

export const Content = styled.View``;

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
