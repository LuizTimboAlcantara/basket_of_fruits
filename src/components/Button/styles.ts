import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

import Colors from '../../utils/theme/colors';

interface ButtonProps {
  type: 'large' | 'medium';
  color: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: ${({type}) => (type === 'large' ? 80 : 50)}%;
  background-color: ${({color}) => color};
  padding: ${RFValue(18)}px;
  border-radius: ${RFValue(5)}px;
  align-items: center;
  justify-content: center;
  align-self: center;
  top: 5%;
`;

export const Title = styled.Text`
  color: ${Colors.shape};
  font-size: ${RFValue(14)}px;
`;
