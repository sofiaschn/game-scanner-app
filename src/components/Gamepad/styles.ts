import styled from 'styled-components/native';
import { colors } from '../../colors';

export const GamepadContainer = styled.View`
    height: 28%;
    flex-direction: row;
    margin: 1%;
`;

export const ButtonView = styled.View`
    background-color: ${colors.secondary};
    margin: 1%;
    flex: 1;
`;

export const ArrowView = styled.View`
    background-color: ${colors.secondary};
    margin: 1%;
    flex: 1;
`;

export const MiddleArrows = styled.View`
    flex: 1;
    flex-direction: row;
`;
