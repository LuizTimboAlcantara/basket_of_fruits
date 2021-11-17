import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

import {RectButton} from 'react-native-gesture-handler';

import {MaterialIcons} from '../../modules';

import Colors from '../../utils/theme/colors';

export const Wrapper = styled.SafeAreaView`
  background-color: ${Colors.shape};
`;

export const ButtonRemove = styled(RectButton)`
  width: ${RFValue(80)}px;
  height: ${RFValue(140)}px;
  background-color: ${Colors.secondary};
  margin-top: 25%;
  border-radius: ${RFValue(20)}px;
  justify-content: center;
  align-items: center;
  right: ${RFValue(4)}px;
`;

export const Icon = styled(MaterialIcons)`
  font-size: ${RFValue(35)}px;
  align-self: center;
  color: ${Colors.text_dark};
`;

export const ContainerInfo = styled.View`
  margin-right: 50%;
`;

export const Info = styled.Text`
  margin-bottom: ${RFValue(5)}px;
`;

export const InfoCity = styled.Text`
  font-size: ${RFValue(20)}px;
`;

export const ImageWeather = styled.Image`
  top: 20%;
  position: absolute;
  width: ${RFValue(180)}px;
  height: ${RFValue(80)}px;
  left: 85%;
  border-radius: ${RFValue(30)}px;
`;
