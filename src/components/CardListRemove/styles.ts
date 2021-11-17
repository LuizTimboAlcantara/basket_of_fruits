import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {MaterialIcons} from '../../modules';

import Colors from '../../utils/theme/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.shape};
  border-radius: ${RFValue(20)}px;
  padding: ${RFValue(15)}px ${RFValue(10)}px;
  align-items: center;
  margin: ${RFValue(5)}px ${RFValue(10)}px;
  top: ${getStatusBarHeight()}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;

// export const ImageWeather = styled.Image`
//   width: ${RFValue(180)}px;
//   height: ${RFValue(80)}px;
//   border-radius: ${RFValue(30)}px;
// `;

export const ContainerInfo = styled.View`
  flex: 1;
  width: 100%;
  /* top: 15%; */
  justify-content: flex-start;
  left: 10%;
  align-self: center;
`;

export const IconContainer = styled.TouchableOpacity``;

export const ContainerDelete = styled.View``;

export const Icon = styled(MaterialIcons)`
  justify-content: flex-end;
  align-self: flex-end;
  font-size: ${RFValue(35)}px;
  color: ${Colors.attention};
`;
