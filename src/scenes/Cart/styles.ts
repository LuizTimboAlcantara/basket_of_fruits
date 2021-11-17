import styled from 'styled-components/native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight()}px;
`;

export const Footer = styled.View`
  bottom: ${getBottomSpace()}px;
`;
