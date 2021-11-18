import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {MaterialIcons} from '../../modules';

import Colors from '../../utils/theme/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-self: flex-end;
  margin-top: 2%;
  margin-right: 2%;
  flex-direction: row;
`;

export const IconCart = styled(MaterialIcons)`
  padding-top: ${getStatusBarHeight()}px;
  margin-top: 20%;
  height: ${RFValue(60)}px;
  right: 20%;
  font-size: ${RFValue(28)}px;
  color: ${Colors.success};
`;

export const IconExit = styled(MaterialIcons)`
  padding-top: ${getStatusBarHeight()}px;
  margin-top: 25%;
  height: ${RFValue(60)}px;
  font-size: ${RFValue(28)}px;
  color: ${Colors.text};
`;
