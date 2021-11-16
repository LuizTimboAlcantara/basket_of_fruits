import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

import Colors from '../../utils/theme/colors';

export const Container = styled.TouchableOpacity`
  width: 50%;
  background-color: ${Colors.shape};
  flex-direction: column;
  justify-content: space-between;
  padding: ${RFValue(13)}px ${RFValue(24)}px;
  border-radius: ${RFValue(5)}px;
  border-left-width: ${RFValue(5)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding-top: 30px;
`;

export const ImageWeather = styled.Image`
  width: ${RFValue(180)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(30)}px;
`;
