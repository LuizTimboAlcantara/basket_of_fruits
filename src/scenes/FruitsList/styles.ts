import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  margin-bottom: ${getBottomSpace()}px;
`;

export const Content = styled.View`
  margin-left: 5%;
`;

export const CardDetailsList = styled(
  FlatList as new () => FlatList<FruitsProps>,
).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-bottom: ${RFValue(150)}px;
`;
