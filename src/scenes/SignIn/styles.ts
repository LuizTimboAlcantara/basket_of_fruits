import styled from 'styled-components/native';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

import {Logo} from '../../assets/svgs';

import Colors from '../../utils/theme/colors';

export const Wrapper = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${Colors.primary};
  justify-content: flex-end;
  align-items: center;
`;

export const IconLogo = styled(Logo)`
  width: ${RFValue(250)}px;
  height: ${RFValue(250)}px;
`;

export const TitleWrapper = styled.View`
  align-items: center;
  top: 10%;
`;

export const Title = styled.Text`
  color: ${Colors.shape};
  font-size: ${RFValue(30)}px;
  text-align: center;
  margin-top: ${RFValue(45)}px;
`;

export const TitleInputs = styled.Text`
  color: ${Colors.shape};
  font-size: ${RFValue(15)}px;
  margin-bottom: ${RFValue(5)}px;
`;

export const TitleErros = styled.Text`
  color: ${Colors.attention};
  font-size: ${RFValue(15)}px;
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
