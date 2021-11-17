import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 ${RFValue(25)}px;
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10%;
`;
