import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import Colors from '../../utils/theme/colors';

export const Container = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${Colors.attention};
  align-items: center;
  justify-content: center;
  position: absolute;
  align-self: flex-end;
  top: ${getStatusBarHeight()}px;
`;
