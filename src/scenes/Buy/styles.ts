import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  bottom: 20%;
`;

export const DescriptionInfo = styled.Text`
  justify-content: center;
  align-items: center;
  padding: 0 ${RFValue(10)}px;
  text-align: left;
`;

export const InputContainer = styled.View`
  bottom: 10%;
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
