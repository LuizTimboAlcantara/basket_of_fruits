import styled from 'styled-components/native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight()}px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  justify-content: center;
  align-self: center;
  margin-top: 5%;
`;

export const Footer = styled.View`
  bottom: ${getBottomSpace()}px;
`;
