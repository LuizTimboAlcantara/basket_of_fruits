import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import Colors from '../../utils/theme/colors';

export const Container = styled(TextInput)`
  width: 100%;
  padding: ${RFValue(16)}px;
  font-size: ${RFValue(14)}px;
  background-color: ${Colors.shape};
  color: ${Colors.text_dark};
  border-radius: ${RFValue(5)}px;
  margin-bottom: ${RFValue(8)}px;
`;
