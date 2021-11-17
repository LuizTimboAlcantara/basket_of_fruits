import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../utils/theme/colors';

export const Container = styled.View`
  width: 90%;
  height: ${RFValue(50)}px;
  flex-direction: row;
  align-self: center;
  padding: 0 ${RFValue(20)}px;
  background-color: ${Colors.text};
  border-radius: ${RFValue(20)}px;
  margin-top: 25%;
  margin-bottom: ${RFValue(20)}px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  align-items: center;
  padding-left: ${RFValue(10)}px;
`;

export const IconSearch = styled(Icon)`
  font-size: ${RFValue(35)}px;
  align-self: center;
  color: ${Colors.text_dark};
`;
