import styled from 'styled-components/native';
import { colors } from '../../colors';

export const HeaderContainer = styled.View`
  background-color: ${colors.secondary};
  height: 8%;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 4%;
`;

export const HeaderMenuContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;

export const HeaderText = styled.Text`
  flex: 2;
  flex-direction: row;
  justify-content: flex-start;
  color: ${colors.text};
  font-size: 20px;
`;
