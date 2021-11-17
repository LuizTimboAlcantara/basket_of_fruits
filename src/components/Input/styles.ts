import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

import Colors from '../../utils/theme/colors';

interface InputProps {
  type: 'large' | 'medium';
}

export const Container = styled.TextInput<InputProps>`
  width: ${({type}) => (type === 'large' ? 100 : 50)}%;
  padding: ${RFValue(16)}px;
  font-size: ${RFValue(14)}px;
  background-color: ${Colors.shape};
  color: ${Colors.text_dark};
  border-radius: ${RFValue(5)}px;
  margin-bottom: ${RFValue(8)}px;
`;
