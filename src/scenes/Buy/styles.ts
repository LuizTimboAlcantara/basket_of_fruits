import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ContainerInfo = styled.View`
  justify-content: center;
  align-items: center;
  bottom: 10%;
`;

export const DescriptionInfo = styled.Text`
  justify-content: center;
  align-items: center;
  padding: 0 ${RFValue(10)}px;
  text-align: left;
`;

export const InputContainer = styled.View`
  bottom: 5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 ${RFValue(25)}px;
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10%;
`;

export const TitleName = styled.Text`
  margin-top: ${RFValue(15)}px;
`;

export const TitleValue = styled.Text``;
