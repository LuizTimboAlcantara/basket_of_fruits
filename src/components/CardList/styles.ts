import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {MaterialIcons} from '../../modules';

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
`;

export const ImageWeather = styled.Image`
  width: ${RFValue(180)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(30)}px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  width: 100%;
  top: 15%;
  justify-content: flex-start;
  align-self: center;
`;

export const IconContainer = styled.View``;

export const Icon = styled(MaterialIcons)`
  justify-content: flex-end;
  align-self: flex-end;
  font-size: ${RFValue(35)}px;
  color: ${Colors.success};
`;
