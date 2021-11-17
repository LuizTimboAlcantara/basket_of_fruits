import styled from 'styled-components/native';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

import Colors from '../../utils/theme/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${Colors.primary};
  justify-content: flex-end;
  align-items: center;
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
  height: ${RFValue(110)}px;
  width: ${RFValue(110)}px;
`;

export const Title = styled.Text`
  color: ${Colors.shape};
  font-size: ${RFValue(30)}px;
  text-align: center;
  margin-top: ${RFValue(45)}px;
`;

export const SignInTitle = styled.Text`
  color: ${Colors.shape};
  font-size: ${RFValue(16)}px;
  text-align: center;
  margin-top: ${RFValue(80)}px;
  margin-bottom: ${RFValue(67)}px;
`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;
  background-color: ${Colors.secondary};
`;

export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 ${RFValue(32)}px;
  justify-content: space-between;
`;
