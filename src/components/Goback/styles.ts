import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {MaterialIcons} from '../../modules';

import Colors from '../../utils/theme/colors';

export const Container = styled.View`
  flex: 1;
`;

export const IconBack = styled(MaterialIcons)`
  margin-top: 2%;
  height: ${RFValue(60)}px;
  font-size: ${RFValue(40)}px;
  color: ${Colors.text};
`;
