import styled from 'styled-components/native';

import Colors from '../../utils/theme/colors';

export const Container = styled.View`
  height: 70px;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  background-color: ${Colors.text};
  border-radius: 20px;
  margin-top: 35px;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  align-items: center;
  padding-left: 10px;
`;
