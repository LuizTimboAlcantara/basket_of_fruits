import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  margin-bottom: ${getBottomSpace()}px;
`;

export const Content = styled.View`
  height: 100%;
  margin-left: 5%;
`;
