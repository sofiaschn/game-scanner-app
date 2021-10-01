import styled from 'styled-components/native';
import { colors } from '../../colors';

export const GamepadContainer = styled.View`
    height: 30%;
    width: 93%;
    flex-direction: row;
`;

export const ButtonView = styled.View`
    background-color: ${colors.secondary};
    height: 100%;
    width: 100%;
    flex: 1;
    margin: 1%;
`;

export const ArrowView = styled.View`
    background-color: ${colors.secondary};
    height: 100%;
    width: 100%;
    flex: 1;
    margin: 1%;
`;

export const UpArrow = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const MiddleArrows = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const BottomArrow = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
