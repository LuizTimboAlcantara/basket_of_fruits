import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

import Colors from '../../utils/theme/colors';

export const Container = styled.TouchableOpacity`
  width: 45%;
  background-color: ${Colors.shape};
  border-radius: ${RFValue(20)}px;
  padding: ${RFValue(50)}px 0;
  align-items: center;
  margin: ${RFValue(5)}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(10)}px;
  padding-top: ${RFValue(30)}px;
`;

export const ImageWeather = styled.Image`
  width: ${RFValue(180)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(30)}px;
`;
