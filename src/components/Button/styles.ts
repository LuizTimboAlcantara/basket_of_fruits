import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

import Colors from '../../utils/theme/colors';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${Colors.secondary};
  padding: ${RFValue(18)}px;
  border-radius: ${RFValue(5)}px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${Colors.shape};
  font-size: ${RFValue(14)}px;
`;
