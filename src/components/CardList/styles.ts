import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {MaterialIcons} from '../../modules';

import Colors from '../../utils/theme/colors';

export const Container = styled.View`
  width: 45%;
  background-color: ${Colors.shape};
  border-radius: ${RFValue(20)}px;
  padding-top: ${RFValue(50)}px;
  padding-bottom: ${RFValue(20)}px;
  align-items: center;
  margin: ${RFValue(5)}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const ContainerInfo = styled.View`
  width: 100%;
  top: 15%;
  justify-content: center;
  align-self: center;
`;

export const IconContainer = styled.TouchableOpacity`
  bottom: 15%;
`;

export const TitleFruits = styled.Text``;

export const ValueTitle = styled.Text``;

export const Icon = styled(MaterialIcons)`
  align-self: flex-end;
  font-size: ${RFValue(35)}px;
  color: ${Colors.success};
`;
