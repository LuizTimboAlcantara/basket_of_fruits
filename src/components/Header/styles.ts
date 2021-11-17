import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {MaterialIcons} from '../../modules';

import Colors from '../../utils/theme/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-self: flex-end;
`;

export const Icon = styled(MaterialIcons)`
  padding-top: ${getStatusBarHeight()};
  margin-top: 20%;
  height: ${RFValue(60)}px;
  right: 20%;
  font-size: ${RFValue(35)}px;
  color: ${Colors.success};
`;