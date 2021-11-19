import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {MaterialIcons} from '../../modules';

import Colors from '../../utils/theme/colors';

export const Container = styled.View`
  flex-direction: row;
  max-height: ${RFValue(150)}px;

  background-color: ${Colors.shape};
  border-radius: ${RFValue(20)}px;
  padding: ${RFValue(15)}px ${RFValue(10)}px;
  align-items: center;
  margin: ${RFValue(5)}px ${RFValue(10)}px;
  top: ${getStatusBarHeight()}px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  left: 10%;
  align-self: center;
`;

export const IconContainer = styled.TouchableOpacity``;

export const ContainerDelete = styled.View``;

export const TitleFruit = styled.Text`
  font-size: ${RFValue(15)}px;
`;

export const TitleValue = styled.Text`
  font-size: ${RFValue(15)}px;
  margin-top: ${RFValue(5)}px;
`;

export const TitleValueTotal = styled.Text`
  font-size: ${RFValue(15)}px;
  margin-top: ${RFValue(5)}px;
  font-weight: bold;
`;

export const Icon = styled(MaterialIcons)`
  justify-content: flex-end;
  align-self: flex-end;
  font-size: ${RFValue(35)}px;
  color: ${Colors.attention};
`;
